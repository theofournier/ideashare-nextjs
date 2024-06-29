import { cookies } from "next/headers";
import { Post } from "../../schema/types";
import { createServerClient } from "../../clients/server";
import { postMapping } from "../../schema/supabaseMapping";

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
    return postMapping(data, data.profiles);
  } catch (error) {
    console.log(`Error fetching post ${id}:`, error);
    return null;
  }
}
