import { getCurrentUser } from "@/lib/supabase/queries/auth/getCurrentUser";
import { Avatar, Button, Container, Group, Stack, Title } from "@mantine/core";
import { redirect } from "next/navigation";
import { UpdateUsernameForm } from "./_components/UpdateUsername";
import { UpdateEmailForm } from "./_components/UpdateEmailForm";
import { UpdatePasswordForm } from "./_components/UpdatePasswordForm";

export default async function Account() {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <Container size="lg">
      <Stack align="start">
        <Title order={3}>{user.username || "User"}</Title>
        <Stack align="center" gap="xs">
          <Avatar
            src={user.avatarUrl}
            alt={user.username || "User"}
            radius="xl"
            size="xl"
          />
          <Button>Edit avatar</Button>
        </Stack>
        <UpdateUsernameForm username={user.username} />
        <UpdateEmailForm email={user.email} />
        <UpdatePasswordForm />
      </Stack>
    </Container>
  );
}
