set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_posts_activity_info(userid uuid DEFAULT NULL::uuid, postid uuid DEFAULT NULL::uuid)
 RETURNS TABLE(post_id uuid, vote_count bigint, comment_count bigint, voted integer)
 LANGUAGE plpgsql
AS $function$
BEGIN
  RETURN QUERY
  SELECT
    p.id AS post_id,
    COUNT(DISTINCT pv.id) AS vote_count,
    COUNT(DISTINCT pc.id) AS comment_count,
    MAX(CASE WHEN userId IS NOT NULL AND pv.user_id = userId THEN 1 ELSE 0 END) AS voted
  FROM
    posts p
    LEFT JOIN post_votes pv ON p.id = pv.post_id
    LEFT JOIN post_comments pc ON p.id = pc.post_id
  WHERE
    (postId IS NULL OR p.id = postId)
  GROUP BY
    p.id
  ORDER BY
    p.id;
END;
$function$
;