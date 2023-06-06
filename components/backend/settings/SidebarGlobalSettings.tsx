import React from "react";
import RangeSlider from "../setting customizers/RangeSlider";
import ColorPicker from "../setting customizers/ColorPicker";
import OptionsSwatches from "../setting customizers/OptionsSwatches";
import OptionToggle from "../setting customizers/OptionToggle";
import BackgroundImageEditor from "../setting customizers/BackgroundImageEditor";
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

export default React.memo(SidebarGlobalSettings);
