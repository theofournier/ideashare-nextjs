"use server";

import { createServerClient } from "@/lib/supabase/clients/server";
import { getSession } from "@/lib/supabase/queries/auth/getSession";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const followProfile = async (
  prevState: { errorMessage: string },
  userId: string
) => {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const session = await getSession();

  if (!session) {
    return { errorMessage: "Not connected" };
  }

  const { data: currentUser } = await supabase
    .from("profiles")
    .select("id")
    .eq("id", userId)
    .single();

  if (!currentUser) {
    return {
      errorMessage: "Post not found",
    };
  }

  const { data: currentFollow } = await supabase
    .from("profile_follows")
    .select("*")
    .eq("following_user_id", userId)
    .eq("follower_user_id", session.user.id)
    .single();

  if (currentFollow) {
    await supabase
      .from("profile_follows")
      .delete()
      .eq("following_user_id", userId)
      .eq("follower_user_id", session.user.id);
  } else {
    await supabase
      .from("profile_follows")
      .insert({ following_user_id: userId, follower_user_id: session.user.id });
  }

  revalidatePath("/");
  return {
    errorMessage: "",
  };
};
