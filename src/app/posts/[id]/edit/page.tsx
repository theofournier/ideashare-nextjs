import { PostForm } from "@/components/Post/PostForm/PostForm";
import { getPost } from "@/lib/supabase/queries/post/getPost";
import { NextPageProps } from "@/lib/types";
import { Container } from "@mantine/core";
import { notFound } from "next/navigation";

export default async function EditPost({ params }: NextPageProps) {
  const post = await getPost(params.id);

  if (!post) {
    return notFound();
  }

  return (
    <Container size="lg">
      <PostForm post={post} />
    </Container>
  );
}
