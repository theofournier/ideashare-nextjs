"use client";

import { forgotPassword } from "@/lib/actions/auth/forgotPassword";
import { Anchor, Box, Button, Center, Group, Text, TextInput } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

const ForgotPasswordButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" loading={pending} fullWidth mt="md">
      Reset password
    </Button>
  );
};

export const ForgotPasswordForm = () => {
  const [state, formAction] = useFormState(forgotPassword, {
    errorMessage: "",
  });
  return (
    <form action={formAction}>
      <TextInput
        type="email"
        label="Your email"
        placeholder="you@ideashare.com"
        required
        name="email"
      />
      <ForgotPasswordButton />
      {state.errorMessage && (
        <Text c="var(--mantine-color-error)">{state.errorMessage}</Text>
      )}
    </form>
  );
};
