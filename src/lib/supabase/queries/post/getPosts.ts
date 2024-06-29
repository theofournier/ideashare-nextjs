import { cookies } from "next/headers";
import { createServerClient } from "../../clients/server";
import { Post } from "../../schema/types";
import { postMapping } from "../../schema/supabaseMapping";

type PostSearchParams = {
  userId?: string;
};

export async function getPosts(
  params?: PostSearchParams
): Promise<Post[] | null> {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);
  try {
    let query = supabase.from("posts").select("*, profiles(*)");

    if (params) {
      const { userId } = params;
      if (userId) {
        query = query.eq("user_id", userId);
      }
    }

    const { data, error } = await query;

    if (!data) {
      console.log("Error fetching posts:", error);
      return null;
    }
    return data.map((post) => postMapping(post, post.profiles));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
}
