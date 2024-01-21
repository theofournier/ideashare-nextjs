"use client";

import "./styles.css";

import { Button, Space } from "@mantine/core";
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

export const Editor = () => {
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
  });

  return (
    <div>
      <Button
        onClick={() => {
          console.log(editor?.getHTML());
          console.log(editor?.getJSON());
          console.log(editor?.getText());
        }}
      >
        Save
      </Button>
      <Space h="md" />
      <RichTextEditor editor={editor}>
        <EditorToolbar editor={editor} />
        {editor && <EditorBubbleMenu editor={editor} />}

        <RichTextEditor.Content />
      </RichTextEditor>
    </div>
  );
};
