"use client";

import { updateUsername } from "@/lib/actions/account/updateUsername";
import { Button, Group, Text, TextInput } from "@mantine/core";
import { useFormState, useFormStatus } from "react-dom";

type Props = {
  username?: string;
};

const UpdateButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" loading={pending}>
      Save
    </Button>
  );
};

export const UpdateUsernameForm = ({ username }: Props) => {
  const [state, formAction] = useFormState(updateUsername, {
    errorMessage: "",
  });
  return (
    <form action={formAction}>
      <Group align="end">
        <TextInput
          type="text"
          label="Username"
          name="username"
          placeholder="My username"
          required
          defaultValue={username}
        />
        <UpdateButton />
      </Group>
      {state.errorMessage && (
        <Text c="var(--mantine-color-error)">{state.errorMessage}</Text>
      )}
    </form>
  );
};
