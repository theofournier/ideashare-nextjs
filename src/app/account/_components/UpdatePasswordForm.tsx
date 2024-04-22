"use client";

import { updatePassword } from "@/lib/actions/account/updatePassword";
import { Button, Group, PasswordInput, Text } from "@mantine/core";
import { useFormStatus, useFormState } from "react-dom";

const UpdateButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" loading={pending}>
      Save
    </Button>
  );
};

export const UpdatePasswordForm = () => {
  const [state, formAction] = useFormState(updatePassword, {
    errorMessage: "",
  });
  return (
    <form action={formAction}>
      <Group align="end">
        <PasswordInput
          label="Password"
          name="password"
          placeholder="My password"
          required
        />
        <UpdateButton />
      </Group>
      {state.errorMessage && (
        <Text c="var(--mantine-color-error)">{state.errorMessage}</Text>
      )}
    </form>
  );
};
