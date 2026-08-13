create extension if not exists "pgcrypto";

create type public.user_role as enum ('consumer','artisan','admin');
create type public.handoff_method as enum ('visit','round_trip_delivery','parcel');
create type public.job_status as enum ('requested','quoted','accepted','pickup_requested','received','inspection','in_progress','completed','returning','delivered');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role public.user_role not null default 'consumer',
  nickname text not null,
  created_at timestamptz not null default now()
);

create table public.workshops (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id),
  name text not null,
  categories text[] not null default '{}',
  star_level smallint not null default 1 check (star_level between 1 and 8),
  address text not null,
  latitude double precision,
  longitude double precision,
  verified boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.work_requests (
  id uuid primary key default gen_random_uuid(),
  consumer_id uuid not null references public.profiles(id),
  workshop_id uuid references public.workshops(id),
  job_type text not null,
  title text not null,
  description text not null default '',
  image_urls text[] not null default '{}',
  handoff_method public.handoff_method not null default 'visit',
  status public.job_status not null default 'requested',
  created_at timestamptz not null default now()
);

create table public.quotes (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references public.work_requests(id) on delete cascade,
  workshop_id uuid not null references public.workshops(id),
  price integer not null check (price >= 0),
  estimated_days integer check (estimated_days > 0),
  message text not null default '',
  accepted boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.job_updates (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references public.work_requests(id) on delete cascade,
  status public.job_status not null,
  note text not null default '',
  image_urls text[] not null default '{}',
  created_at timestamptz not null default now()
);

create index workshops_location_idx on public.workshops(latitude, longitude);
create index requests_consumer_idx on public.work_requests(consumer_id, created_at desc);
create index quotes_request_idx on public.quotes(request_id, created_at desc);
