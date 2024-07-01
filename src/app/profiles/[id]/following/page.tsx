import { ProfilesList } from "@/components/Profile/ProfilesList";
import { getFollowingProfiles } from "@/lib/supabase/queries/profile/getFollowingProfiles";
import { NextPageProps } from "@/lib/types";
import { Container } from "@mantine/core";

export default async function Following({ params }: NextPageProps) {
  const profiles = await getFollowingProfiles({ userId: params.id });

  if (!profiles || profiles.length === 0) {
    return <Container size="lg">No profiles</Container>;
  }

  return <ProfilesList profiles={profiles} />;
}
