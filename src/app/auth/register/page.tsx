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
import { RegisterForm } from "./_components/RegisterForm";

export default async function Register() {
  const session = await getSession();

  if (session) {
    return redirect("/");
  }

  return (
    <Container size="xs" my={40}>
      <Title ta="center">Welcome to IdeaShare!</Title>

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
        <RegisterForm />
      </Paper>

      <Text c="dimmed" size="sm" ta="center" mt={8}>
        Already have an account?{" "}
        <Anchor size="sm" component={Link} href="/auth/login">
          Login
        </Anchor>
      </Text>
    </Container>
  );
}
