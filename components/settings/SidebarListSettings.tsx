import React from "react";
import OptionsSelector from "../backend/OptionsSelector";
import InputWithPlusMinusButtons from "../backend/InputWithPlusMinusButtons";
import ColorPicker from "../backend/ColorPicker";
import AlignOptionsSelector from "../backend/TextAlignOptionsSelector";
import LineHeightOptionsSelector from "../backend/LineHeightOptionsSelector";
import BlockPaddingCustomizer from "../backend/BlockPaddingCustomizer";
import HideOnMobileAndDesktopButtons from "../backend/HideOnMobileAndDesktopButtons";
import { FONTS, FONT_WEIGHTS } from "@/data/options";
import ListTypeSelector from "../backend/ListTypeSelector";
import { ListElement } from "@/types/EmailEditorContext.types";

type SidebarHeadingSettingsProps = {
  id: string;
  settings: ListElement["settings"];
};

function SidebarListSettings({ id, settings }: SidebarHeadingSettingsProps) {
  return (
    <>
      <ListTypeSelector id={id} state={settings.listType} />
      <OptionsSelector
        id={id}
        state={settings.listStyleType}
        title="List style type"
        options={["Circle", "Square", "Upper roman", "Lower alpha"]}
      />
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
      <ColorPicker id={id} title="Text color" state={settings.textColor} />
      <ColorPicker id={id} title="Link color" state={settings.linkColor} />
      <AlignOptionsSelector id={id} state={settings.textAlign} />
      <LineHeightOptionsSelector id={id} state={settings.lineHeight} />
      <h6 className="section-separator">Block Settings</h6>
      <BlockPaddingCustomizer id={id} state={settings.block.padding} />
      <HideOnMobileAndDesktopButtons id={id} state={settings.block?.hideOn} />
    </>
  );
}

export default SidebarListSettings;
