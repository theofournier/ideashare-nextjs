import { UserTimestamp } from "@/components/User/UserTimestamp";
import { getPostComments } from "@/lib/supabase/queries/post/getPostComments";
import { NextPageProps } from "@/lib/types";
import { Button, Center, Stack, Text, Textarea, Title } from "@mantine/core";
import styles from "./_components/styles.css";

export default async function Post({ params }: NextPageProps) {
  const comments = await getPostComments(params.id);

  if (comments.length === 0) {
    return (
      <Center>
        <Stack>
          <Title order={4}>No comments</Title>
        </Stack>
      </Center>
    );
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <Textarea
          label="Comment"
          placeholder="Add your comment"
          name="comment"
          required
          autosize
          minRows={4}
          maxRows={10}
          withAsterisk={false}
        />
        <Button>Send</Button>
      </form>
      <div className={styles.comments}>
        {comments.map((comment) => (
          <Stack key={comment.id}>
            <UserTimestamp user={comment.user} date={comment.createdAt} />
            <Text>{comment.comment}</Text>
          </Stack>
        ))}
      </div>
    </div>
  );
}
