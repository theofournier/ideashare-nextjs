import { Editor } from "@/components/Editor";
import { Container, Title } from "@mantine/core";

export default function CreatePost() {
  return (
    <Container size="lg">
      <Title>Create Post</Title>
      <Editor />
    </Container>
  );
}
