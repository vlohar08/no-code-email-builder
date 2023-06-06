"use client";
import React from "react";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";

type ElementWidthEditorProps = {
  id: string;
  state: number | "auto";
};

function ElementWidthEditor({ id, state }: ElementWidthEditorProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleChange(value: number | "auto" | boolean, title: string) {
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
      payload: {
        title,
        id,
        value,
      },
    });
  }

  return (
    <div className="element-width-editor-wrapper default-padding default-border">
      <div className="default-two-grid ">
        <p>Auto Width</p>
        <div
          className="toggle-button"
          data-active={state === "auto"}
          onClick={() => handleChange(state === "auto" ? 100 : "auto", "width")}
        ></div>
      </div>
      {state !== "auto" && (
        <>
          <div
            className="element-width-range-slider"
            style={{ display: "flex", gap: 5, alignItems: "center" }}
          >
            <input
              type="range"
              min={0}
              max={100}
              value={state}
              onChange={(e) => handleChange(Number(e.target.value), "width")}
            />
            <p>{state}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(ElementWidthEditor);
