import { cookies } from "next/headers";
import { createServerClient } from "../../clients/server";

export async function getSession() {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
