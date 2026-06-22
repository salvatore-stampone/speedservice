-- Schema già applicato sul progetto Supabase remoto via MCP.
-- Usare questo file come riferimento locale; non rieseguire se la tabella esiste già.

create table if not exists public.vehicles (
    id uuid primary key default gen_random_uuid(),
    category text not null check (category in ('cars', 'motorcycles', 'vans')),
    title text not null,
    year integer not null,
    price integer not null,
    mileage integer not null default 0,
    engine text,
    fuel text not null default '',
    transmission text not null default '',
    description text not null default '',
    sold boolean not null default false,
    featured boolean not null default false,
    sort_order integer not null default 0,
    image_urls text[] not null default '{}',
    cloudinary_public_ids text[] not null default '{}',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

alter table public.vehicles enable row level security;

create policy if not exists "Public read vehicles"
    on public.vehicles
    for select
    using (true);
