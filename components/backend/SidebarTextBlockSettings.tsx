import React from "react";
import OptionsSelector from "./OptionsSelector";
import { FONTS, FONT_WEIGHTS } from "@/data/options";
import InputWithPlusMinusButtons from "./InputWithPlusMinusButtons";
import ColorPicker from "./ColorPicker";
import AlignOptionsSelector from "./TextAlignOptionsSelector";
import LineHeightOptionsSelector from "./LineHeightOptionsSelector";
import BlockPaddingCustomizer from "./BlockPaddingCustomizer";
import HideOnMobileAndDesktopButtons from "./HideOnMobileAndDesktopButtons";

function SidebarTextBlockSettings() {
  return (
    <>
      <OptionsSelector title="Font family" options={FONTS} setState={() => 1} />
      <OptionsSelector
        title="Font weight"
        options={FONT_WEIGHTS}
        setState={() => 1}
      />
      <InputWithPlusMinusButtons
        title="Font size"
        setState={() => 1}
        state={1}
      />
      <ColorPicker
        title="Text color"
        state={"transparent"}
        setState={() => 1}
      />
      <ColorPicker
        title="Link color"
        state={"transparent"}
        setState={() => 1}
      />
      <AlignOptionsSelector />
      <LineHeightOptionsSelector />
      <h6 className="section-separator">Block Settings</h6>
      <BlockPaddingCustomizer />
      <HideOnMobileAndDesktopButtons />
    </>
  );
}

export default SidebarTextBlockSettings;
