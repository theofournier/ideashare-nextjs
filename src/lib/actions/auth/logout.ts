"use server";

import { cookies } from "next/headers";
import { createServerClient } from "../../supabase/clients/server";
import { redirect } from "next/navigation";

export const logout = async () => {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);
  await supabase.auth.signOut();
  return redirect("/");
};
