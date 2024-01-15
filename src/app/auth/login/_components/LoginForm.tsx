"use client";

import { login } from "@/lib/actions/auth/login";
import {
  Anchor,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" loading={pending} fullWidth mt="lg">
      Sign in
    </Button>
  );
};

export const LoginForm = () => {
  const [state, formAction] = useFormState(login, { errorMessage: "" });

  return (
    <form action={formAction}>
      <TextInput
        type="email"
        label="Email"
        placeholder="you@ideashare.com"
        required
        name="email"
      />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        required
        mt="md"
        name="password"
      />
      <Group justify="space-between" mt="lg">
        <Checkbox label="Remember me" checked />
        <Anchor size="sm" component={Link} href="/auth/forgot-password">
          Forgot password?
        </Anchor>
      </Group>
      <LoginButton />
      {state.errorMessage && (
        <Text c="var(--mantine-color-error)">{state.errorMessage}</Text>
      )}
    </form>
  );
};
