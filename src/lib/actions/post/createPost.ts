"use server";

import { z } from "zod";

const CreatePostSchema = z.object({
  title: z.string(),
  shortDescription: z.string(),
  description: z.string(),
});

export const createPost = async (
  prevState: { errorMessage: string },
  formData: FormData
) => {
  const { title, shortDescription, description } = CreatePostSchema.parse({
    title: formData.get("title"),
    shortDescription: formData.get("shortDescription"),
    description: formData.get("description"),
  });

  console.log({ title, shortDescription, description });

  return { errorMessage: "" };
};
