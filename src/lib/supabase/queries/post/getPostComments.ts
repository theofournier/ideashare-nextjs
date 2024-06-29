import { cookies } from "next/headers";
import { PostComment } from "../../schema/types";
import { createServerClient } from "../../clients/server";
import { postCommentMapping } from "../../schema/supabaseMapping";

export async function getPostComments(
  postId: string
): Promise<PostComment[] | null> {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);
  try {
    const { data, error } = await supabase
      .from("post_comments")
      .select("*, profiles(*)")
      .eq("post_id", postId);

    if (!data) {
      console.log(`Error fetching post comments ${postId}:`, error);
      return null;
    }
    return data.map((postComment) =>
      postCommentMapping(postComment, postComment.profiles)
    );
  } catch (error) {
    console.log(`Error fetching post comments ${postId}:`, error);
    return null;
  }
}
