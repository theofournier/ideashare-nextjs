"use server";

import { cookies } from "next/headers";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { createServerClient } from "@/lib/supabase/clients/server";

const UpdatePasswordSchema = z.object({
  password: z.string(),
});

export const updatePassword = async (
  prevState: { errorMessage: string },
  formData: FormData
) => {
  const { password } = UpdatePasswordSchema.parse({
    password: formData.get("password"),
  });

  if (!password) {
    return { errorMessage: "Password required" };
  }

  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    console.log(error);
    return { errorMessage: "Invalid update password" };
  }

  revalidatePath("/");
  return { errorMessage: "" };
};
