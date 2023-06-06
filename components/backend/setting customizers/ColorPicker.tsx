"use client";
import React from "react";
import { camelCase } from "lodash";
import { useUpdateEmailEditor } from "@/context/EmailEditorContextProvider";
import { ACTIONS } from "@/context/EmailEditorContextProvider";

type ColorPickerProps = {
  id: string;
  title: string;
  state: string;
};

function ColorPicker({ id, title, state }: ColorPickerProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
      payload: {
        title: camelCase(title),
        id,
        value: e.target.value,
      },
    });
  }
  return (
    <div className="color-picker-wrapper default-padding default-two-grid default-border">
      <p>{title}</p>
      <div>
        <input type="color" value={state} onChange={handleChange} />
        {state}
      </div>
    </div>
  );
}

export default React.memo(ColorPicker);
