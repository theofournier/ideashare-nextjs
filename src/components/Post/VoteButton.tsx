"use client";

import { votePost } from "@/lib/actions/post/votePost";
import { Button, Text, TextProps } from "@mantine/core";
import { IconArrowBigUp, IconArrowBigUpFilled } from "@tabler/icons-react";
import { useFormState, useFormStatus } from "react-dom";

type Props = {
  postId: string;
  size?: TextProps["size"];
  voted?: boolean;
};

const SaveButton = ({ voted = false, size }: Omit<Props, "postId">) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="subtle"
      loading={pending}
      leftSection={voted ? <IconArrowBigUpFilled /> : <IconArrowBigUp />}
    >
      <Text size={size} c={voted ? undefined : "dimmed"}>
        {voted ? "Voted" : "Vote"}
      </Text>
    </Button>
  );
};

export const VoteButton = ({ postId, size, voted }: Props) => {
  const [state, formAction] = useFormState(votePost, {
    errorMessage: "",
  });
  const formActionWithId = formAction.bind(null, postId);

  return (
    <form className="w-full" action={formActionWithId}>
      <SaveButton voted={voted} size={size} />
      {state.errorMessage && (
        <Text c="var(--mantine-color-error)">{state.errorMessage}</Text>
      )}
    </form>
  );
};
