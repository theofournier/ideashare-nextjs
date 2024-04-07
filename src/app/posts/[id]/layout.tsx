import { getPost } from "@/lib/supabase/queries/post/getPost";
import { NextLayoutProps } from "@/lib/types";
import { Card, Container } from "@mantine/core";
import { notFound } from "next/navigation";
import { PostHeader } from "./_components/PostHeader";

export default async function Post({ params, children }: NextLayoutProps) {
  const post = await getPost(params.id);

  if (!post) {
    return notFound();
  }

  return (
    <Container size="lg">
      <Card>
        <PostHeader
          post={post}
          commentsCount={post.activityInfo?.commentCount}
        />
        {children}
      </Card>
    </Container>
  );
}
