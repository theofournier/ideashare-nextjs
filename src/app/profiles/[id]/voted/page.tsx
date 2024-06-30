import { PostsList } from "@/components/Post/PostsList";
import { getVotedPosts } from "@/lib/supabase/queries/post/getVotedPosts";
import { NextPageProps } from "@/lib/types";
import { Container } from "@mantine/core";

export default async function Voted({ params }: NextPageProps) {
  const posts = await getVotedPosts({ userId: params.id });

  if (!posts || posts.length === 0) {
    return <Container size="lg">No posts</Container>;
  }

  return <PostsList posts={posts} />;
}
