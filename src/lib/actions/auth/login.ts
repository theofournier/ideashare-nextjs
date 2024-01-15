"use server";

import { cookies } from "next/headers";
import { createServerClient } from "../../supabase/clients/server";
import { redirect } from "next/navigation";
import { z } from "zod";

const CredentialsSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const login = async (
  prevState: { errorMessage: string },
  formData: FormData
) => {
  const { email, password } = CredentialsSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!email || !password) {
    console.log("LOGIN_ERROR_EMPTY");
    return { errorMessage: "Email and password required" };
  }

  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log("LOGIN_ERROR", error);
    return { errorMessage: "Invalid login credentials" };
  }

  return redirect("/");
};
