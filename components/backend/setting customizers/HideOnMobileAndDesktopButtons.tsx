"use client";
import { IconDeviceImac, IconDeviceMobile, IconX } from "@tabler/icons-react";
import React from "react";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import { HideOn } from "@/types/EmailEditorContext.types";
type HideOnMobileAndDesktopButtonsProps = {
  id: string;
  state: HideOn;
};

function HideOnMobileAndDesktopButtons({
  id,
  state,
}: HideOnMobileAndDesktopButtonsProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleChange(value: string) {
    let hideOn = "";
    if (value !== "reset") {
      hideOn = value;
    }
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_NESTED_SETTINGS,
      payload: {
        titles: ["block", "hideOn"],
        id,
        value: hideOn,
      },
    });
  }
  return (
    <div className="hide-on-mobile-and-desktop-button-wrapper default-padding default-two-grid default-border">
      <p>Hide on</p>
      <div>
        {(state === "mobile" || state === "desktop") && (
          <button type="button" onClick={() => handleChange("reset")}>
            <IconX />
          </button>
        )}
        <button
          type="button"
          data-active={state === "desktop"}
          onClick={() => handleChange("desktop")}
        >
          <IconDeviceImac />
        </button>
        <button
          type="button"
          data-active={state === "mobile"}
          onClick={() => handleChange("mobile")}
        >
          <IconDeviceMobile />
        </button>
      </div>
    </div>
  );
}

export default React.memo(HideOnMobileAndDesktopButtons);
