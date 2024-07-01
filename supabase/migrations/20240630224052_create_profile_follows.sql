create table "public"."profile_follows" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "follower_user_id" uuid not null,
    "following_user_id" uuid not null
);


CREATE UNIQUE INDEX profile_follows_pkey ON public.profile_follows USING btree (id);

alter table "public"."profile_follows" add constraint "profile_follows_pkey" PRIMARY KEY using index "profile_follows_pkey";       

alter table "public"."profile_follows" add constraint "public_profile_follows_follower_user_id_fkey" FOREIGN KEY (follower_user_id) REFERENCES profiles(id) ON DELETE CASCADE not valid;

alter table "public"."profile_follows" validate constraint "public_profile_follows_follower_user_id_fkey";

alter table "public"."profile_follows" add constraint "public_profile_follows_following_user_id_fkey" FOREIGN KEY (following_user_id) REFERENCES profiles(id) ON DELETE CASCADE not valid;

alter table "public"."profile_follows" validate constraint "public_profile_follows_following_user_id_fkey";

grant delete on table "public"."profile_follows" to "anon";

grant insert on table "public"."profile_follows" to "anon";

grant references on table "public"."profile_follows" to "anon";

grant select on table "public"."profile_follows" to "anon";

grant trigger on table "public"."profile_follows" to "anon";

grant truncate on table "public"."profile_follows" to "anon";

grant update on table "public"."profile_follows" to "anon";

grant delete on table "public"."profile_follows" to "authenticated";

grant insert on table "public"."profile_follows" to "authenticated";

grant references on table "public"."profile_follows" to "authenticated";

grant select on table "public"."profile_follows" to "authenticated";

grant trigger on table "public"."profile_follows" to "authenticated";

grant truncate on table "public"."profile_follows" to "authenticated";

grant update on table "public"."profile_follows" to "authenticated";

grant delete on table "public"."profile_follows" to "service_role";

grant insert on table "public"."profile_follows" to "service_role";

grant references on table "public"."profile_follows" to "service_role";

grant select on table "public"."profile_follows" to "service_role";

grant trigger on table "public"."profile_follows" to "service_role";

grant truncate on table "public"."profile_follows" to "service_role";

grant update on table "public"."profile_follows" to "service_role";