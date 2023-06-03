import React from "react";
import OptionsSelector from "../backend/OptionsSelector";
import ColorPicker from "../backend/ColorPicker";
import InputWithPlusMinusButtons from "../backend/InputWithPlusMinusButtons";
import TextAlignOptionsSelector from "../backend/TextAlignOptionsSelector";
import LineHeightOptionsSelector from "../backend/LineHeightOptionsSelector";
import BlockPaddingCustomizer from "../backend/BlockPaddingCustomizer";
import HideOnMobileAndDesktopButtons from "../backend/HideOnMobileAndDesktopButtons";
import { FONTS, FONT_WEIGHTS } from "@/data/options";
import { HeadingElement } from "@/types/EmailEditorContext.types";
// import { useEmailEditor } from "@/context/EmailEditorContextProvider";

type SidebarHeadingSettingsProps = {
  id: string;
  settings: HeadingElement["settings"];
};

function SidebarHeadingSettings({ id, settings }: SidebarHeadingSettingsProps) {
  // const {
  //   selectedElement: { id, settings },
  // } = useEmailEditor();

  return (
    <>
      <OptionsSelector
        id={id}
        state={settings.title}
        title="Title"
        options={["H1", "H2", "H3"]}
      />
      <OptionsSelector
        id={id}
        state={settings.fontFamily}
        title="Font family"
        options={FONTS}
      />
      <OptionsSelector
        id={id}
        state={settings.fontWeight}
        title="Font weight"
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

export default SidebarHeadingSettings;
