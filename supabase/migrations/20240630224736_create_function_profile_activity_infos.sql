set check_function_bodies = off;

CREATE OR REPLACE FUNCTION private.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$begin
insert into
  public.profiles (id, username, avatar_url)
values
  (
    new.id,
    new.raw_user_meta_data ->> 'username',
    new.raw_user_meta_data ->> 'avatar_url'
  );

insert into
  public.profile_activity_infos (user_id)
values
  (
    new.id
  );

return new;

end;$function$
;

CREATE OR REPLACE FUNCTION private.modify_profile_post_count()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE profile_activity_infos
    SET post_count = post_count + 1
    WHERE user_id = NEW.user_id;
    RETURN NEW;
  ELSEIF TG_OP = 'DELETE' THEN
    UPDATE profile_activity_infos
    SET post_count = post_count - 1
    WHERE user_id = OLD.user_id;
    RETURN OLD;
  END IF;
END;$function$
;

CREATE OR REPLACE FUNCTION private.modify_profile_post_voted_count()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE profile_activity_infos
    SET post_voted_count = post_voted_count + 1
    WHERE user_id = NEW.user_id;
    RETURN NEW;
  ELSEIF TG_OP = 'DELETE' THEN
    UPDATE profile_activity_infos
    SET post_voted_count = post_voted_count - 1
    WHERE user_id = OLD.user_id;
    RETURN OLD;
  END IF;
END;$function$
;

CREATE OR REPLACE FUNCTION private.modify_profile_vote_count()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE profile_activity_infos
    SET vote_count = vote_count + 1
    WHERE user_id = (SELECT user_id FROM posts WHERE posts.id = NEW.post_id);
    RETURN NEW;
  ELSEIF TG_OP = 'DELETE' THEN
    UPDATE profile_activity_infos
    SET vote_count = vote_count - 1
    WHERE user_id = (SELECT user_id FROM posts WHERE posts.id = OLD.post_id);
    RETURN OLD;
  END IF;
END;$function$
;

CREATE TRIGGER on_modify_profile_post_count AFTER INSERT OR DELETE ON public.posts FOR EACH ROW EXECUTE FUNCTION private.modify_profile_post_count();

CREATE TRIGGER on_modify_profile_post_voted_count AFTER INSERT OR DELETE ON public.post_votes FOR EACH ROW EXECUTE FUNCTION private.modify_profile_post_voted_count();

CREATE TRIGGER on_modify_profile_vote_count AFTER INSERT OR DELETE ON public.post_votes FOR EACH ROW EXECUTE FUNCTION private.modify_profile_vote_count();
