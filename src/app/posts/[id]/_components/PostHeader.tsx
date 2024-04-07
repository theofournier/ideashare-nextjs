import { UserTimestamp } from "@/components/User/UserTimestamp";
import { Post } from "@/lib/supabase/schema/types";
import { Button, Group, Stack, Text, Title } from "@mantine/core";
import { IconThumbUp } from "@tabler/icons-react";
import { PostTabs } from "./PostTabs";

type Props = {
  post: Post;
};

export const PostHeader = ({ post }: Props) => {
  return (
    <Stack>
      <Stack>
        <Group justify="space-between">
          <Title>{post.title}</Title>
          <Button variant="subtle" leftSection={<IconThumbUp />}>
            <Text size="sm" c="dimmed">
              Like
            </Text>
          </Button>
        </Group>
        <Text>{post.shortDescription}</Text>
      </Stack>
      <UserTimestamp user={post.user} date={post.createdAt} />
      <Group>
        <Text size="sm" c="dimmed">
          {post.activityInfo?.voteCount ?? 0} votes
        </Text>
        <Text size="sm" c="dimmed">
          {post.activityInfo?.viewCount ?? 0} views
        </Text>
      </Group>
      <PostTabs id={post.id} />
    </Stack>
  );
};
