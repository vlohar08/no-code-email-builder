import { ButtonElement } from "@/types/EmailEditorContext.types";
import React from "react";
import ElementWidthEditor from "../setting customizers/ElementWidthEditor";
import OptionsSelector from "../setting customizers/OptionsSelector";
import { FONTS, FONT_WEIGHTS } from "@/data/options";
import InputWithPlusMinusButtons from "../setting customizers/InputWithPlusMinusButtons";
import ColorPicker from "../setting customizers/ColorPicker";
import AlignOptionsSelector from "../setting customizers/AlignOptionsSelector";
import LineHeightOptionsSelector from "../setting customizers/LineHeightOptionsSelector";
import BlockPaddingCustomizer from "../setting customizers/BlockPaddingCustomizer";
import HideOnMobileAndDesktopButtons from "../setting customizers/HideOnMobileAndDesktopButtons";
import InputWithSideLabel from "../setting customizers/InputWithSideLabel";
import ElementPaddingCustomizer from "../setting customizers/ElementPaddingCustomizer";

type SidebarButtonSettingsProps = {
  id: string;
  settings: ButtonElement["settings"];
};

function SidebarButtonSettings({ id, settings }: SidebarButtonSettingsProps) {
  return (
    <>
      <InputWithSideLabel
        id={id}
        state={settings.text}
        title="Text"
        className="default-padding default-border"
      />
      <InputWithSideLabel
        id={id}
        state={settings.url}
        title="Url"
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
        min={0}
        max={100}
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
        min={0}
        max={50}
        id={id}
        title="Letter spacing"
        state={settings.letterSpacing}
      />
      <InputWithPlusMinusButtons
        min={0}
        max={100}
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

export default React.memo(SidebarButtonSettings);
