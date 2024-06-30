create table "public"."post_views" (
    "id" uuid not null default gen_random_uuid(),
    "post_id" uuid not null,
    "user_id" uuid not null,
    "created_at" timestamp with time zone not null default now()
);


CREATE UNIQUE INDEX post_views_pkey ON public.post_views USING btree (id);

alter table "public"."post_views" add constraint "post_views_pkey" PRIMARY KEY using index "post_views_pkey";

alter table "public"."post_views" add constraint "public_post_views_post_id_fkey" FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE not valid;

alter table "public"."post_views" validate constraint "public_post_views_post_id_fkey";

alter table "public"."post_views" add constraint "public_post_views_user_id_fkey" FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE not valid;

alter table "public"."post_views" validate constraint "public_post_views_user_id_fkey";

grant delete on table "public"."post_views" to "anon";

grant insert on table "public"."post_views" to "anon";

grant references on table "public"."post_views" to "anon";

grant select on table "public"."post_views" to "anon";

grant trigger on table "public"."post_views" to "anon";

grant truncate on table "public"."post_views" to "anon";

grant update on table "public"."post_views" to "anon";

grant delete on table "public"."post_views" to "authenticated";

grant insert on table "public"."post_views" to "authenticated";

grant references on table "public"."post_views" to "authenticated";

grant select on table "public"."post_views" to "authenticated";

grant trigger on table "public"."post_views" to "authenticated";

grant truncate on table "public"."post_views" to "authenticated";

grant update on table "public"."post_views" to "authenticated";

grant delete on table "public"."post_views" to "service_role";

grant insert on table "public"."post_views" to "service_role";

grant references on table "public"."post_views" to "service_role";

grant select on table "public"."post_views" to "service_role";

grant trigger on table "public"."post_views" to "service_role";

grant truncate on table "public"."post_views" to "service_role";

grant update on table "public"."post_views" to "service_role";