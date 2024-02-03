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
    <Card withBorder p={0}>
      <Stack h="100%" justify="space-between">
        <Stack px="md" pt="md" gap="xs">
          <Title order={3} lineClamp={2}>
            {post.title}
          </Title>
          <Text lineClamp={5}>{post.shortDescription}</Text>
        </Stack>
        <div>
          <Flex px="md" justify="center">
            <Button
              component={NextLink}
              href={`/posts/${post.id}`}
              variant="subtle"
            >
              See post
            </Button>
          </Flex>
          <Divider />
          <Flex py="xs" px="md">
            <UserTimestamp user={post.user} date={post.createdAt} />
          </Flex>
          <Divider />
          <Group justify="space-between" py="xs" px="md">
            <Group gap={0}>
              <Button variant="subtle" leftSection={<IconThumbUp />}>
                <Text size="sm" c="dimmed">
                  {post.activityInfo?.likeCount ?? 0}
                </Text>
              </Button>
              <Button variant="subtle" leftSection={<IconMessageCircle />}>
                <Text size="sm" c="dimmed">
                  {post.activityInfo?.likeCount ?? 0}
                </Text>
              </Button>
            </Group>
            <Text size="xs" c="dimmed">
              {post.activityInfo?.viewCount ?? 0} views
            </Text>
          </Group>
        </div>
      </Stack>
    </Card>
  );
};
