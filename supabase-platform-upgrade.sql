-- First Aid Trainer: free-tier platform upgrade
-- Run once in the Supabase SQL Editor. Safe to run again.

create extension if not exists pgcrypto;
create extension if not exists vector with schema extensions;

alter table public.profiles
  add column if not exists app_role text not null default 'learner';

alter table public.profiles drop constraint if exists profiles_app_role_check;
alter table public.profiles
  add constraint profiles_app_role_check check (app_role in ('learner', 'instructor', 'admin'));

create or replace function public.is_staff()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and app_role in ('instructor', 'admin')
  );
$$;

revoke all on function public.is_staff() from public;
grant execute on function public.is_staff() to authenticated;

create or replace function public.protect_app_role()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.app_role is distinct from old.app_role and not public.is_staff() then
    new.app_role := old.app_role;
  end if;
  return new;
end;
$$;

drop trigger if exists protect_profile_app_role on public.profiles;
create trigger protect_profile_app_role
  before update on public.profiles
  for each row execute function public.protect_app_role();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  profile_name text;
begin
  profile_name := coalesce(new.raw_user_meta_data ->> 'display_name', split_part(new.email, '@', 1), 'First aid learner');

  insert into public.profiles (id, display_name, team_name, initials, role, heard_from, app_role)
  values (
    new.id,
    profile_name,
    'First aid learner',
    upper(coalesce(new.raw_user_meta_data ->> 'initials', left(profile_name, 2), 'FA')),
    coalesce(new.raw_user_meta_data ->> 'role', 'Competitor'),
    coalesce(new.raw_user_meta_data ->> 'heard_from', 'Other'),
    case when lower(coalesce(new.email, '')) = 'evgenigoshev57@gmail.com' then 'admin' else 'learner' end
  )
  on conflict (id) do nothing;

  insert into public.user_progress (user_id)
  values (new.id)
  on conflict (user_id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create table if not exists public.achievements (
  id text primary key,
  title text not null,
  description text not null,
  icon text not null default 'award',
  xp_reward int not null default 0,
  sort_order int not null default 0
);

create table if not exists public.user_achievements (
  user_id uuid not null references auth.users(id) on delete cascade,
  achievement_id text not null references public.achievements(id) on delete cascade,
  earned_at timestamptz not null default now(),
  primary key (user_id, achievement_id)
);

create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_key text not null default 'first-aid-foundations',
  certificate_code text not null unique default upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 12)),
  issued_at timestamptz not null default now(),
  unique (user_id, course_key)
);

create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null default '',
  category text not null default 'Guide',
  file_path text,
  external_url text,
  created_by uuid references auth.users(id) on delete set null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  check (file_path is not null or external_url is not null)
);

create table if not exists public.content_items (
  id uuid primary key default gen_random_uuid(),
  content_type text not null check (content_type in ('lesson', 'scenario', 'announcement')),
  title text not null,
  summary text not null default '',
  body jsonb not null default '{}'::jsonb,
  status text not null default 'published' check (status in ('draft', 'published')),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.training_rooms (
  id uuid primary key default gen_random_uuid(),
  room_code text not null unique,
  title text not null,
  host_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'waiting' check (status in ('waiting', 'live', 'finished')),
  active_prompt jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.room_participants (
  room_id uuid not null references public.training_rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  score int not null default 0,
  joined_at timestamptz not null default now(),
  primary key (room_id, user_id)
);

create table if not exists public.room_events (
  id bigint generated by default as identity primary key,
  room_id uuid not null references public.training_rooms(id) on delete cascade,
  user_id uuid references auth.users(id) on delete set null,
  event_type text not null,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  message text not null,
  kind text not null default 'training',
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.content_embeddings (
  id uuid primary key default gen_random_uuid(),
  source_key text not null unique,
  title text not null,
  summary text not null default '',
  content_type text not null,
  content text not null,
  embedding extensions.vector(384) not null,
  updated_at timestamptz not null default now()
);

insert into public.achievements (id, title, description, icon, xp_reward, sort_order) values
  ('first_step', 'First Step', 'Complete your first lesson.', 'footprints', 10, 1),
  ('five_lessons', 'Committed Learner', 'Complete five lessons.', 'book-open-check', 20, 2),
  ('quiz_master', 'Quiz Master', 'Score at least 80% on a quiz.', 'brain', 25, 3),
  ('scenario_ready', 'Scenario Ready', 'Pass three scenarios.', 'route', 25, 4),
  ('week_streak', 'Seven Day Responder', 'Build a seven-day training streak.', 'flame', 35, 5),
  ('xp_100', '100 XP Club', 'Earn 100 training XP.', 'zap', 30, 6),
  ('course_complete', 'First Aid Foundations', 'Complete all 23 lessons.', 'shield-check', 100, 7)
on conflict (id) do update set
  title = excluded.title,
  description = excluded.description,
  icon = excluded.icon,
  xp_reward = excluded.xp_reward,
  sort_order = excluded.sort_order;

alter table public.achievements enable row level security;
alter table public.user_achievements enable row level security;
alter table public.certificates enable row level security;
alter table public.resources enable row level security;
alter table public.content_items enable row level security;
alter table public.training_rooms enable row level security;
alter table public.room_participants enable row level security;
alter table public.room_events enable row level security;
alter table public.notifications enable row level security;
alter table public.content_embeddings enable row level security;

create or replace function public.is_room_member(target_room uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.room_participants
    where room_id = target_room and user_id = auth.uid()
  );
$$;

revoke all on function public.is_room_member(uuid) from public;
grant execute on function public.is_room_member(uuid) to authenticated;

drop policy if exists "Achievements are readable by signed in users" on public.achievements;
create policy "Achievements are readable by signed in users" on public.achievements
  for select to authenticated using (true);

drop policy if exists "Users read own achievements" on public.user_achievements;
create policy "Users read own achievements" on public.user_achievements
  for select to authenticated using (auth.uid() = user_id);

drop policy if exists "Users read own certificates" on public.certificates;
create policy "Users read own certificates" on public.certificates
  for select to authenticated using (auth.uid() = user_id);

drop policy if exists "Authenticated users read resources" on public.resources;
create policy "Authenticated users read resources" on public.resources
  for select to authenticated using (active or public.is_staff());
drop policy if exists "Staff create resources" on public.resources;
create policy "Staff create resources" on public.resources
  for insert to authenticated with check (public.is_staff() and created_by = auth.uid());
drop policy if exists "Staff update resources" on public.resources;
create policy "Staff update resources" on public.resources
  for update to authenticated using (public.is_staff()) with check (public.is_staff());
drop policy if exists "Staff delete resources" on public.resources;
create policy "Staff delete resources" on public.resources
  for delete to authenticated using (public.is_staff());

drop policy if exists "Authenticated users read published content" on public.content_items;
create policy "Authenticated users read published content" on public.content_items
  for select to authenticated using (status = 'published' or public.is_staff());
drop policy if exists "Staff create content" on public.content_items;
create policy "Staff create content" on public.content_items
  for insert to authenticated with check (public.is_staff() and created_by = auth.uid());
drop policy if exists "Staff update content" on public.content_items;
create policy "Staff update content" on public.content_items
  for update to authenticated using (public.is_staff()) with check (public.is_staff());
drop policy if exists "Staff delete content" on public.content_items;
create policy "Staff delete content" on public.content_items
  for delete to authenticated using (public.is_staff());

drop policy if exists "Authenticated users read rooms" on public.training_rooms;
create policy "Authenticated users read rooms" on public.training_rooms
  for select to authenticated using (true);
drop policy if exists "Staff create rooms" on public.training_rooms;
create policy "Staff create rooms" on public.training_rooms
  for insert to authenticated with check (public.is_staff() and host_id = auth.uid());
drop policy if exists "Hosts update rooms" on public.training_rooms;
create policy "Hosts update rooms" on public.training_rooms
  for update to authenticated using (host_id = auth.uid() or public.is_staff()) with check (host_id = auth.uid() or public.is_staff());
drop policy if exists "Hosts delete rooms" on public.training_rooms;
create policy "Hosts delete rooms" on public.training_rooms
  for delete to authenticated using (host_id = auth.uid() or public.is_staff());

drop policy if exists "Participants are visible in joined rooms" on public.room_participants;
create policy "Participants are visible in joined rooms" on public.room_participants
  for select to authenticated using (
    user_id = auth.uid() or public.is_room_member(room_id) or public.is_staff()
  );
drop policy if exists "Users join rooms" on public.room_participants;
create policy "Users join rooms" on public.room_participants
  for insert to authenticated with check (user_id = auth.uid());
drop policy if exists "Users leave rooms" on public.room_participants;
create policy "Users leave rooms" on public.room_participants
  for delete to authenticated using (user_id = auth.uid() or public.is_staff());

drop policy if exists "Room members read events" on public.room_events;
create policy "Room members read events" on public.room_events
  for select to authenticated using (
    public.is_room_member(room_id) or public.is_staff()
  );
drop policy if exists "Room members create events" on public.room_events;
create policy "Room members create events" on public.room_events
  for insert to authenticated with check (
    user_id = auth.uid() and public.is_room_member(room_id)
  );

drop policy if exists "Users read own notifications" on public.notifications;
create policy "Users read own notifications" on public.notifications
  for select to authenticated using (user_id = auth.uid());
drop policy if exists "Users update own notifications" on public.notifications;
create policy "Users update own notifications" on public.notifications
  for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "Staff manage content embeddings" on public.content_embeddings;
create policy "Staff manage content embeddings" on public.content_embeddings
  for all to authenticated using (public.is_staff()) with check (public.is_staff());

create or replace function public.match_training_content(
  query_embedding extensions.vector(384),
  match_threshold float default 0.55,
  match_count int default 8
)
returns table(source_key text, title text, summary text, content_type text, similarity float)
language sql
stable
security definer
set search_path = public, extensions
as $$
  select
    ce.source_key,
    ce.title,
    ce.summary,
    ce.content_type,
    1 - (ce.embedding <=> query_embedding) as similarity
  from public.content_embeddings ce
  where 1 - (ce.embedding <=> query_embedding) >= match_threshold
  order by ce.embedding <=> query_embedding
  limit greatest(1, least(match_count, 20));
$$;

revoke all on function public.match_training_content(extensions.vector, float, int) from public;
grant execute on function public.match_training_content(extensions.vector, float, int) to authenticated;

create or replace function public.refresh_my_achievements()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  lesson_total int;
  stats public.user_progress%rowtype;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;

  select count(*) into lesson_total from public.lesson_progress where user_id = auth.uid();
  select * into stats from public.user_progress where user_id = auth.uid();

  if lesson_total >= 1 then insert into public.user_achievements values (auth.uid(), 'first_step', now()) on conflict do nothing; end if;
  if lesson_total >= 5 then insert into public.user_achievements values (auth.uid(), 'five_lessons', now()) on conflict do nothing; end if;
  if coalesce(stats.quiz_score, 0) >= 80 then insert into public.user_achievements values (auth.uid(), 'quiz_master', now()) on conflict do nothing; end if;
  if coalesce(stats.scenarios_passed, 0) >= 3 then insert into public.user_achievements values (auth.uid(), 'scenario_ready', now()) on conflict do nothing; end if;
  if coalesce(stats.streak, 0) >= 7 then insert into public.user_achievements values (auth.uid(), 'week_streak', now()) on conflict do nothing; end if;
  if coalesce(stats.total_xp, 0) >= 100 then insert into public.user_achievements values (auth.uid(), 'xp_100', now()) on conflict do nothing; end if;
  if lesson_total >= 23 then insert into public.user_achievements values (auth.uid(), 'course_complete', now()) on conflict do nothing; end if;
end;
$$;

revoke all on function public.refresh_my_achievements() from public;
grant execute on function public.refresh_my_achievements() to authenticated;

create or replace function public.get_leaderboard(limit_count int default 20)
returns table(rank bigint, display_name text, initials text, total_xp int, streak int, lessons_completed bigint)
language sql
stable
security definer
set search_path = public
as $$
  select
    dense_rank() over (order by up.total_xp desc, count(lp.lesson_id) desc, up.streak desc) as rank,
    p.display_name,
    p.initials,
    up.total_xp,
    up.streak,
    count(lp.lesson_id) as lessons_completed
  from public.user_progress up
  join public.profiles p on p.id = up.user_id
  left join public.lesson_progress lp on lp.user_id = up.user_id
  group by p.display_name, p.initials, up.total_xp, up.streak
  order by up.total_xp desc, lessons_completed desc, up.streak desc
  limit greatest(1, least(limit_count, 100));
$$;

revoke all on function public.get_leaderboard(int) from public;
grant execute on function public.get_leaderboard(int) to authenticated;

create or replace function public.issue_my_certificate()
returns public.certificates
language plpgsql
security definer
set search_path = public
as $$
declare
  lesson_total int;
  quiz_result int;
  issued public.certificates;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  select count(*) into lesson_total from public.lesson_progress where user_id = auth.uid();
  select quiz_score into quiz_result from public.user_progress where user_id = auth.uid();

  if lesson_total < 10 or coalesce(quiz_result, 0) < 80 then
    raise exception 'Complete at least 10 lessons and score 80%% or more to earn a certificate';
  end if;

  insert into public.certificates (user_id)
  values (auth.uid())
  on conflict (user_id, course_key) do update set user_id = excluded.user_id
  returning * into issued;

  return issued;
end;
$$;

revoke all on function public.issue_my_certificate() from public;
grant execute on function public.issue_my_certificate() to authenticated;

create or replace function public.create_daily_training_reminders()
returns void
language sql
security definer
set search_path = public
as $$
  insert into public.notifications (user_id, title, message, kind)
  select up.user_id, 'Keep your streak alive', 'Complete a quiz or scenario today to continue your responder streak.', 'streak'
  from public.user_progress up
  where coalesce(up.last_streak_date, date '1970-01-01') < current_date
    and not exists (
      select 1 from public.notifications n
      where n.user_id = up.user_id and n.kind = 'streak' and n.created_at::date = current_date
    );
$$;

revoke all on function public.create_daily_training_reminders() from public;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'training-resources',
  'training-resources',
  false,
  52428800,
  array['application/pdf', 'image/jpeg', 'image/png', 'image/webp', 'video/mp4']
)
on conflict (id) do update set
  public = false,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Authenticated users read training resources" on storage.objects;
create policy "Authenticated users read training resources" on storage.objects
  for select to authenticated using (bucket_id = 'training-resources');
drop policy if exists "Staff upload training resources" on storage.objects;
create policy "Staff upload training resources" on storage.objects
  for insert to authenticated with check (bucket_id = 'training-resources' and public.is_staff());
drop policy if exists "Staff update training resources" on storage.objects;
create policy "Staff update training resources" on storage.objects
  for update to authenticated using (bucket_id = 'training-resources' and public.is_staff());
drop policy if exists "Staff delete training resources" on storage.objects;
create policy "Staff delete training resources" on storage.objects
  for delete to authenticated using (bucket_id = 'training-resources' and public.is_staff());

do $$
begin
  if not exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    create publication supabase_realtime;
  end if;
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'training_rooms') then
    alter publication supabase_realtime add table public.training_rooms;
  end if;
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'room_participants') then
    alter publication supabase_realtime add table public.room_participants;
  end if;
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'room_events') then
    alter publication supabase_realtime add table public.room_events;
  end if;
end $$;

-- Optional free in-database reminder schedule. If pg_cron is unavailable, the rest of the migration still works.
do $$
begin
  create extension if not exists pg_cron;
  if not exists (select 1 from cron.job where jobname = 'daily-first-aid-reminders') then
    perform cron.schedule('daily-first-aid-reminders', '0 18 * * *', 'select public.create_daily_training_reminders();');
  end if;
exception when others then
  raise notice 'pg_cron schedule skipped: %', sqlerrm;
end $$;
