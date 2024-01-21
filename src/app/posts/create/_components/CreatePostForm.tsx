"use client";

import { Editor } from "@/components/Editor";
import { createPost } from "@/lib/actions/post/createPost";
import { Button, Input, Text, TextInput, Textarea } from "@mantine/core";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useDebouncedCallback } from "use-debounce";

const SaveButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" loading={pending}>
      Save
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
      <input name="description" value={content} hidden aria-hidden readOnly />
      <TextInput label="Title" placeholder="Post title" name="title" required size="lg"/>
      <Textarea
        label="Short description"
        placeholder="Post short description"
        name="shortDescription"
        required
        autosize
        minRows={4}
        maxRows={10}
      />
      <Input.Wrapper label="Description" required>
        <Editor onUpdate={(content) => setContentDebounced(content)} />
      </Input.Wrapper>
      <SaveButton />
      {state.errorMessage && (
        <Text c="var(--mantine-color-error)">{state.errorMessage}</Text>
      )}
    </form>
  );
};
