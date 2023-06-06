import React, { useState } from "react";
import OptionsSelector from "../setting customizers/OptionsSelector";
import ColorPicker from "../setting customizers/ColorPicker";
import InputWithPlusMinusButtons from "../setting customizers/InputWithPlusMinusButtons";
import TextAlignOptionsSelector from "../setting customizers/TextAlignOptionsSelector";
import LineHeightOptionsSelector from "../setting customizers/LineHeightOptionsSelector";
import BlockPaddingCustomizer from "../setting customizers/BlockPaddingCustomizer";
import HideOnMobileAndDesktopButtons from "../setting customizers/HideOnMobileAndDesktopButtons";
import { FONTS, FONT_WEIGHTS } from "@/data/options";
import { TextBlockElement } from "@/types/EmailEditorContext.types";
import RichTextEditor from "../setting customizers/RichTextEditor";

type SidebarTextBlockSettings = {
  id: string;
  settings: TextBlockElement["settings"];
};

function SidebarTextBlockSettings({ id, settings }: SidebarTextBlockSettings) {
  return (
    <>
      <RichTextEditor id={id} title="content" state={settings.content} />
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
        min={1}
        max={100}
        id={id}
        title="Font size"
        state={settings?.fontSize}
      />
      <ColorPicker id={id} title="Text color" state={settings?.textColor} />
      <TextAlignOptionsSelector id={id} state={settings?.textAlign} />
      <LineHeightOptionsSelector id={id} state={settings?.lineHeight} />
      <InputWithPlusMinusButtons
        min={1}
        max={50}
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

export default React.memo(SidebarTextBlockSettings);
