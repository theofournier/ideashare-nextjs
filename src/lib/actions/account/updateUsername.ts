"use server";

import { cookies } from "next/headers";
import { z } from "zod";
import { createServerClient } from "@/lib/supabase/clients/server";
import { getSession } from "@/lib/supabase/queries/auth/getSession";

const UpdateUsernameSchema = z.object({
  username: z.string(),
});

export const updateUsername = async (
  prevState: { errorMessage: string },
  formData: FormData
) => {
  const { username } = UpdateUsernameSchema.parse({
    username: formData.get("username"),
  });

  if (!username) {
    return { errorMessage: "Username required" };
  }

  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const session = await getSession();

  if (!session) {
    return { errorMessage: "Not connected" };
  }

  const { error } = await supabase
    .from("profiles")
    .update({ username })
    .eq("id", session.user.id);

  if (error) {
    console.log(error);
    return { errorMessage: "Invalid update username" };
  }

  //revalidatePath("/");
  return { errorMessage: "" };
};
