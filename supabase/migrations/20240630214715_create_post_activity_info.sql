create table "public"."post_activity_infos" (
    "post_id" uuid not null,
    "vote_count" bigint not null default '0'::bigint,
    "comment_count" bigint not null default '0'::bigint,
    "view_count" bigint not null default '0'::bigint
);


CREATE UNIQUE INDEX post_activity_infos_pkey ON public.post_activity_infos USING btree (post_id);

alter table "public"."post_activity_infos" add constraint "post_activity_infos_pkey" PRIMARY KEY using index "post_activity_infos_pkey";

alter table "public"."post_activity_infos" add constraint "public_post_activity_infos_post_id_fkey" FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE not valid;

alter table "public"."post_activity_infos" validate constraint "public_post_activity_infos_post_id_fkey";

grant delete on table "public"."post_activity_infos" to "anon";

grant insert on table "public"."post_activity_infos" to "anon";

grant references on table "public"."post_activity_infos" to "anon";

grant select on table "public"."post_activity_infos" to "anon";

grant trigger on table "public"."post_activity_infos" to "anon";

grant truncate on table "public"."post_activity_infos" to "anon";

grant update on table "public"."post_activity_infos" to "anon";

grant delete on table "public"."post_activity_infos" to "authenticated";

grant insert on table "public"."post_activity_infos" to "authenticated";

grant references on table "public"."post_activity_infos" to "authenticated";

grant select on table "public"."post_activity_infos" to "authenticated";

grant trigger on table "public"."post_activity_infos" to "authenticated";

grant truncate on table "public"."post_activity_infos" to "authenticated";

grant update on table "public"."post_activity_infos" to "authenticated";

grant delete on table "public"."post_activity_infos" to "service_role";

grant insert on table "public"."post_activity_infos" to "service_role";

grant references on table "public"."post_activity_infos" to "service_role";

grant select on table "public"."post_activity_infos" to "service_role";

grant trigger on table "public"."post_activity_infos" to "service_role";

grant truncate on table "public"."post_activity_infos" to "service_role";

grant update on table "public"."post_activity_infos" to "service_role";