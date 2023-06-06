"use client";
import React from "react";
import InputWithSideLabel from "./InputWithSideLabel";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import { nanoid } from "nanoid";

type BackgroundImageEditorProps = {
  id: string;
  backgroundImageUrl: string;
  shouldBackgroundImageRepeat: boolean;
  isBackgroundImageCentered: boolean;
};

function BackgroundImageEditor({
  id,
  backgroundImageUrl,
  shouldBackgroundImageRepeat,
  isBackgroundImageCentered,
}: BackgroundImageEditorProps) {
  const repeatCheckboxId = nanoid(10);
  const centerCheckboxId = nanoid(10);

  const updateEmailEditor = useUpdateEmailEditor();
  function handleChange(value: boolean, title: string) {
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
      payload: {
        title,
        id,
        value,
      },
    });
  }
  return (
    <div className="background-image-editor-wrapper">
      <InputWithSideLabel
        id={id}
        title="Url"
        state={backgroundImageUrl}
        payloadTitle="backgroundImageUrl"
      />
      <div className="image-options">
        <div>
          <input
            type="checkbox"
            name="repeat"
            id={repeatCheckboxId}
            checked={shouldBackgroundImageRepeat}
            onChange={(e) =>
              handleChange(e.target.checked, "shouldBackgroundImageRepeat")
            }
          />
          <label htmlFor={repeatCheckboxId}>Repeat</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="center"
            id={centerCheckboxId}
            checked={isBackgroundImageCentered}
            onChange={(e) =>
              handleChange(e.target.checked, "isBackgroundImageCentered")
            }
          />
          <label htmlFor={centerCheckboxId}>Center</label>
        </div>
      </div>
    </div>
  );
}

export default React.memo(BackgroundImageEditor);
