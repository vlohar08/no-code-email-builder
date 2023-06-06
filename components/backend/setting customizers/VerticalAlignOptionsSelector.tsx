"use client";
import React from "react";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import { VerticalAlign } from "@/types/EmailEditorContext.types";

type VerticalAlignOptionsProps = {
  id: string;
  state: VerticalAlign;
};

function VerticalAlignOptions({ id, state }: VerticalAlignOptionsProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleClick(value: string) {
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
      payload: {
        title: "verticalAlign",
        id,
        value,
      },
    });
  }
  return (
    <div className="align-options-selector-wrapper default-padding default-two-grid default-border">
      <p>Align</p>
      <div>
        <button
          className="svg-option"
          type="button"
          onClick={() => handleClick("start")}
        >
          <svg
            data-active={state === "start"}
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M15.25 0C15.6656 0 16 0.335938 16 0.75C16 1.16406 15.6656 1.5 15.25 1.5H0.75C0.335938 1.5 0 1.16406 0 0.75C0 0.335938 0.335938 0 0.75 0H15.25ZM2 5.5C2 4.67188 2.67156 4 3.5 4H5.5C6.32812 4 7 4.67188 7 5.5V14.5C7 15.3281 6.32812 16 5.5 16H3.5C2.67156 16 2 15.3281 2 14.5V5.5ZM9 5.5C9 4.67188 9.67188 4 10.5 4H12.5C13.3281 4 14 4.67188 14 5.5V10.5C14 11.3281 13.3281 12 12.5 12H10.5C9.67188 12 9 11.3281 9 10.5V5.5Z"></path>
          </svg>
        </button>
        <button
          className="svg-option"
          type="button"
          onClick={() => handleClick("center")}
        >
          <svg
            data-active={state === "center"}
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M2 2.5C2 1.67156 2.67156 1 3.5 1H5.5C6.32812 1 7 1.67156 7 2.5V7.25H9V4.5C9 3.67188 9.67188 3 10.5 3H12.5C13.3281 3 14 3.67188 14 4.5V7.25H15.25C15.6656 7.25 16 7.58437 16 8C16 8.41563 15.6656 8.75 15.25 8.75H14V11.5C14 12.3281 13.3281 13 12.5 13H10.5C9.67188 13 9 12.3281 9 11.5V8.75H7V13.5C7 14.3281 6.32812 15 5.5 15H3.5C2.67156 15 2 14.3281 2 13.5V8.75H0.75C0.335938 8.75 0 8.41563 0 8C0 7.58437 0.335938 7.25 0.75 7.25H2V2.5Z"></path>
          </svg>
        </button>
        <button
          className="svg-option"
          type="button"
          onClick={() => handleClick("end")}
        >
          <svg
            data-active={state === "end"}
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M0.75 16C0.335938 16 0 15.6656 0 15.25C0 14.8344 0.335938 14.5 0.75 14.5H15.25C15.6656 14.5 16 14.8344 16 15.25C16 15.6656 15.6656 16 15.25 16H0.75ZM2 1.5C2 0.671562 2.67156 0 3.5 0H5.5C6.32812 0 7 0.671562 7 1.5V10.5C7 11.3281 6.32812 12 5.5 12H3.5C2.67156 12 2 11.3281 2 10.5V1.5ZM9 5.5C9 4.67188 9.67188 4 10.5 4H12.5C13.3281 4 14 4.67188 14 5.5V10.5C14 11.3281 13.3281 12 12.5 12H10.5C9.67188 12 9 11.3281 9 10.5V5.5Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default React.memo(VerticalAlignOptions);
