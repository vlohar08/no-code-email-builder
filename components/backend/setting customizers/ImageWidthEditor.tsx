"use client";
import React from "react";
import OptionToggle from "./OptionToggle";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";

type ImageWidthEditorProps = {
  id: string;
  state: number | "auto";
  fullWidthOnMobile: boolean;
};

function ImageWidthEditor({
  id,
  state,
  fullWidthOnMobile,
}: ImageWidthEditorProps) {
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
    <div className="image-width-editor-wrapper default-padding default-border">
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
          <div className="image-width-range-slider">
            <input
              type="range"
              min={0}
              max={100}
              value={state}
              onChange={(e) => handleChange(Number(e.target.value), "width")}
            />
            <p>{state}</p>
          </div>
          <div className="image-full-width-checkbox-wrapper">
            <input
              type="checkbox"
              checked={fullWidthOnMobile}
              onChange={(e) =>
                handleChange(e.target.checked, "fullWidthOnMobile")
              }
            />
            <p>Full width on mobile</p>
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(ImageWidthEditor);
