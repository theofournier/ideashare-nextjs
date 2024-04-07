import { Profile } from "@/lib/supabase/schema/types";
import { Avatar, Group, Stack, Text, Title } from "@mantine/core";
import { ProfileTabs } from "./ProfileTabs";
import { FollowButton } from "@/components/Profile/FollowButton";

type Props = {
  profile: Profile;
};

export const ProfileHeader = ({ profile }: Props) => {
  return (
    <Stack>
      <Group justify="space-between" wrap="nowrap" align="start">
        <Group gap="xs">
          <Avatar
            src={profile.user.avatarUrl}
            alt={profile.user.username || "User"}
            radius="xl"
          />
          <Title order={3}>{profile.user.username || "User"}</Title>
        </Group>
        <Stack align="center" gap={4}>
          <FollowButton userId={profile.user.id} />
          <Text size="sm">
            <Text span fw="bold">
              {profile.activityInfo?.followerCount ?? 0}
            </Text>{" "}
            followers
          </Text>
        </Stack>
      </Group>
      <ProfileTabs
        id={profile.user.id}
        postCount={profile.activityInfo.postCount}
        postVotedCount={profile.activityInfo.postVotedCount}
        followingCount={profile.activityInfo.followingCount}
      />
    </Stack>
  );
};
