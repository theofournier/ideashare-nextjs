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
    if (!editor) return;
    files.forEach((file) => {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        const node = editor.view.state.schema.nodes.image.create({
          src: e.target?.result,
        });
        const transaction = editor.view.state.tr.replaceSelectionWith(node);
        editor.view.dispatch(transaction);
      };
      fileReader.readAsDataURL(file);
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
