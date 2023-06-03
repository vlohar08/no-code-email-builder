import { ButtonElement } from "@/types/EmailEditorContext.types";
import React from "react";
import ElementWidthEditor from "../backend/ElementWidthEditor";
import OptionsSelector from "../backend/OptionsSelector";
import { FONTS, FONT_WEIGHTS } from "@/data/options";
import InputWithPlusMinusButtons from "../backend/InputWithPlusMinusButtons";
import ColorPicker from "../backend/ColorPicker";
import AlignOptionsSelector from "../backend/AlignOptionsSelector";
import LineHeightOptionsSelector from "../backend/LineHeightOptionsSelector";
import BlockPaddingCustomizer from "../backend/BlockPaddingCustomizer";
import HideOnMobileAndDesktopButtons from "../backend/HideOnMobileAndDesktopButtons";
import InputWithSideLabel from "../backend/InputWithSideLabel";
import ElementPaddingCustomizer from "../backend/ElementPaddingCustomizer";

type SidebarButtonSettingsProps = {
  id: string;
  settings: ButtonElement["settings"];
};

function SidebarButtonSettings({ id, settings }: SidebarButtonSettingsProps) {
  return (
    <>
      <InputWithSideLabel
        id={id}
        state={settings.url}
        title="url"
        className="default-padding default-border"
      />
      <ElementWidthEditor id={id} state={settings.width} />
      <OptionsSelector
        id={id}
        title="Font family"
        options={FONTS}
        state={settings.fontFamily}
      />
      <OptionsSelector
        id={id}
        title="Font weight"
        options={FONT_WEIGHTS}
        state={settings.fontWeight}
      />
      <InputWithPlusMinusButtons
        id={id}
        title="Font size"
        state={settings.fontSize}
      />
      <ColorPicker
        id={id}
        title="Background color"
        state={settings.backgroundColor}
      />
      <ColorPicker id={id} title="Text color" state={settings.textColor} />
      <AlignOptionsSelector id={id} state={settings.align} />
      <LineHeightOptionsSelector id={id} state={settings.lineHeight} />
      <InputWithPlusMinusButtons
        id={id}
        title="Letter spacing"
        state={settings.letterSpacing}
      />
      <InputWithPlusMinusButtons
        id={id}
        title="Border radius"
        state={settings.borderRadius}
      />
      <ElementPaddingCustomizer id={id} state={settings.padding} />
      <h6 className="section-separator">Block Settings</h6>
      <BlockPaddingCustomizer id={id} state={settings.block.padding} />
      <HideOnMobileAndDesktopButtons id={id} state={settings.block?.hideOn} />
    </>
  );
}

export default SidebarButtonSettings;
