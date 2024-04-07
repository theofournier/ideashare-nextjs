import { VoteButton } from "@/components/Post/VoteButton";
import { UserTimestamp } from "@/components/User/UserTimestamp";
import { Post } from "@/lib/supabase/schema/types";
import {
  ActionIcon,
  Button,
  Card,
  CardSection,
  Divider,
  Flex,
  Group,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconMessageCircle, IconThumbUp } from "@tabler/icons-react";
import NextLink from "next/link";

type Props = {
  post: Post;
};

export const PostItem = ({ post }: Props) => {
  return (
    <Card withBorder style={{ justifyContent: "space-between" }} pb="xs">
      <Stack gap="xs">
        <Title order={3} lineClamp={2}>
          {post.title}
        </Title>
        <Text lineClamp={5}>{post.shortDescription}</Text>
      </Stack>
      <div>
        <Flex justify="center">
          <Button
            component={NextLink}
            href={`/posts/${post.id}`}
            variant="subtle"
          >
            See post
          </Button>
        </Flex>
        <Divider />
        <Flex py="xs">
          <UserTimestamp user={post.user} date={post.createdAt} />
        </Flex>
        <Divider />
        <Stack mt="xs" gap="xs">
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
            <VoteButton postId={post.id} size="sm"/>
            <Button variant="subtle" leftSection={<IconMessageCircle />}>
              <Text size="sm" c="dimmed">
                Comment
              </Text>
            </Button>
          </Group>
        </Stack>
      </div>
    </Card>
  );
};
