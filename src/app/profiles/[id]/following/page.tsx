import { ProfilesList } from "@/components/Profile/ProfilesList";
import { getProfiles } from "@/lib/supabase/queries/profile/getProfiles";
import { NextPageProps } from "@/lib/types";
import { Container } from "@mantine/core";

export default async function Following({ params }: NextPageProps) {
  const profiles = await getProfiles();

  if (!profiles || profiles.length === 0) {
    return <Container size="lg">No profiles</Container>;
  }

  return <ProfilesList profiles={profiles} />;
}
