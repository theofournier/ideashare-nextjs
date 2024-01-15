"use server";

import { cookies } from "next/headers";
import { createServerClient } from "../../supabase/clients/server";
import { redirect } from "next/navigation";
import { z } from "zod";

const RegisterSchema = z.object({
  email: z.string(),
  password: z.string(),
  username: z.string().optional().nullable(),
  avatarUrl: z.string().optional().nullable(),
});

export const register = async (
  prevState: { errorMessage: string },
  formData: FormData
) => {
  const { email, password, username, avatarUrl } = RegisterSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
    username: formData.get("username"),
    avatarUrl: formData.get("avatarUrl"),
  });

  if (!email || !password) {
    return { errorMessage: "Email and password required" };
  }

  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const { error: errorAuth } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        avatar_url: avatarUrl,
      },
    },
  });

  if (errorAuth) {
    console.log(errorAuth);
    return { errorMessage: "Invalid register credentials" };
  }

  return redirect("/");
};
