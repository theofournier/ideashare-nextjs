import { cookies } from "next/headers";
import { createServerClient } from "../../clients/server";
import { CurrentUser } from "../../schema/types";
import { userMapping } from "../../schema/supabaseMapping";

export async function getCurrentUser(): Promise<CurrentUser | null> {
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
    return { ...userMapping(data), email: session.user.email };
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
