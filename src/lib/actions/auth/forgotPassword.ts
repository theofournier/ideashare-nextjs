"use server";

import { cookies } from "next/headers";
import { createServerClient } from "../../supabase/clients/server";
import { redirect } from "next/navigation";
import { z } from "zod";

const EmailSchema = z.object({
  email: z.string(),
});

export const forgotPassword = async (
  prevState: { errorMessage: string },
  formData: FormData
) => {
  const { email } = EmailSchema.parse({
    email: formData.get("email"),
  });

  if (!email) {
    return { errorMessage: "Email required" };
  }

  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    console.log("FORGOT_PASSWORD_ERROR", error);
    return { errorMessage: "Invalid email" };
  }

  return redirect("/auth/login");
};
