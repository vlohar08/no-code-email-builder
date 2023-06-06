import { VideoElement } from "@/types/EmailEditorContext.types";
import React from "react";
import InputWithSideLabel from "../setting customizers/InputWithSideLabel";
import BlockPaddingCustomizer from "../setting customizers/BlockPaddingCustomizer";
import HideOnMobileAndDesktopButtons from "../setting customizers/HideOnMobileAndDesktopButtons";

type SidebarVideoSettingsProps = {
  id: string;
  settings: VideoElement["settings"];
};

function SidebarVideoSettings({ id, settings }: SidebarVideoSettingsProps) {
  return (
    <div>
      <div className="default-padding default-border">
        <InputWithSideLabel id={id} title="Src" state={settings.src} />
      </div>
      <div className="default-padding default-border">
        <InputWithSideLabel id={id} title="Title" state={settings.title} />
      </div>
      <h6 className="section-separator">Block Settings</h6>
      <BlockPaddingCustomizer id={id} state={settings.block.padding} />
      <HideOnMobileAndDesktopButtons id={id} state={settings.block?.hideOn} />
    </div>
  );
}

export default React.memo(SidebarVideoSettings);
