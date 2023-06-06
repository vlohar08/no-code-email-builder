import React from "react";
import BlockPaddingCustomizer from "../setting customizers/BlockPaddingCustomizer";
import HideOnMobileAndDesktopButtons from "../setting customizers/HideOnMobileAndDesktopButtons";
import { DividerElement } from "@/types/EmailEditorContext.types";
import AlignOptionsSelector from "../setting customizers/AlignOptionsSelector";
import BorderEditor from "../setting customizers/BorderEditor";
import ElementWidthEditor from "../setting customizers/ElementWidthEditor";

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

export default React.memo(SidebarDividerSettings);
