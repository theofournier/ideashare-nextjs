import { UserTimestamp } from "@/components/User/UserTimestamp";
import { getPost } from "@/lib/supabase/queries/post/getPost";
import { NextLayoutProps } from "@/lib/types";
import { Button, Container, Group, Stack, Text, Title } from "@mantine/core";
import { notFound } from "next/navigation";
import { PostTabs } from "./_components/PostTabs";
import { IconThumbUp } from "@tabler/icons-react";

export default async function Post({ params, children }: NextLayoutProps) {
  const post = await getPost(params.id);

  if (!post) {
    return notFound();
  }

  return (
    <Container size="lg">
      <Stack>
        <Title>{post.title}</Title>
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
      <Button variant="subtle" leftSection={<IconThumbUp />}>
        <Text size="sm" c="dimmed">
          Like
        </Text>
      </Button>
      <PostTabs id={params.id} />
      {children}
    </Container>
  );
}
