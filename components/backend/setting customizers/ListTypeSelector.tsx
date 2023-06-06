"use client";
import { IconList, IconListNumbers } from "@tabler/icons-react";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import React from "react";

type ListTypeSelector = {
  id: string;
  state: string;
};

function ListTypeSelector({ id, state }: ListTypeSelector) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleChange(value: string) {
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
      payload: {
        title: "listType",
        id,
        value,
      },
    });
  }
  return (
    <div className="list-type-selector-wrapper default-padding default-two-grid default-border">
      <p>List type</p>
      <div>
        <button className="svg-option" onClick={() => handleChange("ul")}>
          <IconList data-active={state === "ul"} />
        </button>
        <button className="svg-option" onClick={() => handleChange("ol")}>
          <IconListNumbers data-active={state === "ol"} />
        </button>
      </div>
    </div>
  );
}

export default React.memo(ListTypeSelector);
