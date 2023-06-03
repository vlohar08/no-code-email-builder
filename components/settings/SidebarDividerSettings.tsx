import React from "react";
import BlockPaddingCustomizer from "../backend/BlockPaddingCustomizer";
import HideOnMobileAndDesktopButtons from "../backend/HideOnMobileAndDesktopButtons";
import { DividerElement } from "@/types/EmailEditorContext.types";
import InputWithPlusMinusButtons from "../backend/InputWithPlusMinusButtons";
import AlignOptionsSelector from "../backend/AlignOptionsSelector";
import BorderEditor from "../backend/BorderEditor";
import ElementWidthEditor from "../backend/ElementWidthEditor";

type SidebarDividerSettingsProps = {
  id: string;
  settings: DividerElement["settings"];
};

function SidebarDividerSettings({ id, settings }: SidebarDividerSettingsProps) {
  return (
    <>
      <BorderEditor id={id} state={settings.border} />
      <ElementWidthEditor id={id} state={settings.width} />
      <AlignOptionsSelector id={id} state={settings.align} />
      <h6 className="section-separator">Block Settings</h6>
      <BlockPaddingCustomizer id={id} state={settings.block.padding} />
      <HideOnMobileAndDesktopButtons id={id} state={settings.block?.hideOn} />
    </>
  );
}

export default SidebarDividerSettings;
