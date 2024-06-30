import { cookies } from "next/headers";
import { Post } from "../../schema/types";
import { createServerClient } from "../../clients/server";
import { postMapping } from "../../schema/supabaseMapping";
import { getPostActivityInfo } from "./getPostActivityInfo";

export async function getPost(id: string): Promise<Post | null> {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*, profiles(*)")
      .eq("id", id)
      .single();

    if (!data) {
      console.log(`Error fetching post ${id}:`, error);
      return null;
    }

    const postActivityInfos = await getPostActivityInfo({ postId: id });

    return postMapping(
      data,
      data.profiles,
      postActivityInfos?.find((activity) => activity.postId === id)
    );
  } catch (error) {
    console.log(`Error fetching post ${id}:`, error);
    return null;
  }
}
