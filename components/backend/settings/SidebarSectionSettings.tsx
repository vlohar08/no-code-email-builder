import React from "react";
import ColorPicker from "../setting customizers/ColorPicker";
import { SectionElement } from "@/types/EmailEditorContext.types";
import OptionToggle from "../setting customizers/OptionToggle";
import BackgroundImageEditor from "../setting customizers/BackgroundImageEditor";
import HideOnMobileAndDesktopButtons from "../setting customizers/HideOnMobileAndDesktopButtons";
import VerticalAlignOptions from "../setting customizers/VerticalAlignOptionsSelector";
import InputWithPlusMinusButtons from "../setting customizers/InputWithPlusMinusButtons";
import BorderEditor from "../setting customizers/BorderEditor";

type SidebarSectionSettingsProps = {
  id: string;
  settings: SectionElement["settings"];
};

function SidebarSectionSettings({ id, settings }: SidebarSectionSettingsProps) {
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
      <HideOnMobileAndDesktopButtons id={id} state={settings.hideOn} />
    </>
  );
}

export default React.memo(SidebarSectionSettings);