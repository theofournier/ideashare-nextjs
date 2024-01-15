"use client";

import { logout } from "@/lib/actions/auth/logout";
import { Button } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { useFormState, useFormStatus } from "react-dom";

const LogoutButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      leftSection={
        <IconLogout size="1rem" color="var(--mantine-color-error)" />
      }
      color="var(--mantine-color-error)"
      variant="subtle"
      type="submit"
      fullWidth
      justify="flex-start"
      loading={pending}
    >
      Logout
    </Button>
  );
};

export const AppBarLogout = () => {
  const [state, formAction] = useFormState(logout, { errorMessage: "" });
  return (
    <form action={formAction}>
      <LogoutButton />
    </form>
  );
};
