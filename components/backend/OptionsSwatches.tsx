"use client";
import React, { Dispatch, SetStateAction } from "react";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import { camelCase } from "lodash";

type OptionsSwatchesProps = {
  id: string;
  title: string;
  options: string[];
  state: string;
};

function OptionsSwatches({ id, title, options, state }: OptionsSwatchesProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleChange(value: string) {
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
      payload: {
        title: camelCase(title),
        id,
        value: value.toLowerCase(),
      },
    });
  }

  return (
    <div className="options-swatches-wrapper default-padding default-two-grid default-border">
      <p>{title}</p>
      <div>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            data-active={state === option.toLowerCase()}
            onClick={() => handleChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default OptionsSwatches;
