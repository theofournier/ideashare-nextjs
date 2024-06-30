import { cookies } from "next/headers";
import { PostVote } from "../../schema/types";
import { createServerClient } from "../../clients/server";
import { postVoteMapping } from "../../schema/supabaseMapping";

type Params = {
  userId?: string;
  postId?: string;
};

export async function getPostVotes(
  params?: Params
): Promise<PostVote[] | null> {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);
  try {
    let query = supabase.from("post_votes").select("*");

    if (params) {
      const { userId, postId } = params;
      if (userId) {
        query = query.eq("user_id", userId);
      }
      if (postId) {
        query = query.eq("post_id", postId);
      }
    }

    const { data, error } = await query;

    if (!data) {
      console.log("Error fetching post votes:", error);
      return null;
    }
    return data.map((postVote) => postVoteMapping(postVote));
  } catch (error) {
    console.log("Error fetching post votes:", error);
    return null;
  }
}
