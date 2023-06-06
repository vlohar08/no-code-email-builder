"use client";
import React from "react";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import { camelCase } from "lodash";

type InputWithSideLabelProps = {
  id: string;
  title: string;
  state: string;
  className?: string;
  payloadTitle?: string;
  onChange?: (value: string) => void;
};

function InputWithSideLabel({
  id,
  title,
  state,
  className,
  payloadTitle,
  onChange,
}: InputWithSideLabelProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(e.target.value);
    } else {
      updateEmailEditor({
        type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
        payload: {
          title: payloadTitle || camelCase(title),
          id,
          value: e.target.value,
        },
      });
    }
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

export default React.memo(InputWithSideLabel);
