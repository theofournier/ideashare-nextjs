"use client";

import { followProfile } from "@/lib/actions/profile/followProfile";
import { Button, Text, TextProps } from "@mantine/core";
import { IconCircleCheckFilled, IconUserPlus } from "@tabler/icons-react";
import { useFormState, useFormStatus } from "react-dom";

type Props = {
  userId: string;
  size?: TextProps["size"];
  following?: boolean;
};

const SaveButton = ({ following = false, size }: Omit<Props, "userId">) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="subtle"
      loading={pending}
      leftSection={following ? <IconCircleCheckFilled /> : <IconUserPlus />}
    >
      <Text size={size} c={following ? undefined : "dimmed"}>
        {following ? "Following" : "Follow"}
      </Text>
    </Button>
  );
};

export const FollowButton = ({ userId, size, following }: Props) => {
  const [state, formAction] = useFormState(followProfile, {
    errorMessage: "",
  });
  const formActionWithId = formAction.bind(null, userId);

  return (
    <form action={formActionWithId}>
      <SaveButton following={following} size={size} />
      {state.errorMessage && (
        <Text c="var(--mantine-color-error)">{state.errorMessage}</Text>
      )}
    </form>
  );
};
