import { UserTimestamp } from "@/components/Profile/UserTimestamp";
import { PostComment } from "@/lib/supabase/schema/types";
import { Card, Stack, Text } from "@mantine/core";

type Props = {
  comment: PostComment;
};

export const CommentItem = ({ comment }: Props) => {
  return (
    <Card withBorder>
      <Stack>
        <UserTimestamp user={comment.user} date={comment.createdAt} />
        <Text>{comment.comment}</Text>
      </Stack>
    </Card>
  );
};
