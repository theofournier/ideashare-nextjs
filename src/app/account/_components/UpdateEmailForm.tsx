"use client";

import { updateEmail } from "@/lib/actions/account/updateEmail";
import { Button, Group, Input, Text, TextInput } from "@mantine/core";
import { useFormStatus, useFormState } from "react-dom";

type Props = {
  email?: string;
};

const UpdateButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" loading={pending}>
      Save
    </Button>
  );
};

export const UpdateEmailForm = ({ email }: Props) => {
  const [state, formAction] = useFormState(updateEmail, { errorMessage: "" });
  return (
    <form action={formAction}>
      <Group align="end">
        <TextInput
          type="email"
          label="Email"
          name="email"
          placeholder="you@ideashare.com"
          required
          defaultValue={email}
        />
        <UpdateButton />
      </Group>
      {state.errorMessage && (
        <Text c="var(--mantine-color-error)">{state.errorMessage}</Text>
      )}
    </form>
  );
};
