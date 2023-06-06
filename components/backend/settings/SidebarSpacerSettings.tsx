import { SpacerElement } from "@/types/EmailEditorContext.types";
import React from "react";
import HideOnMobileAndDesktopButtons from "../setting customizers/HideOnMobileAndDesktopButtons";
import InputWithPlusMinusButtons from "../setting customizers/InputWithPlusMinusButtons";

type SidebarSpacerSettingsProps = {
  id: string;
  settings: SpacerElement["settings"];
};

function SidebarSpacerSettings({ id, settings }: SidebarSpacerSettingsProps) {
  return (
    <>
      <InputWithPlusMinusButtons
        min={1}
        max={150}
        title="Height"
        id={id}
        state={settings.height}
      />
      <h6 className="section-separator">Block Settings</h6>
      <HideOnMobileAndDesktopButtons id={id} state={settings.block?.hideOn} />
    </>
  );
}

export default React.memo(SidebarSpacerSettings);
