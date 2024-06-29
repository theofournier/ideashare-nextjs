"use server";

import { createServerClient } from "@/lib/supabase/clients/server";
import { getSession } from "@/lib/supabase/queries/auth/getSession";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const EditPostSchema = z.object({
  postId: z.string(),
  title: z.string(),
  shortDescription: z.string(),
  description: z.string(),
});

export const editPost = async (
  prevState: { errorMessage: string },
  formData: FormData
) => {
  const { postId, title, shortDescription, description } = EditPostSchema.parse(
    {
      postId: formData.get("postId"),
      title: formData.get("title"),
      shortDescription: formData.get("shortDescription"),
      description: formData.get("description"),
    }
  );

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
  if (currentPost.user_id !== session.user.id) {
    return {
      errorMessage: "Current user does not own the post",
    };
  }

  const { data, error } = await supabase
    .from("posts")
    .update({ title, short_description: shortDescription, description })
    .eq("id", postId)
    .select()
    .single();

  if (error || !data) {
    console.log(error);
    return { errorMessage: "Error occured when editing post" };
  }

  return redirect(`/posts/${data.id}`);
};
