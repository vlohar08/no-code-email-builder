"use client";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import React from "react";
import { camelCase } from "lodash";

type OptionsSelectorProps = {
  title: string;
  options: string[] | number[];
  id: string;
  state: string | number;
  onChange?: (value: string | number) => void;
};

function OptionsSelector({
  title,
  options,
  id,
  state,
  onChange,
}: OptionsSelectorProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    if (onChange) {
      onChange(value);
    } else {
      updateEmailEditor({
        type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
        payload: {
          title: camelCase(title),
          id,
          value: typeof options[0] === "string" ? value : Number(value),
        },
      });
    }
  }
  return (
    <div className="options-selector-wrapper default-padding default-two-grid default-border">
      <p>{title}</p>
      <select onChange={handleChange} value={state}>
        {options.map((option) => (
          <option key={option} value={(option as string).toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.memo(OptionsSelector);
