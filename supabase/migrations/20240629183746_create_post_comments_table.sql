create table "public"."post_comments" (
    "id" uuid not null default gen_random_uuid(),
    "post_id" uuid not null,
    "user_id" uuid,
    "comment" text not null,
    "created_at" timestamp with time zone not null default now()
);


CREATE UNIQUE INDEX post_comments_pkey ON public.post_comments USING btree (id);

alter table "public"."post_comments" add constraint "post_comments_pkey" PRIMARY KEY using index "post_comments_pkey";

alter table "public"."post_comments" add constraint "public_post_comments_post_id_fkey" FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE not valid;

alter table "public"."post_comments" validate constraint "public_post_comments_post_id_fkey";

alter table "public"."post_comments" add constraint "public_post_comments_user_id_fkey" FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE SET NULL not valid;

alter table "public"."post_comments" validate constraint "public_post_comments_user_id_fkey";

grant delete on table "public"."post_comments" to "anon";

grant insert on table "public"."post_comments" to "anon";

grant references on table "public"."post_comments" to "anon";

grant select on table "public"."post_comments" to "anon";

grant trigger on table "public"."post_comments" to "anon";

grant truncate on table "public"."post_comments" to "anon";

grant update on table "public"."post_comments" to "anon";

grant delete on table "public"."post_comments" to "authenticated";

grant insert on table "public"."post_comments" to "authenticated";

grant references on table "public"."post_comments" to "authenticated";

grant select on table "public"."post_comments" to "authenticated";

grant trigger on table "public"."post_comments" to "authenticated";

grant truncate on table "public"."post_comments" to "authenticated";

grant update on table "public"."post_comments" to "authenticated";

grant delete on table "public"."post_comments" to "service_role";

grant insert on table "public"."post_comments" to "service_role";

grant references on table "public"."post_comments" to "service_role";

grant select on table "public"."post_comments" to "service_role";

grant trigger on table "public"."post_comments" to "service_role";

grant truncate on table "public"."post_comments" to "service_role";

grant update on table "public"."post_comments" to "service_role";
