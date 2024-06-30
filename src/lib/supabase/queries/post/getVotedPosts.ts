import { cookies } from "next/headers";
import { createServerClient } from "../../clients/server";
import { Post } from "../../schema/types";
import { postMapping } from "../../schema/supabaseMapping";

type PostSearchParams = {
  userId: string;
};

export async function getVotedPosts({
  userId,
}: PostSearchParams): Promise<Post[] | null> {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*, profiles(*), post_activity_infos(*), post_votes!inner(user_id)")
      .eq("post_votes.user_id", userId);

    if (!data) {
      console.log("Error fetching voted posts:", error);
      return null;
    }

    return data.map((post) =>
      postMapping(post, post.post_activity_infos, post.profiles)
    );
  } catch (error) {
    console.error("Error fetching voted posts:", error);
    return null;
  }
}
