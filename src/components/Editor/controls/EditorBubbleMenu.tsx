import { RichTextEditor } from "@mantine/tiptap";
import { IconResize } from "@tabler/icons-react";
import { BubbleMenu, Editor } from "@tiptap/react";
import { colors, iconProps } from "../constants";

type Props = {
  editor: Editor;
};

const getIconSize = (size: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return "0.7rem";
    case "medium":
      return "1rem";
    case "large":
      return "1.3rem";
  }
};

const ImageControl = ({
  size,
  editor,
}: {
  size: "small" | "medium" | "large";
  editor: Editor;
}) => {
  return (
    <RichTextEditor.Control
      onClick={() => editor.chain().focus().setImage({ size }).run()}
      active={editor.isActive("image", { size })}
    >
      <IconResize {...iconProps} size={getIconSize(size)} />
    </RichTextEditor.Control>
  );
};

export const EditorBubbleMenu = ({ editor }: Props) => {
  if (editor.isActive("image"))
    return (
      <BubbleMenu editor={editor}>
        <RichTextEditor.ControlsGroup>
          <ImageControl size="small" editor={editor} />
          <ImageControl size="medium" editor={editor} />
          <ImageControl size="large" editor={editor} />
        </RichTextEditor.ControlsGroup>
      </BubbleMenu>
    );
  return (
    <BubbleMenu editor={editor}>
      <RichTextEditor.ControlsGroup>
        <RichTextEditor.ColorPicker colors={colors} />
        <RichTextEditor.Link />
        <RichTextEditor.ClearFormatting />
      </RichTextEditor.ControlsGroup>
    </BubbleMenu>
  );
};
