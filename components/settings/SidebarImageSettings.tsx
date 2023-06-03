import React from "react";
import ImageWidthEditor from "../backend/ImageWidthEditor";
import AlignOptionsSelector from "../backend/AlignOptionsSelector";
import InputWithSideLabel from "../backend/InputWithSideLabel";
import { ImageElement } from "@/types/EmailEditorContext.types";
import BlockPaddingCustomizer from "../backend/BlockPaddingCustomizer";
import HideOnMobileAndDesktopButtons from "../backend/HideOnMobileAndDesktopButtons";

type SidebarImageSettingsProps = {
  id: string;
  settings: ImageElement["settings"];
};

function SidebarImageSettings({ id, settings }: SidebarImageSettingsProps) {
  return (
    <>
      <ImageWidthEditor
        id={id}
        state={settings.width}
        fullWidthOnMobile={settings.fullWidthOnMobile}
      />
      <AlignOptionsSelector id={id} state={settings.align} />
      <div className="default-padding default-border">
        <InputWithSideLabel
          id={id}
          title="Src"
          state={settings.src}
          payloadTitle="src"
        />
      </div>
      <div className="default-padding default-border">
        <InputWithSideLabel
          id={id}
          title="Alt"
          state={settings.alt}
          payloadTitle="alt"
        />
      </div>
      <div className="default-padding default-border">
        <InputWithSideLabel
          id={id}
          title="Link"
          state={settings.link}
          payloadTitle="link"
        />
      </div>
      <h6 className="section-separator">Block Settings</h6>
      <BlockPaddingCustomizer id={id} state={settings.block.padding} />
      <HideOnMobileAndDesktopButtons id={id} state={settings.block?.hideOn} />
    </>
  );
}

export default SidebarImageSettings;
