import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  Space,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { ForgotPasswordForm } from "./_components/ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <Container size={460} my={40}>
      <Title ta="center">Forgot your password?</Title>
      <Text c="dimmed" fz="sm" ta="center" mt={8}>
        Enter your email to get a reset link
      </Text>

      <Paper withBorder p="xl" radius="md" mt="xl">
        <Anchor c="dimmed" size="sm" component={Link} href="/auth/login">
          <Center inline>
            <IconArrowLeft size={16} />
            <Box ml={8}>Back to the login page</Box>
          </Center>
        </Anchor>
        <Space h="lg"/>
        <ForgotPasswordForm />
      </Paper>
    </Container>
  );
}
