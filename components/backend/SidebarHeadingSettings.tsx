import React from "react";
import OptionsSelector from "./OptionsSelector";
import ColorPicker from "./ColorPicker";
import InputWithPlusMinusButtons from "./InputWithPlusMinusButtons";
import TextAlignOptionsSelector from "./TextAlignOptionsSelector";
import LineHeightOptionsSelector from "./LineHeightOptionsSelector";
import BlockPaddingCustomizer from "./BlockPaddingCustomizer";
import HideOnMobileAndDesktopButtons from "./HideOnMobileAndDesktopButtons";
import { FONTS, FONT_WEIGHTS } from "@/data/options";
// import { useEmailEditor } from "@/context/EmailEditorContextProvider";

type SidebarHeadingSettingsProps = {
  id: string;
  settings: any;
};

function SidebarHeadingSettings({ id, settings }: SidebarHeadingSettingsProps) {
  // const {
  //   selectedElement: { id, settings },
  // } = useEmailEditor();

  return (
    <>
      <OptionsSelector id={id} title="Title" options={["H1", "H2", "H3"]} />
      <OptionsSelector id={id} title="Font family" options={FONTS} />
      <OptionsSelector id={id} title="Font weight" options={FONT_WEIGHTS} />
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
