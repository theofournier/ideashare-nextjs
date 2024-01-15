import { cookies } from "next/headers";
import { createServerClient } from "../../clients/server";

export async function getCurrentUser() {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      return null;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", session.user.id)
      .single();

    if (!data) {
      console.log("Error fetching profile:", error);
      return null;
    }
    return {
      id: data.id,
      username: data.username || undefined,
      avatarUrl: data.avatar_url || undefined,
      email: session.user.email,
    };
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
