"use client";

import { Avatar, Button } from "@mantine/core";
import { useFormState, useFormStatus } from "react-dom";

type Props = {
  avatarUrl: string;
  username: string;
};

const UpdateButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" color="primary" loading={pending}>
      Save
    </Button>
  );
};

export const UpdateProfileForm = ({ avatarUrl, username }: Props) => {
  const [state, formAction] = useFormState(updateProfile, { errorMessage: "" });
  return (
    <form action={formAction}>
      <Avatar src={avatarUrl} alt={username || "User"} radius="xl" size="xl" />
      <Button>Edit avatar</Button>
      {state.errorMessage && (
        <p className="text-danger text-sm">{state.errorMessage}</p>
      )}
    </form>
  );
};
