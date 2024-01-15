"use client";

import { register } from "@/lib/actions/auth/register";
import {
  Button,
  Checkbox,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useFormState, useFormStatus } from "react-dom";

const RegisterButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" loading={pending} fullWidth mt="lg">
      Sign up
    </Button>
  );
};

export const RegisterForm = () => {
  const [state, formAction] = useFormState(register, { errorMessage: "" });

  return (
    <form action={formAction}>
      <TextInput label="Username" placeholder="Your username" name="username" />
      <TextInput
        type="email"
        label="Email"
        placeholder="you@ideashare.com"
        required
        mt="md"
        name="email"
      />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        required
        mt="md"
        name="password"
      />
      <Checkbox label="I accept terms and conditions" mt="lg" required />
      <RegisterButton />
      {state.errorMessage && (
        <Text c="var(--mantine-color-error)">{state.errorMessage}</Text>
      )}
    </form>
  );
};
