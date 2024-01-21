import { EditorView } from "@tiptap/pm/view";

export const editorHandlePaste = (view: EditorView, event: ClipboardEvent) => {
  const items = Array.from(event.clipboardData?.items || []);
  items.forEach((item) => {
    if (item.type.indexOf("image") === 0) {
      const file = item.getAsFile();
      if (file) {
        let reader = new FileReader();
        reader.onload = (e) => {
          const node = view.state.schema.nodes.image.create({
            src: e.target?.result,
          });
          const transaction = view.state.tr.replaceSelectionWith(node);
          view.dispatch(transaction);
        };
        reader.readAsDataURL(file);
      }
    }
  });

  return true;
};
