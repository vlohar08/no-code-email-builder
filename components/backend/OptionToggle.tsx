"use client";
import React from "react";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import { camelCase } from "lodash";

type OptionToggleProps = {
  id: string;
  title: string;
  state: boolean;
  children?: React.ReactNode;
  payloadTitle?: string;
};

function OptionToggle({
  id,
  title,
  payloadTitle,
  state,
  children,
}: OptionToggleProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleChange() {
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
      payload: {
        title: payloadTitle || camelCase(title),
        id,
        value: !state,
      },
    });
  }
  return (
    <div className="option-switch-wrapper default-padding default-border">
      <div className="default-two-grid">
        <p>{title}</p>
        <div
          className="toggle-button"
          data-active={state}
          onClick={handleChange}
        ></div>
      </div>
      {state && children}
    </div>
  );
}

export default OptionToggle;
