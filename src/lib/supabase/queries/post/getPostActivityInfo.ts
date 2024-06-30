import { cookies } from "next/headers";
import { PostActivityInfo } from "../../schema/types";
import { createServerClient } from "../../clients/server";
import { postActivityInfoMapping } from "../../schema/supabaseMapping";
import { getSession } from "../auth/getSession";

type Params = {
  postId?: string;
};

export async function getPostActivityInfo(
  params?: Params
): Promise<PostActivityInfo[] | null> {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);
  const session = await getSession();
  try {
    const { data, error } = await supabase.rpc("get_posts_activity_info", {
      postid: params?.postId,
      userid: session?.user.id,
    });

    if (!data) {
      console.log("Error fetching post activity info:", error);
      return null;
    }
    return data.map((postVote) => postActivityInfoMapping(postVote));
  } catch (error) {
    console.log("Error fetching post votes:", error);
    return null;
  }
}
