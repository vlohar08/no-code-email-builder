import React from "react";
import OptionsSelector from "../setting customizers/OptionsSelector";
import ColorPicker from "../setting customizers/ColorPicker";
import InputWithPlusMinusButtons from "../setting customizers/InputWithPlusMinusButtons";
import TextAlignOptionsSelector from "../setting customizers/TextAlignOptionsSelector";
import LineHeightOptionsSelector from "../setting customizers/LineHeightOptionsSelector";
import BlockPaddingCustomizer from "../setting customizers/BlockPaddingCustomizer";
import HideOnMobileAndDesktopButtons from "../setting customizers/HideOnMobileAndDesktopButtons";
import { FONTS, FONT_WEIGHTS } from "@/data/options";
import { HeadingElement } from "@/types/EmailEditorContext.types";
import InputWithSideLabel from "../setting customizers/InputWithSideLabel";
import OptionToggle from "../setting customizers/OptionToggle";
import RichTextEditor from "../setting customizers/RichTextEditor";

type SidebarHeadingSettingsProps = {
  id: string;
  settings: HeadingElement["settings"];
};

function SidebarHeadingSettings({ id, settings }: SidebarHeadingSettingsProps) {
  return (
    <>
      <RichTextEditor id={id} state={settings.content} title="content" />
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

export default React.memo(SidebarHeadingSettings);
