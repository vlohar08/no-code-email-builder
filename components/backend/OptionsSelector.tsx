"use client";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import React from "react";
import { camelCase } from "lodash";

type OptionsSelectorProps = {
  title: string;
  options: string[];
  id: string;
};

function OptionsSelector({ title, options, id }: OptionsSelectorProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
      payload: {
        title: camelCase(title),
        id,
        value: e.target.value.toLowerCase(),
      },
    });
  }
  return (
    <div className="options-selector-wrapper default-padding default-two-grid default-border">
      <p>{title}</p>
      <select onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default OptionsSelector;
