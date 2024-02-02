"use client";

import { Editor } from "@/components/Editor";
import { createPost } from "@/lib/actions/post/createPost";
import {
  Button,
  Group,
  Input,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useDebouncedCallback } from "use-debounce";
import { InputLabelPostForm } from "./InputLabelPostForm";

const SaveButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" loading={pending} leftSection={<IconUpload />}>
      Publish post
    </Button>
  );
};

export const CreatePostForm = () => {
  const [state, formAction] = useFormState(createPost, { errorMessage: "" });

  const [content, setContent] = useState<string>("");
  const setContentDebounced = useDebouncedCallback((value) => {
    console.log(value);
    setContent(value);
  }, 1000);

  return (
    <form action={formAction}>
      <Stack>
        <Group justify="space-between">
          <Title>Create Post</Title>
          <Stack gap="xs" align="flex-end">
            <SaveButton />
            {state.errorMessage && (
              <Text c="var(--mantine-color-error)">{state.errorMessage}</Text>
            )}
          </Stack>
        </Group>

        <input name="description" value={content} hidden aria-hidden readOnly />
        <TextInput
          label={
            <InputLabelPostForm
              text="Title"
              description="The title is used to display in the list and for SEO."
              textSize="lg"
              iconSize="1.2rem"
            />
          }
          placeholder="Post title"
          name="title"
          required
          size="lg"
          withAsterisk={false}
        />
        <Textarea
          label={
            <InputLabelPostForm
              text="Short description"
              description="The short description is used to display in the list and for SEO."
            />
          }
          placeholder="Post short description"
          name="shortDescription"
          required
          autosize
          minRows={4}
          maxRows={10}
          withAsterisk={false}
        />
        <Input.Wrapper
          label={
            <InputLabelPostForm
              text="Description"
              description="The description should explain your idea in details."
            />
          }
          required
          withAsterisk={false}
        >
          <Editor onUpdate={(content) => setContentDebounced(content)} />
        </Input.Wrapper>
      </Stack>
    </form>
  );
};
