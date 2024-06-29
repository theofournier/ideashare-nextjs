"use server";

import { createServerClient } from "@/lib/supabase/clients/server";
import { getSession } from "@/lib/supabase/queries/auth/getSession";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { z } from "zod";

const CreateCommentSchema = z.object({
  postId: z.string(),
  comment: z.string(),
});

export const createComment = async (
  prevState: { errorMessage: string },
  formData: FormData
) => {
  const { postId, comment } = CreateCommentSchema.parse({
    postId: formData.get("postId"),
    comment: formData.get("comment"),
  });

  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const session = await getSession();

  if (!session) {
    return { errorMessage: "Not connected" };
  }

  const { data, error } = await supabase
    .from("post_comments")
    .insert({ post_id: postId, comment, user_id: session.user.id })
    .select()
    .single();

  if (error || !data) {
    console.log(error);
    return { errorMessage: "Error occured when creating post comment" };
  }

  revalidatePath(`/posts/${data.id}`);
  return { errorMessage: "" };
};
