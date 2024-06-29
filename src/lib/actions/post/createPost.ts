"use server";

import { createServerClient } from "@/lib/supabase/clients/server";
import { getSession } from "@/lib/supabase/queries/auth/getSession";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
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

  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const session = await getSession();

  if (!session) {
    return { errorMessage: "Not connected" };
  }

  const { data, error } = await supabase
    .from("posts")
    .insert({
      title,
      short_description: shortDescription,
      description,
      user_id: session.user.id,
    })
    .select()
    .single();

  if (error || !data) {
    console.log(error);
    return { errorMessage: "Error occured when creating post" };
  }

  return redirect(`/posts/${data.id}`);
};
