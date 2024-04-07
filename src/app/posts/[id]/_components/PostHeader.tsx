import { UserTimestamp } from "@/components/User/UserTimestamp";
import { Post } from "@/lib/supabase/schema/types";
import { Button, Group, Stack, Text, Title } from "@mantine/core";
import { IconThumbUp } from "@tabler/icons-react";
import { PostTabs } from "./PostTabs";
import { VoteButton } from "@/components/Post/VoteButton";

type Props = {
  post: Post;
  commentsCount?: number;
};

export const PostHeader = ({ post, commentsCount }: Props) => {
  return (
    <Stack>
      <Group justify="space-between" wrap="nowrap">
        <Stack>
          <Title>{post.title}</Title>
          <Text>{post.shortDescription}</Text>
        </Stack>
        <Stack align="center" gap={4}>
          <VoteButton postId={post.id} size="lg" />
          <Text size="sm">
            <Text span fw="bold">
              {post.activityInfo?.voteCount ?? 0}
            </Text>{" "}
            votes
          </Text>
          <Text size="sm">
            <Text span fw="bold">
              {post.activityInfo?.viewCount ?? 0}
            </Text>{" "}
            views
          </Text>
        </Stack>
      </Group>
      <UserTimestamp user={post.user} date={post.createdAt} />
      <PostTabs id={post.id} commentsCount={commentsCount} />
    </Stack>
  );
};
