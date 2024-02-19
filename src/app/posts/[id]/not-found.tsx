import { Button, Center, Container, Stack, Title } from "@mantine/core";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <Center>
        <Stack>
          <Title>Post Not Found</Title>
          <Button component={Link} href="/posts">
            Return to Posts
          </Button>
        </Stack>
      </Center>
    </Container>
  );
}
