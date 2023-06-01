"use client";
import React from "react";
import { useUpdateEmailEditor } from "@/context/EmailEditorContextProvider";
import { ACTIONS } from "@/context/EmailEditorContextProvider";

type LineHeightOptionsSelectorProps = {
  id: string;
  state: number;
};

function LineHeightOptionsSelector({
  id,
  state,
}: LineHeightOptionsSelectorProps) {
  const updateEmailEditor = useUpdateEmailEditor();

  function handleChange(value: number) {
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
      payload: {
        title: "lineHeight",
        id,
        value,
      },
    });
  }

  return (
    <div className="line-height-options-selector-wrapper default-padding default-two-grid default-border">
      <p>Line height</p>
      <div>
        <button type="button" onClick={() => handleChange(1)}>
          <svg
            data-active={state === 1}
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path d="M25 9H0V10.5H25V9Z" fill="#898989"></path>
            <path d="M25 11.5H0V13H25V11.5Z" fill="#898989"></path>
            <path d="M25 14H0V15.5H25V14Z" fill="#898989"></path>
          </svg>
        </button>
        <button type="button" onClick={() => handleChange(1.2)}>
          <svg
            data-active={state === 1}
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path d="M25 7.75H0V9.25H25V7.75Z" fill="#898989"></path>
            <path d="M25 11.5H0V13H25V11.5Z" fill="#898989"></path>
            <path d="M25 15.25H0V16.75H25V15.25Z" fill="#898989"></path>
          </svg>
        </button>
        <button type="button" onClick={() => handleChange(1.4)}>
          <svg
            data-active={state === 1}
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path d="M25 6.5H0V8H25V6.5Z" fill="#898989"></path>
            <path d="M25 11.5H0V13H25V11.5Z" fill="#898989"></path>
            <path d="M25 16.5H0V18H25V16.5Z" fill="#898989"></path>
          </svg>
        </button>
        <button type="button" onClick={() => handleChange(1.6)}>
          <svg
            data-active={state === 1}
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path d="M25 11.5H0V13H25V11.5Z" fill="#898989"></path>
            <path d="M25 4H0V5.5H25V4Z" fill="#898989"></path>
            <path d="M25 19H0V20.5H25V19Z" fill="#898989"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default LineHeightOptionsSelector;
