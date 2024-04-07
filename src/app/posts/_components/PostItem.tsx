import { VoteButton } from "@/components/Post/VoteButton";
import { UserTimestamp } from "@/components/User/UserTimestamp";
import { Post } from "@/lib/supabase/schema/types";
import {
  Anchor,
  Button,
  Card,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconMessageCircle } from "@tabler/icons-react";
import NextLink from "next/link";

type Props = {
  post: Post;
};

export const PostItem = ({ post }: Props) => {
  return (
    <Card withBorder pb="xs">
      <Stack justify="space-between" gap="xs" flex={1}>
        <Stack gap="xs">
          <Group wrap="nowrap" justify="space-between" align="start">
            <Title order={3} lineClamp={2}>
              {post.title}
            </Title>
            <Anchor component={NextLink} href={`/posts/${post.id}`}>
              Open
            </Anchor>
          </Group>
          <Text lineClamp={5}>{post.shortDescription}</Text>
        </Stack>
        <Stack gap="xs">
          <Stack gap="xs">
            <Divider />
            <UserTimestamp user={post.user} date={post.createdAt} />
            <Divider />
          </Stack>
          <Stack gap="xs">
            <Group justify="space-between">
              <Group>
                <Text size="sm" c="dimmed">
                  {post.activityInfo?.voteCount ?? 0} votes
                </Text>
                <Text size="sm" c="dimmed">
                  {post.activityInfo?.commentCount ?? 0} comments
                </Text>
              </Group>
              <Text size="sm" c="dimmed">
                {post.activityInfo?.viewCount ?? 0} views
              </Text>
            </Group>
            <Group grow>
              <VoteButton postId={post.id} size="sm" />
              <Button variant="subtle" leftSection={<IconMessageCircle />}>
                <Text size="sm" c="dimmed">
                  Comment
                </Text>
              </Button>
            </Group>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};
