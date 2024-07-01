import { cookies } from "next/headers";
import { Profile } from "../../schema/types";
import { createServerClient } from "../../clients/server";
import { profileMapping } from "../../schema/supabaseMapping";

type Params = {
  userId: string;
};

export async function getFollowingProfiles({
  userId,
}: Params): Promise<Profile[] | null> {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);
  try {
    const { data, error } = await supabase
      .from("profile_follows")
      .select(
        "profiles!public_profile_follows_following_user_id_fkey(*, profile_activity_infos(*))"
      )
      .eq("follower_user_id", userId);

    if (!data) {
      console.log("Error fetching following profiles:", error);
      return null;
    }
    return data.map((profile) =>
      profileMapping(
        profile.profiles!,
        profile.profiles!.profile_activity_infos
      )
    );
  } catch (error) {
    console.log("Error fetching following profiles:", error);
    return null;
  }
}
