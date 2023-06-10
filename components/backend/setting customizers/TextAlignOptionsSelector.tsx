import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
} from "@tabler/icons-react";
import React from "react";
import { useUpdateEmailEditor } from "@/context/EmailEditorContextProvider";
import { ACTIONS } from "@/context/EmailEditorContextProvider";

type TextAlignOptionsSelectorProps = {
  id: string;
  state: string;
};

function TextAlignOptionsSelector({
  id,
  state,
}: TextAlignOptionsSelectorProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleChange(value: string) {
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
      payload: {
        title: "textAlign",
        id,
        value,
      },
    });
  }
  return (
    <div className="align-options-selector-wrapper default-padding default-two-grid default-border">
      <p>Text Align</p>
      <div>
        <button
          className="svg-option"
          type="button"
          onClick={() => handleChange("left")}
        >
          <IconAlignLeft data-active={state === "left"} />
        </button>
        <button
          className="svg-option"
          type="button"
          onClick={() => handleChange("center")}
        >
          <IconAlignCenter data-active={state === "center"} />
        </button>
        <button
          className="svg-option"
          type="button"
          onClick={() => handleChange("right")}
        >
          <IconAlignRight data-active={state === "right"} />
        </button>
        <button
          className="svg-option"
          type="button"
          onClick={() => handleChange("justify")}
        >
          <IconAlignJustified data-active={state === "justify"} />
        </button>
      </div>
    </div>
  );
}

export default React.memo(TextAlignOptionsSelector);
