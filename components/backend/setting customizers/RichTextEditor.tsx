import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import { camelCase } from "lodash";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type RichTextEditorProps = {
  id: string;
  state: string;
  title: string;
};

function RichTextEditor({ id, state, title }: RichTextEditorProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      ["link"],
      ["clean"],
    ],
  };
  function handleChange(value: string) {
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
      payload: {
        title: camelCase(title),
        id,
        value,
      },
    });
  }
  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      value={state}
      onChange={handleChange}
    />
  );
}

export default React.memo(RichTextEditor);
