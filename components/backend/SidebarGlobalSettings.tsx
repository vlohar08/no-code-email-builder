import React from "react";
import RangeSlider from "./RangeSlider";
import ColorPicker from "./ColorPicker";
import OptionsSwatches from "./OptionsSwatches";
import OptionToggle from "./OptionToggle";
import BackgroundImageEditor from "./BackgroundImageEditor";
import {
  useEmailEditor,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";

function SidebarGlobalSettings() {
  const emailData = useEmailEditor();
  const updateEmailData = useUpdateEmailEditor();
  return (
    <div>
      <RangeSlider
        title="Content Area Width"
        min={480}
        max={900}
        valueUnit="px"
        id="global"
        state={emailData.settings.contentAreaWidth}
      />
      <ColorPicker
        id="global"
        title="Background Color"
        state={emailData.settings.backgroundColor}
      />
      <ColorPicker
        id="global"
        title="Content Area Background Color"
        state={emailData.settings.contentAreaBackgroundColor}
      />
      <ColorPicker
        id="global"
        title="Link Color"
        state={emailData.settings.linkColor}
      />
      <OptionsSwatches
        id="global"
        title="Content Area Alignment"
        options={["Left", "Center"]}
        state={emailData.settings.contentAreaAlignment}
      />
      <OptionToggle
        id="global"
        title="Background Image"
        state={emailData.settings.showBackgroundImage}
        payloadTitle="showBackgroundImage"
      >
        <BackgroundImageEditor
          id="global"
          shouldBackgroundImageRepeat={
            emailData.settings.shouldBackgroundImageRepeat
          }
          backgroundImageUrl={emailData.settings.backgroundImageUrl}
          isBackgroundImageCentered={
            emailData.settings.isBackgroundImageCentered
          }
        />
      </OptionToggle>
    </div>
  );
}

export default SidebarGlobalSettings;
