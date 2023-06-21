import React from "react";
import ColorPicker from "../setting customizers/ColorPicker";
import { SectionElement } from "@/types/EmailEditorContext.types";
import OptionToggle from "../setting customizers/OptionToggle";
import BackgroundImageEditor from "../setting customizers/BackgroundImageEditor";
import BorderEditor from "../setting customizers/BorderEditor";
import InputWithPlusMinusButtons from "../setting customizers/InputWithPlusMinusButtons";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";

type SidebarSectionSettingsProps = {
  id: string;
  settings: SectionElement["settings"];
};

function SidebarSectionSettings({ id, settings }: SidebarSectionSettingsProps) {
  const updateEmailEditor = useUpdateEmailEditor();

  function handleColumns(type: string) {
    updateEmailEditor({
      type: ACTIONS.ADD_OR_REMOVE_COLUMN_IN_SECTION,
      payload: {
        id,
        type,
        value:
          type === "increment"
            ? settings.totalColumns + 1
            : settings.totalColumns - 1,
      },
    });
  }

  return (
    <>
      <ColorPicker
        id={id}
        title="Content Area background color"
        state={settings.contentAreaBackgroundColor}
      />
      <OptionToggle
        id={id}
        title="Background Image"
        payloadTitle="showBackgroundImage"
        state={settings.showBackgroundImage}
      >
        <BackgroundImageEditor
          id={id}
          backgroundImageUrl={settings.backgroundImageUrl}
          shouldBackgroundImageRepeat={settings.shouldBackgroundImageRepeat}
          isBackgroundImageCentered={settings.isBackgroundImageCentered}
        />
      </OptionToggle>
      <BorderEditor
        id={id}
        state={settings.contentAreaBorder}
        payloadTitle="contentAreaBorder"
      />
      <InputWithPlusMinusButtons
        id={id}
        state={settings.totalColumns || 1}
        min={1}
        max={4}
        title="Total columns"
        onChange={handleColumns}
      />
    </>
  );
}

export default React.memo(SidebarSectionSettings);
