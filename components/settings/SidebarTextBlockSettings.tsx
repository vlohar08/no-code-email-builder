import React from "react";
import OptionsSelector from "../backend/OptionsSelector";
import ColorPicker from "../backend/ColorPicker";
import InputWithPlusMinusButtons from "../backend/InputWithPlusMinusButtons";
import TextAlignOptionsSelector from "../backend/TextAlignOptionsSelector";
import LineHeightOptionsSelector from "../backend/LineHeightOptionsSelector";
import BlockPaddingCustomizer from "../backend/BlockPaddingCustomizer";
import HideOnMobileAndDesktopButtons from "../backend/HideOnMobileAndDesktopButtons";
import { FONTS, FONT_WEIGHTS } from "@/data/options";
import { TextBlockElement } from "@/types/EmailEditorContext.types";

type SidebarTextBlockSettings = {
  id: string;
  settings: TextBlockElement["settings"];
};

function SidebarTextBlockSettings({ id, settings }: SidebarTextBlockSettings) {
  return (
    <>
      <OptionsSelector
        id={id}
        title="Font family"
        state={settings.fontFamily}
        options={FONTS}
      />
      <OptionsSelector
        id={id}
        title="Font weight"
        state={settings.fontWeight}
        options={FONT_WEIGHTS}
      />
      <InputWithPlusMinusButtons
        id={id}
        title="Font size"
        state={settings?.fontSize}
      />
      <ColorPicker id={id} title="Text color" state={settings?.textColor} />
      <ColorPicker id={id} title="Link color" state={settings?.linkColor} />
      <TextAlignOptionsSelector id={id} state={settings?.textAlign} />
      <LineHeightOptionsSelector id={id} state={settings?.lineHeight} />
      <InputWithPlusMinusButtons
        id={id}
        title="Letter spacing"
        state={settings?.letterSpacing}
      />
      <h6 className="section-separator">Block Settings</h6>
      <BlockPaddingCustomizer id={id} state={settings.block.padding} />
      <HideOnMobileAndDesktopButtons id={id} state={settings.block?.hideOn} />
    </>
  );
}

export default SidebarTextBlockSettings;
