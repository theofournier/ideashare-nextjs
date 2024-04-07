import { ProfilesList } from "@/components/Profile/ProfilesList";
import { getProfiles } from "@/lib/supabase/queries/profile/getProfiles";
import { NextPageProps } from "@/lib/types";

export default async function Following({ params }: NextPageProps) {
  const profiles = await getProfiles();

  return <ProfilesList profiles={profiles} />;
}
