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
import { Post } from "@/lib/supabase/schema/types";
import { editPost } from "@/lib/actions/post/editPost";

const SaveButton = ({ isEditing = false }: { isEditing?: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" loading={pending} leftSection={<IconUpload />}>
      {isEditing ? "Save post" : "Publish post"}
    </Button>
  );
};

type Props = {
  post?: Post;
};

export const PostForm = ({ post }: Props) => {
  const [state, formAction] = useFormState(post ? editPost : createPost, {
    errorMessage: "",
  });

  const [content, setContent] = useState<string>(post?.description ?? "");
  const setContentDebounced = useDebouncedCallback((value) => {
    setContent(value);
  }, 1000);

  return (
    <form action={formAction}>
      <Stack>
        <Group justify="space-between">
          <Title>{post ? "Edit post" : "Create post"}</Title>
          <Stack gap="xs" align="flex-end">
            <SaveButton isEditing={!!post} />
            {state.errorMessage && (
              <Text c="var(--mantine-color-error)">{state.errorMessage}</Text>
            )}
          </Stack>
        </Group>

        <input name="postId" value={post?.id} hidden aria-hidden readOnly />
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
          defaultValue={post?.title}
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
          defaultValue={post?.shortDescription}
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
          <Editor
            content={post?.description}
            onUpdate={(content) => setContentDebounced(content)}
          />
        </Input.Wrapper>
      </Stack>
    </form>
  );
};
