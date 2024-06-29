import { PostsList } from "@/components/Post/PostsList";
import { getPosts } from "@/lib/supabase/queries/post/getPosts";
import { NextPageProps } from "@/lib/types";
import { Container } from "@mantine/core";

export default async function Voted({ params }: NextPageProps) {
  const posts = await getPosts();

  if (!posts || posts.length === 0) {
    return <Container size="lg">No posts</Container>;
  }

  return <PostsList posts={posts} />;
}
