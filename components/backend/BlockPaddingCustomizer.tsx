"use client";
import React, { useState } from "react";
import InputWithPlusMinusButtons from "./InputWithPlusMinusButtons";
import { useUpdateEmailEditor } from "@/context/EmailEditorContextProvider";
import { ACTIONS } from "@/context/EmailEditorContextProvider";
import { Padding } from "@/types/EmailEditorContext.types";

type BlockPaddingCustomizerProps = {
  id: string;
  state: number | Padding;
};

function BlockPaddingCustomizer({ id, state }: BlockPaddingCustomizerProps) {
  const [isMoreOptionsActive, setIsMoreOptionsActive] = useState(false);
  const updateEmailEditor = useUpdateEmailEditor();

  function handleChange(
    title: keyof typeof state | string,
    type: "increment" | "decrement"
  ) {
    let padding;
    if (isMoreOptionsActive && typeof state === "object") {
      const newPadding = { ...state };
      type === "increment"
        ? (newPadding[title as keyof typeof state] =
            state[title as keyof typeof state] + 1)
        : (newPadding[title as keyof typeof state] =
            state[title as keyof typeof state] - 1);
      padding = newPadding;
    }
    if (typeof state === "number") {
      padding = type === "increment" ? state + 1 : state - 1;
    }
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_BLOCK_SETTINGS,
      payload: {
        title: "padding",
        id,
        value: padding,
      },
    });
  }

  function handleToggle() {
    setIsMoreOptionsActive((prevValue) => !prevValue);
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_BLOCK_SETTINGS,
      payload: {
        title: "padding",
        id,
        value: !isMoreOptionsActive
          ? {
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              paddingLeft: 0,
            }
          : 0,
      },
    });
  }

  return (
    <div className="block-padding-customizer-wrapper default-padding default-border">
      <div>
        <p>Padding</p>
        <div>
          <p>More options</p>
          <div
            className="toggle-button"
            data-active={isMoreOptionsActive}
            onClick={handleToggle}
          ></div>
        </div>
      </div>
      <div>
        {!isMoreOptionsActive && (
          <div>
            <p>All Sides</p>
            <InputWithPlusMinusButtons
              id={id}
              state={typeof state === "number" ? state : 0}
              onChange={(type) => handleChange("padding", type)}
            />
          </div>
        )}
        {isMoreOptionsActive && (
          <>
            <div>
              <p>Top</p>
              <InputWithPlusMinusButtons
                id={id}
                state={typeof state === "object" ? state?.paddingTop : 0}
                onChange={(type) => handleChange("paddingTop", type)}
              />
            </div>
            <div>
              <p>Right</p>
              <InputWithPlusMinusButtons
                id={id}
                state={typeof state === "object" ? state?.paddingRight : 0}
                onChange={(type) => handleChange("paddingRight", type)}
              />
            </div>
            <div>
              <p>Bottom</p>
              <InputWithPlusMinusButtons
                id={id}
                state={typeof state === "object" ? state?.paddingBottom : 0}
                onChange={(type) => handleChange("paddingBottom", type)}
              />
            </div>
            <div>
              <p>Left</p>
              <InputWithPlusMinusButtons
                id={id}
                state={typeof state === "object" ? state?.paddingLeft : 0}
                onChange={(type) => handleChange("paddingLeft", type)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BlockPaddingCustomizer;
