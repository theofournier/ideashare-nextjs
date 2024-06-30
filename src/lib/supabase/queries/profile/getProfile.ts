import { cookies } from "next/headers";
import { Profile } from "../../schema/types";
import { createServerClient } from "../../clients/server";
import { profileMapping } from "../../schema/supabaseMapping";

export async function getProfile(id: string): Promise<Profile | null> {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("*, profile_activity_infos(*)")
      .eq("id", id)
      .single();

    if (!data) {
      console.log(`Error fetching profile ${id}:`, error);
      return null;
    }
    return profileMapping(data, data.profile_activity_infos);
  } catch (error) {
    console.log(`Error fetching profile ${id}:`, error);
    return null;
  }
}
