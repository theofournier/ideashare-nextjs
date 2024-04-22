"use server";

import { cookies } from "next/headers";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const UpdateAvatarSchema = z.object({
  avatarUrl: z.string(),
});

export const updateAvatar = async (
  prevState: { errorMessage: string },
  formData: FormData
) => {
  const { email } = UpdateAvatarSchema.parse({
    email: formData.get("email"),
  });

  console.log(email);

  if (!email) {
    return { errorMessage: "Email required" };
  }

  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const { data, error } = await supabase.auth.updateUser({
    email,
  });

  if (error) {
    console.log(error);
    return { errorMessage: "Invalid update email" };
  }

  revalidatePath("/");
  return { errorMessage: "" };
};
