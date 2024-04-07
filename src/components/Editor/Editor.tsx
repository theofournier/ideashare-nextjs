"use client";

import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import { EditorToolbar } from "./controls/EditorToolbar";
import { EditorBubbleMenu } from "./controls/EditorBubbleMenu";
import { ResizableImage } from "./extensions/ResizableImage";
import { defaultContent } from "./constants";
import { editorHandlePaste } from "./extensions/editorHandlePaste";
import { editorHandleDrop } from "./extensions/editorHandleDrop";

type Props = {
  onUpdate: (content: string) => void;
};

export const Editor = ({ onUpdate }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TextStyle,
      Color,
      ResizableImage,
    ],
    content: defaultContent,
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML());
    },
    editorProps: {
      handlePaste: editorHandlePaste,
      handleDrop: editorHandleDrop,
    },
  });

  return (
    <RichTextEditor
      editor={editor}
      styles={{
        content: { backgroundColor: "var(--_input-bg)" },
      }}
    >
      <EditorToolbar editor={editor} />
      {editor && <EditorBubbleMenu editor={editor} />}

      <RichTextEditor.Content />
    </RichTextEditor>
  );
};
