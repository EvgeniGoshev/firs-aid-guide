import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const authorization = request.headers.get("Authorization") || "";
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authorization } } },
    );
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      return Response.json({ error: "Authentication required" }, { status: 401, headers: corsHeaders });
    }

    const body = await request.json();
    const model = new Supabase.ai.Session("gte-small");

    if (body.action === "index") {
      const { data: profile } = await supabase
        .from("profiles")
        .select("app_role")
        .eq("id", userData.user.id)
        .single();
      if (!profile || !["admin", "instructor"].includes(profile.app_role)) {
        return Response.json({ error: "Staff access required" }, { status: 403, headers: corsHeaders });
      }

      const [{ data: contentItems }, { data: resources }] = await Promise.all([
        supabase.from("content_items").select("id, title, summary, content_type, body").eq("status", "published"),
        supabase.from("resources").select("id, title, description, category").eq("active", true),
      ]);
      const items = [
        ...(contentItems || []).map((item) => ({
          source_key: `content:${item.id}`,
          title: item.title,
          summary: item.summary,
          content_type: item.content_type,
          content: `${item.title}\n${item.summary}\n${JSON.stringify(item.body)}`,
        })),
        ...(resources || []).map((item) => ({
          source_key: `resource:${item.id}`,
          title: item.title,
          summary: item.description || item.category,
          content_type: "resource",
          content: `${item.title}\n${item.description || ""}\n${item.category}`,
        })),
      ];

      for (const item of items) {
        const embedding = await model.run(item.content, { mean_pool: true, normalize: true });
        const { error } = await supabase.from("content_embeddings").upsert({ ...item, embedding });
        if (error) throw error;
      }
      return Response.json({ indexed: items.length }, { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const query = String(body.query || "").trim();
    if (query.length < 2) {
      return Response.json({ error: "Search query is too short" }, { status: 400, headers: corsHeaders });
    }
    const queryEmbedding = await model.run(query, { mean_pool: true, normalize: true });
    const { data, error } = await supabase.rpc("match_training_content", {
      query_embedding: queryEmbedding,
      match_threshold: 0.5,
      match_count: 8,
    });
    if (error) throw error;

    return Response.json({ results: data || [] }, { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Unexpected error" },
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
