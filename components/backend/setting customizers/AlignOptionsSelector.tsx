"use client";
import React from "react";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import { Align } from "@/types/EmailEditorContext.types";

type AlignOptionsSelectorProps = {
  id: string;
  state: Align;
};

function AlignOptionsSelector({ id, state }: AlignOptionsSelectorProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleClick(value: string) {
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
      payload: {
        title: "align",
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
          onClick={() => handleClick("left")}
        >
          <svg
            data-active={state === "left"}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M0 0.84375C0 0.37793 0.37793 0 0.84375 0C1.30957 0 1.6875 0.37793 1.6875 0.84375V17.1562C1.6875 17.6238 1.30957 18 0.84375 18C0.37793 18 0 17.6238 0 17.1562V0.84375ZM16.3125 2.25C17.2441 2.25 18 3.00551 18 3.9375V6.1875C18 7.11914 17.2441 7.875 16.3125 7.875H6.1875C5.25586 7.875 4.5 7.11914 4.5 6.1875V3.9375C4.5 3.00551 5.25586 2.25 6.1875 2.25H16.3125ZM11.8125 10.125C12.7441 10.125 13.5 10.8809 13.5 11.8125V14.0625C13.5 14.9941 12.7441 15.75 11.8125 15.75H6.1875C5.25586 15.75 4.5 14.9941 4.5 14.0625V11.8125C4.5 10.8809 5.25586 10.125 6.1875 10.125H11.8125Z"></path>
          </svg>
        </button>
        <button
          className="svg-option"
          type="button"
          onClick={() => handleClick("center")}
        >
          <svg
            data-active={state === "center"}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M10.0293 1.49114V2.89583H16.1308C17.1946 2.89583 18.0576 3.65051 18.0576 4.58147V6.82899C18.0576 7.75961 17.1946 8.51463 16.1308 8.51463H10.0293V10.7622H13.5618C14.6255 10.7622 15.4885 11.5172 15.4885 12.4478V14.6953C15.4885 15.6259 14.6255 16.3809 13.5618 16.3809H10.0293V17.7857C10.0293 18.2527 9.59979 18.6285 9.06591 18.6285C8.53203 18.6285 8.10251 18.2527 8.10251 17.7857V16.3809H4.57006C3.50591 16.3809 2.64327 15.6259 2.64327 14.6953V12.4478C2.64327 11.5172 3.50591 10.7622 4.57006 10.7622H8.10251V8.51463H2.00101C0.936859 8.51463 0.0742188 7.75961 0.0742188 6.82899V4.58147C0.0742188 3.65051 0.936859 2.89583 2.00101 2.89583H8.10251V1.49114C8.10251 1.02583 8.53203 0.648315 9.06591 0.648315C9.59979 0.648315 10.0293 1.02583 10.0293 1.49114Z"></path>
          </svg>
        </button>
        <button
          className="svg-option"
          type="button"
          onClick={() => handleClick("right")}
        >
          <svg
            data-active={state === "right"}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18 17.1562C18 17.6238 17.6238 18 17.1562 18C16.6887 18 16.3125 17.6238 16.3125 17.1562V0.84375C16.3125 0.37793 16.6887 0 17.1562 0C17.6238 0 18 0.37793 18 0.84375V17.1562ZM11.8125 2.25C12.7441 2.25 13.5 3.00551 13.5 3.9375V6.1875C13.5 7.11914 12.7441 7.875 11.8125 7.875H1.6875C0.755508 7.875 0 7.11914 0 6.1875V3.9375C0 3.00551 0.755508 2.25 1.6875 2.25H11.8125ZM11.8125 10.125C12.7441 10.125 13.5 10.8809 13.5 11.8125V14.0625C13.5 14.9941 12.7441 15.75 11.8125 15.75H6.1875C5.25586 15.75 4.5 14.9941 4.5 14.0625V11.8125C4.5 10.8809 5.25586 10.125 6.1875 10.125H11.8125Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default React.memo(AlignOptionsSelector);
