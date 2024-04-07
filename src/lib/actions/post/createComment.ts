"use server";

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

  console.log({ postId, comment });

  return { errorMessage: "" };
};
