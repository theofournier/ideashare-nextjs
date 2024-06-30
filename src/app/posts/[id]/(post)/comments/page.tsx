import { getPostComments } from "@/lib/supabase/queries/post/getPostComments";
import { NextPageProps } from "@/lib/types";
import { Center, Container, SimpleGrid, Stack, Title } from "@mantine/core";
import { CommentItem } from "./_components/CommentItem";
import { CreateCommentForm } from "./_components/CreateCommentForm";

export default async function Post({ params }: NextPageProps) {
  const comments = await getPostComments(params.id);

  return (
    <Stack mt={16}>
      <div>
        <CreateCommentForm postId={params.id} />
      </div>
      {!comments || comments.length === 0 ? (
        <Center>
          <Stack>
            <Title order={4}>No comments</Title>
          </Stack>
        </Center>
      ) : (
        <SimpleGrid cols={{ base: 1, sm: 2 }} verticalSpacing={10} spacing={10}>
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </SimpleGrid>
      )}
    </Stack>
  );
}
