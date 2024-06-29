import { SimpleGrid } from "@mantine/core";
import { Profile } from "@/lib/supabase/schema/types";
import { ProfileItem } from "./ProfileItem";

type Props = {
  profiles: Profile[];
};

export const ProfilesList = ({ profiles }: Props) => {
  return (
    <SimpleGrid
      cols={{ base: 1, xs: 2, md: 3 }}
      spacing={{ base: 10, md: "md" }}
      verticalSpacing={{ base: 10, md: "md" }}
      mt="md"
    >
      {profiles.map((profile) => (
        <ProfileItem key={profile.user.id} profile={profile} />
      ))}
    </SimpleGrid>
  );
};
