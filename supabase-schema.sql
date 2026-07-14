-- Run this in Supabase SQL Editor.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  team_name text default 'Student first aid team',
  initials text default 'FA',
  role text not null default 'Competitor',
  heard_from text not null default 'Other',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.user_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  quiz_score int not null default 0,
  quiz_taken boolean not null default false,
  scenarios_passed int not null default 0,
  streak int not null default 0,
  last_streak_date date,
  total_xp int not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.lesson_progress (
  user_id uuid references auth.users(id) on delete cascade,
  lesson_id text not null,
  learned_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

create table if not exists public.quiz_questions (
  id bigserial primary key,
  rotation_group int not null check (rotation_group between 0 and 3),
  question text not null,
  options jsonb not null,
  answer_index int not null check (answer_index between 0 and 3),
  explanation text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.quiz_attempts (
  id bigserial primary key,
  user_id uuid references auth.users(id) on delete cascade,
  rotation_group int not null,
  score int not null,
  total int not null default 5,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.user_progress enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.quiz_questions enable row level security;
alter table public.quiz_attempts enable row level security;

create policy "Profiles are readable by owner" on public.profiles
  for select using (auth.uid() = id);
create policy "Profiles are insertable by owner" on public.profiles
  for insert with check (auth.uid() = id);
create policy "Profiles are updatable by owner" on public.profiles
  for update using (auth.uid() = id);

create policy "Progress readable by owner" on public.user_progress
  for select using (auth.uid() = user_id);
create policy "Progress insertable by owner" on public.user_progress
  for insert with check (auth.uid() = user_id);
create policy "Progress updatable by owner" on public.user_progress
  for update using (auth.uid() = user_id);

create policy "Lesson progress readable by owner" on public.lesson_progress
  for select using (auth.uid() = user_id);
create policy "Lesson progress insertable by owner" on public.lesson_progress
  for insert with check (auth.uid() = user_id);

create policy "Quiz questions are public read" on public.quiz_questions
  for select using (active = true);

create policy "Quiz attempts readable by owner" on public.quiz_attempts
  for select using (auth.uid() = user_id);
create policy "Quiz attempts insertable by owner" on public.quiz_attempts
  for insert with check (auth.uid() = user_id);

insert into public.quiz_questions (rotation_group, question, options, answer_index, explanation) values
(0, 'A student collapses and is not responding. What is the safest first sequence?', '["Check scene safety, check response, call for help, open airway, check breathing.", "Start with a detailed medical history.", "Give water and wait.", "Move them to a chair."]', 0, 'Life threats come before history or comfort actions.'),
(0, 'Which sign makes severe bleeding a priority?', '["Blood soaking through clothing and pale clammy skin.", "Small scratch with mild pain.", "Old bruise.", "Minor nose discomfort."]', 0, 'Heavy bleeding and shock signs need immediate direct pressure and emergency help.'),
(0, 'A casualty can cough strongly while choking. What should you do?', '["Encourage coughing and monitor closely.", "Give abdominal thrusts immediately.", "Put fingers in the mouth.", "Give a drink."]', 0, 'Effective coughing can clear the airway.'),
(0, 'What is a strong team-leader instruction?', '["Mila, call emergency services and report back. Alex, bring the AED.", "Someone do something.", "Everybody crowd around.", "Wait until I decide everything alone."]', 0, 'Named tasks and closed-loop communication reduce confusion.'),
(0, 'For a serious burn, what is best?', '["Cool with running water, remove tight items if not stuck, cover loosely.", "Use butter.", "Apply ice directly.", "Burst blisters."]', 0, 'Cooling and clean covering are safer than home remedies.'),
(1, 'In a multi-casualty scene, who gets checked first?', '["Quiet/unresponsive or life-threat casualty.", "The loudest person.", "The person with the smallest wound.", "The closest friend."]', 0, 'The loudest casualty is not always the most serious.'),
(1, 'A person has chest pressure, sweating, and shortness of breath. What should you do?', '["Call emergency services, keep at rest, monitor, prepare AED.", "Make them walk.", "Give food.", "Ignore if young."]', 0, 'Chest pain symptoms can be serious and need urgent help.'),
(1, 'During a seizure, what should you avoid?', '["Putting anything in the mouth.", "Moving hazards away.", "Timing the seizure.", "Protecting the head."]', 0, 'Do not put anything in the mouth or restrain the person.'),
(1, 'What makes a handover strong?', '["Scene, findings, care given, changes, timings, concerns.", "Only the casualty name.", "Only the bandage used.", "Everyone talks at once."]', 0, 'A structured handover preserves critical information.'),
(1, 'A severe allergic reaction is suspected. What is the priority?', '["Call emergency help and assist with prescribed auto-injector if trained.", "Wait for rash to disappear.", "Make them stand.", "Give unknown tablets."]', 0, 'Anaphylaxis can deteriorate quickly.'),
(2, 'A casualty is unresponsive but breathing normally. What is best?', '["Keep airway open, recovery position if appropriate, monitor breathing.", "Start compressions immediately.", "Give water.", "Leave them alone."]', 0, 'Unresponsive breathing casualties need airway protection and monitoring.'),
(2, 'Which action is best for suspected spinal injury?', '["Keep still and call help.", "Force them to sit up.", "Remove helmet casually.", "Walk them to a car."]', 0, 'Unnecessary movement may worsen injury.'),
(2, 'What is the first priority in shock?', '["Treat the cause, call help, keep warm, monitor.", "Give alcohol.", "Let them walk.", "Ignore pale clammy skin."]', 0, 'Shock is a whole-body emergency.'),
(2, 'A teammate is unsure what to do. What should the leader do?', '["Give a clear named task and ask them to report back.", "Tell them to guess.", "Ignore them.", "Stop all care."]', 0, 'Clear roles improve team performance.'),
(2, 'What should you record during a competition scenario?', '["Times, findings, care, changes, and handover details.", "Only final score.", "Only the judge name.", "Nothing until the end."]', 0, 'Good notes support reassessment and handover.'),
(3, 'FAST is used to recognize what?', '["Stroke signs.", "Fracture severity.", "Burn depth.", "Choking type."]', 0, 'Face, Arms, Speech, Time helps identify stroke signs.'),
(3, 'Asthma casualty is struggling to breathe. What position usually helps?', '["Sitting upright.", "Flat on back.", "Head lower than feet.", "Walking fast."]', 0, 'Upright positioning can make breathing easier.'),
(3, 'What is unsafe in poisoning?', '["Making the casualty vomit.", "Calling poison/emergency guidance.", "Keeping containers for professionals.", "Checking scene safety."]', 0, 'Do not induce vomiting unless specifically told by professionals.'),
(3, 'Advanced scenarios often include misleading clues. What should you rely on?', '["Primary survey, reassessment, and observed changes.", "The loudest witness only.", "Guessing a diagnosis.", "Ignoring new symptoms."]', 0, 'Structured assessment protects against misleading information.'),
(3, 'If the AED arrives during CPR, what should happen?', '["Turn it on and follow prompts with minimal interruption.", "Ignore it.", "Use it only after ten minutes.", "Let everyone touch the casualty during analysis."]', 0, 'AED prompts guide safe use.');
