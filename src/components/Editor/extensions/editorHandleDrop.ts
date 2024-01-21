import { Slice } from "@tiptap/pm/model";
import { EditorView } from "@tiptap/pm/view";

export const editorHandleDrop = (
  view: EditorView,
  event: DragEvent,
  slice: Slice,
  moved: boolean
) => {
  if (
    !moved &&
    event.dataTransfer &&
    event.dataTransfer.files &&
    event.dataTransfer.files[0]
  ) {
    let files = Array.from(event.dataTransfer.files);
    event.preventDefault();
    files.forEach((file) => {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        const url = e?.target?.result as string;
        if (url) {
          const coordinates = view.posAtCoords({
            left: event.clientX,
            top: event.clientY,
          });
          if (coordinates) {
            const node = view.state.schema.nodes.image.create({
              src: e.target?.result,
            });
            const transaction = view.state.tr.insert(coordinates?.pos, node);
            view.dispatch(transaction);
          }
        }
      };
      fileReader.readAsDataURL(file);
    });
    return true;
  }
};
