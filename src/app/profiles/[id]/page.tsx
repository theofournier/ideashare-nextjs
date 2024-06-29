import { PostsList } from "@/components/Post/PostsList";
import { getPosts } from "@/lib/supabase/queries/post/getPosts";
import { NextPageProps } from "@/lib/types";
import { Container } from "@mantine/core";

export default async function Profile({ params }: NextPageProps) {
  const posts = await getPosts({ userId: params.id });

  if (!posts || posts.length === 0) {
    return <Container size="lg">No posts</Container>;
  }

  return <PostsList posts={posts} />;
}
