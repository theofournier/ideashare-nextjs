"use server";

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
  const { title, shortDescription, description } = EditPostSchema.parse({
    postId: formData.get("postId"),
    title: formData.get("title"),
    shortDescription: formData.get("shortDescription"),
    description: formData.get("description"),
  });

  console.log({ title, shortDescription, description });

  return { errorMessage: "" };
};
