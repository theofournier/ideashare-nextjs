"use client";

import { createComment } from "@/lib/actions/post/createComment";
import { Button, Stack, Text, Textarea } from "@mantine/core";
import { IconSend } from "@tabler/icons-react";
import { useFormState, useFormStatus } from "react-dom";

type Props = {
  postId: string;
};

const SaveButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" loading={pending} leftSection={<IconSend />}>
      Send comment
    </Button>
  );
};

export const CreateCommentForm = ({ postId }: Props) => {
  const [state, formAction] = useFormState(createComment, { errorMessage: "" });

  return (
    <form action={formAction}>
      <Stack gap="sm">
        <input type="hidden" hidden aria-hidden value={postId} name="postId" />
        <Textarea
          placeholder="Add your comment"
          name="comment"
          required
          autosize
          minRows={4}
          maxRows={10}
          withAsterisk={false}
        />
        <SaveButton />
        {state.errorMessage && (
          <Text c="var(--mantine-color-error)">{state.errorMessage}</Text>
        )}
      </Stack>
    </form>
  );
};
