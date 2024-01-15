import {
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Divider,
} from "@mantine/core";
import { getSession } from "@/lib/supabase/queries/auth/getSession";
import { redirect } from "next/navigation";
import Link from "next/link";
import { GoogleButton } from "../_components/GoogleButton";
import { FacebookButton } from "../_components/FacebookButton";
import { LoginForm } from "./_components/LoginForm";

export default async function Login() {
  const session = await getSession();

  if (session) {
    return redirect("/");
  }
  return (
    <Container size={460} my={40}>
      <Title ta="center">Welcome back!</Title>

      <Paper withBorder p="xl" mt="xl" radius="md">
        <Group grow>
          <GoogleButton />
          <FacebookButton />
        </Group>
        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />
        <LoginForm />
      </Paper>

      <Text c="dimmed" size="sm" ta="center" mt={8}>
        Do not have an account yet?{" "}
        <Anchor size="sm" component={Link} href="/auth/register">
          Create account
        </Anchor>
      </Text>
    </Container>
  );
}
