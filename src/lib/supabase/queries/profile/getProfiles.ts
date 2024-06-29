import { cookies } from "next/headers";
import { Profile } from "../../schema/types";
import { createServerClient } from "../../clients/server";
import { profileMapping } from "../../schema/supabaseMapping";

export async function getProfiles(): Promise<Profile[] | null> {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);
  try {
    const { data, error } = await supabase.from("profiles").select("*");

    if (!data) {
      console.log("Error fetching profiles:", error);
      return null;
    }
    return data.map((profile) => profileMapping(profile));
  } catch (error) {
    console.log("Error fetching profiles:", error);
    return null;
  }
}
