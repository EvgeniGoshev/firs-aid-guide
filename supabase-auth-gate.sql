-- Run this once in the Supabase SQL Editor for an existing installation.
-- It removes anonymous access to quiz questions while keeping access for signed-in users.

alter table public.quiz_questions enable row level security;

drop policy if exists "Quiz questions are public read" on public.quiz_questions;
drop policy if exists "Quiz questions are available to authenticated users" on public.quiz_questions;

create policy "Quiz questions are available to authenticated users"
  on public.quiz_questions
  for select
  to authenticated
  using (active = true);
