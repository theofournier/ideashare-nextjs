create table "public"."profile_activity_infos" (
    "user_id" uuid not null,
    "vote_count" bigint not null default '0'::bigint,
    "follower_count" bigint not null default '0'::bigint,
    "following_count" bigint not null default '0'::bigint,
    "post_count" bigint not null default '0'::bigint,
    "post_voted_count" bigint not null default '0'::bigint
);


CREATE UNIQUE INDEX profile_activity_infos_pkey ON public.profile_activity_infos USING btree (user_id);

alter table "public"."profile_activity_infos" add constraint "profile_activity_infos_pkey" PRIMARY KEY using index "profile_activity_infos_pkey";

alter table "public"."profile_activity_infos" add constraint "public_profile_activity_infos_user_id_fkey" FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE not valid;

alter table "public"."profile_activity_infos" validate constraint "public_profile_activity_infos_user_id_fkey";

grant delete on table "public"."profile_activity_infos" to "anon";

grant insert on table "public"."profile_activity_infos" to "anon";

grant references on table "public"."profile_activity_infos" to "anon";

grant select on table "public"."profile_activity_infos" to "anon";

grant trigger on table "public"."profile_activity_infos" to "anon";

grant truncate on table "public"."profile_activity_infos" to "anon";

grant update on table "public"."profile_activity_infos" to "anon";

grant delete on table "public"."profile_activity_infos" to "authenticated";

grant insert on table "public"."profile_activity_infos" to "authenticated";

grant references on table "public"."profile_activity_infos" to "authenticated";

grant select on table "public"."profile_activity_infos" to "authenticated";

grant trigger on table "public"."profile_activity_infos" to "authenticated";

grant truncate on table "public"."profile_activity_infos" to "authenticated";

grant update on table "public"."profile_activity_infos" to "authenticated";

grant delete on table "public"."profile_activity_infos" to "service_role";

grant insert on table "public"."profile_activity_infos" to "service_role";

grant references on table "public"."profile_activity_infos" to "service_role";

grant select on table "public"."profile_activity_infos" to "service_role";

grant trigger on table "public"."profile_activity_infos" to "service_role";

grant truncate on table "public"."profile_activity_infos" to "service_role";

grant update on table "public"."profile_activity_infos" to "service_role";