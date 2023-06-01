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
        <button type="button" onClick={() => handleChange("left")}>
          <IconAlignLeft data-active={state === "left"} />
        </button>
        <button
          type="button"
          data-active={state === "center"}
          onClick={() => handleChange("center")}
        >
          <IconAlignCenter />
        </button>
        <button
          type="button"
          data-active={state === "right"}
          onClick={() => handleChange("right")}
        >
          <IconAlignRight />
        </button>
        <button
          type="button"
          data-active={state === "justify"}
          onClick={() => handleChange("justify")}
        >
          <IconAlignJustified />
        </button>
      </div>
    </div>
  );
}

export default TextAlignOptionsSelector;
