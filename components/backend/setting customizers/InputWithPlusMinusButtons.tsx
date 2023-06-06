"use client";
import { useUpdateEmailEditor } from "@/context/EmailEditorContextProvider";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import React from "react";
import { camelCase } from "lodash";
import { ACTIONS } from "@/context/EmailEditorContextProvider";

type InputWithPlusMinusButtonsProps = {
  title?: string;
  state: number;
  id: string;
  min: number;
  max: number;
  onChange?: (type: "increment" | "decrement") => void;
};

function InputWithPlusMinusButtons({
  title,
  state,
  id,
  min,
  max,
  onChange,
}: InputWithPlusMinusButtonsProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleChange(type: "increment" | "decrement") {
    if (onChange) {
      onChange(type);
    } else {
      if (state === max && type === "increment") return;
      if (state === min && type === "decrement") return;
      updateEmailEditor({
        type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
        payload: {
          title: camelCase(title),
          id,
          value: type === "increment" ? state + 1 : state - 1,
        },
      });
    }
  }
  return (
    <div className="input-with-plus-minus-buttons-wrapper default-padding default-two-grid default-border">
      {title && <p>{title}</p>}
      <div>
        <button
          disabled={state === min}
          type="button"
          onClick={() => handleChange("decrement")}
        >
          <IconMinus />
        </button>
        <input type="number" value={state} readOnly />
        <button
          disabled={state === max}
          type="button"
          onClick={() => handleChange("increment")}
        >
          <IconPlus />
        </button>
      </div>
    </div>
  );
}

export default React.memo(InputWithPlusMinusButtons);
