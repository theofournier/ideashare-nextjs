import { Button, Center, Container, Stack, Title } from "@mantine/core";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <Center>
        <Stack>
          <Title>Profile Not Found</Title>
          <Button component={Link} href="/profiles">
            Return to Profiles
          </Button>
        </Stack>
      </Center>
    </Container>
  );
}
