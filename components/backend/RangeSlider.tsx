"use client";
import React from "react";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import { camelCase } from "lodash";

type RangeSliderProps = {
  id?: string;
  title: string;
  valueUnit?: string;
  min: number;
  max: number;
  state: number;
  onChange?: () => void;
} & (
  | {
      onChange: () => void;
      id?: never;
    }
  | { onChange?: never; id: string }
);

function RangeSlider({
  id,
  title,
  valueUnit,
  min,
  max,
  state,
  onChange,
}: RangeSliderProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange();
    } else {
      updateEmailEditor({
        type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
        payload: {
          title: camelCase(title),
          id,
          value: Number(e.target.value),
        },
      });
    }
  }
  return (
    <div className="range-slider-wrapper default-padding default-border">
      <p>
        {title}:{" "}
        <span>
          {state}
          {valueUnit}
        </span>
      </p>
      <input
        type="range"
        min={min}
        max={max}
        value={state}
        onChange={handleChange}
      />
    </div>
  );
}

export default RangeSlider;
