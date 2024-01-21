"use client";

import { FileButton } from "@mantine/core";
import { RichTextEditor } from "@mantine/tiptap";
import { IconPhoto } from "@tabler/icons-react";
import { Editor } from "@tiptap/react";
import { iconProps } from "../constants";

type Props = {
  editor: Editor | null;
};

export const UploadImageControl = ({ editor }: Props) => {
  const onFilesSelected = (files: File[]) => {
    files.forEach((file) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);
      fileReader.onload = (e) => {
        const url = e?.target?.result as string;
        if (url) {
          editor?.chain().focus().setImage({ src: url }).run();
        }
      };
    });
  };

  return (
    <RichTextEditor.Control
      title="Insert image"
      aria-label="Insert image"
      active={editor?.isActive("image")}
    >
      <FileButton
        onChange={onFilesSelected}
        accept="image/png,image/jpeg"
        multiple
      >
        {(props) => <IconPhoto {...props} {...iconProps} />}
      </FileButton>
    </RichTextEditor.Control>
  );
};
