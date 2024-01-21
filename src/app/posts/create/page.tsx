import { Container, Title } from "@mantine/core";
import { CreatePostForm } from "./_components/CreatePostForm";

export default function CreatePost() {
  return (
    <Container size="lg">
      <Title>Create Post</Title>
      <CreatePostForm />
    </Container>
  );
}
