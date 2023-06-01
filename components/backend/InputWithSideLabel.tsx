"use client";
import React from "react";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";

type InputWithSideLabelProps = {
  id: string;
  title: string;
  state: string;
  className?: string;
  payloadTitle: string;
};

function InputWithSideLabel({
  id,
  title,
  state,
  className,
  payloadTitle,
}: InputWithSideLabelProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
      payload: {
        title: payloadTitle,
        id,
        value: e.target.value,
      },
    });
  }

  return (
    <div className={`input-with-side-label-wrapper ${className}`}>
      <div>
        <label htmlFor={id}>{title}</label>
        <input id={id} type="text" value={state} onChange={handleChange} />
      </div>
    </div>
  );
}

export default InputWithSideLabel;
