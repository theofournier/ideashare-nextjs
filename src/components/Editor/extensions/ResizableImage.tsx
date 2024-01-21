import Image from "@tiptap/extension-image";
import { mergeAttributes } from "@tiptap/react";

export const ResizableImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      size: {
        default: "small",
        rendered: false,
      },
    };
  },

  addCommands() {
    return {
      setImage:
        (options) =>
        ({ tr, commands }) => {
          if (tr.selection?.node?.type?.name == "image") {
            return commands.updateAttributes("image", options);
          } else {
            return commands.insertContent({
              type: this.name,
              attrs: options,
            });
          }
        },
    };
  },

  renderHTML({ node, HTMLAttributes }) {
    HTMLAttributes.class = " image-" + node.attrs.size;

    return [
      "img",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },
});
