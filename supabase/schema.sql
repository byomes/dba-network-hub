create table if not exists users (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  password_hash text not null,
  name text not null,
  church text not null,
  role text not null default 'pastor',
  expertise text[] default '{}',
  status text not null default 'pending',
  is_admin boolean default false,
  created_at timestamptz default now()
);

insert into users (email, password_hash, name, church, role, expertise, status, is_admin)
values (
  'pastorbill@catalyst302.com',
  '$2b$10$PSkvAxW5xrqif/d1dOBBROx3mp0m7j5d/.v4qNzPqs6aHY7wNYGoK',
  'Pastor Bill Yomes',
  'Catalyst Community Church',
  'pastor',
  array['Apologetics', 'Theological Education', 'Digital Ministry'],
  'active',
  true
)
on conflict (email) do nothing;
