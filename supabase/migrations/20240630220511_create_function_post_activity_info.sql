set check_function_bodies = off;

CREATE OR REPLACE FUNCTION private.handle_new_post()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$BEGIN
  INSERT INTO post_activity_infos (post_id) VALUES (NEW.id);
  RETURN NEW;
END$function$
;

CREATE OR REPLACE FUNCTION private.modify_post_comment_count()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE post_activity_infos
    SET comment_count = comment_count + 1
    WHERE post_id = NEW.post_id;
    RETURN NEW;
  ELSEIF TG_OP = 'DELETE' THEN
    UPDATE post_activity_infos
    SET comment_count = comment_count - 1
    WHERE post_id = OLD.post_id;
    RETURN OLD;
  END IF;
END;$function$
;

CREATE OR REPLACE FUNCTION private.modify_post_vote_count()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE post_activity_infos
    SET vote_count = vote_count + 1
    WHERE post_id = NEW.post_id;
    RETURN NEW;
  ELSEIF TG_OP = 'DELETE' THEN
    UPDATE post_activity_infos
    SET vote_count = vote_count - 1
    WHERE post_id = OLD.post_id;
    RETURN OLD;
  END IF;
END;$function$
;

CREATE OR REPLACE FUNCTION private.modify_post_view_count()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE post_activity_infos
    SET view_count = view_count + 1
    WHERE post_id = NEW.post_id;
    RETURN NEW;
  ELSEIF TG_OP = 'DELETE' THEN
    UPDATE post_activity_infos
    SET view_count = view_count - 1
    WHERE post_id = OLD.post_id;
    RETURN OLD;
  END IF;
END;$function$
;


CREATE TRIGGER on_modify_post_comment_count AFTER INSERT OR DELETE ON public.post_comments FOR EACH ROW EXECUTE FUNCTION private.modify_post_comment_count();

CREATE TRIGGER on_modify_post_vote_count AFTER INSERT OR DELETE ON public.post_votes FOR EACH ROW EXECUTE FUNCTION private.modify_post_vote_count();

CREATE TRIGGER on_modify_post_view_count AFTER INSERT OR DELETE ON public.post_views FOR EACH ROW EXECUTE FUNCTION private.modify_post_view_count();

CREATE TRIGGER on_post_created AFTER INSERT ON public.posts FOR EACH ROW EXECUTE FUNCTION private.handle_new_post();