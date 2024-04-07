import { FollowButton } from "@/components/Profile/FollowButton";
import { Profile } from "@/lib/supabase/schema/types";
import {
  Anchor,
  Avatar,
  Button,
  Card,
  Center,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconArrowBigUp,
  IconNote,
  IconNotes,
  IconUserPlus,
} from "@tabler/icons-react";
import NextLink from "next/link";

type Props = {
  profile: Profile;
};

export const ProfileItem = ({ profile }: Props) => {
  return (
    <Card withBorder pb="xs">
      <Stack justify="space-between" gap="xs" flex={1}>
        <Group wrap="nowrap" justify="space-between" align="start">
          <Group gap="xs">
            <Avatar
              src={profile.user.avatarUrl}
              alt={profile.user.username || "User"}
            />
            <Title order={3}>{profile.user.username || "User"}</Title>
          </Group>
          <Anchor component={NextLink} href={`/profiles/${profile.user.id}`}>
            Open
          </Anchor>
        </Group>
        <Group justify="space-evenly">
          <Stack gap={4} align="center">
            <IconNotes />
            <Text>
              <Text span fw="bold">
                {profile.activityInfo?.postCount ?? 0}
              </Text>{" "}
              posts
            </Text>
          </Stack>
          <Stack gap={4} align="center">
            <IconArrowBigUp />
            <Text>
              <Text span fw="bold">
                {profile.activityInfo?.voteCount ?? 0}
              </Text>{" "}
              votes total
            </Text>
          </Stack>
        </Group>
        <Stack gap="xs">
          <Text size="sm" c="dimmed">
            {profile.activityInfo?.followerCount ?? 0} followers
          </Text>
          <FollowButton userId={profile.user.id} size="sm" />
        </Stack>
      </Stack>
    </Card>
  );
};
