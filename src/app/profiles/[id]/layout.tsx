import { NextLayoutProps } from "@/lib/types";
import { Card, Container } from "@mantine/core";
import { notFound } from "next/navigation";
import { ProfileHeader } from "./_components/ProfileHeader";
import { getProfile } from "@/lib/supabase/queries/profile/getProfile";

export default async function ProfileLayout({
  params,
  children,
}: NextLayoutProps) {
  const profile = await getProfile(params.id);

  if (!profile) {
    return notFound();
  }

  return (
    <Container size="lg">
      <Card>
        <ProfileHeader profile={profile} />
        {children}
      </Card>
    </Container>
  );
}
