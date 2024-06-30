"use server";

import { createServerClient } from "@/lib/supabase/clients/server";
import { getSession } from "@/lib/supabase/queries/auth/getSession";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const votePost = async (
  prevState: { errorMessage: string },
  postId: string
) => {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const session = await getSession();

  if (!session) {
    return { errorMessage: "Not connected" };
  }

  const { data: currentPost } = await supabase
    .from("posts")
    .select("*")
    .eq("id", postId)
    .single();

  if (!currentPost) {
    return {
      errorMessage: "Post not found",
    };
  }

  const { data: currentVote } = await supabase
    .from("post_votes")
    .select("*")
    .eq("post_id", postId)
    .eq("user_id", session.user.id)
    .single();

  if (currentVote) {
    await supabase
      .from("post_votes")
      .delete()
      .eq("post_id", postId)
      .eq("user_id", session.user.id);
  } else {
    await supabase
      .from("post_votes")
      .insert({ post_id: postId, user_id: session.user.id });
  }

  revalidatePath("/");
  return {
    errorMessage: "",
  };
};
