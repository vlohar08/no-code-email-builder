import { SocialElement } from "@/types/EmailEditorContext.types";
import React from "react";
import {
  useUpdateEmailEditor,
  ACTIONS,
} from "@/context/EmailEditorContextProvider";
import SocialInfoEditor from "../setting customizers/SocialInfoEditor";
import BlockPaddingCustomizer from "../setting customizers/BlockPaddingCustomizer";
import HideOnMobileAndDesktopButtons from "../setting customizers/HideOnMobileAndDesktopButtons";
import AlignOptionsSelector from "../setting customizers/AlignOptionsSelector";
import OptionsSelector from "../setting customizers/OptionsSelector";
import ColorPicker from "../setting customizers/ColorPicker";
import InputWithPlusMinusButtons from "../setting customizers/InputWithPlusMinusButtons";

type SidebarSocialSettingsProps = {
  id: string;
  settings: SocialElement["settings"];
};

function SidebarSocialSettings({ id, settings }: SidebarSocialSettingsProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleChange(titles: string[], value: string | boolean) {
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_NESTED_SETTINGS,
      payload: {
        titles,
        id,
        value,
      },
    });
  }

  return (
    <>
      <SocialInfoEditor
        id={id}
        title="Facebook"
        isEnabled={settings.facebook.isEnabled}
        url={settings.facebook.url}
        onChange={handleChange}
      />
      <SocialInfoEditor
        id={id}
        title="Instagram"
        isEnabled={settings.instagram.isEnabled}
        url={settings.instagram.url}
        onChange={handleChange}
      />
      <SocialInfoEditor
        id={id}
        title="Twitter"
        isEnabled={settings.twitter.isEnabled}
        url={settings.twitter.url}
        onChange={handleChange}
      />
      <SocialInfoEditor
        id={id}
        title="Linkedin"
        isEnabled={settings.linkedin.isEnabled}
        url={settings.linkedin.url}
        onChange={handleChange}
      />
      <AlignOptionsSelector id={id} state={settings.align} />
      <ColorPicker id={id} title="Icon color" state={settings.iconColor} />
      <ColorPicker
        id={id}
        title="Icon background color"
        state={settings.iconBackgroundColor}
      />
      <InputWithPlusMinusButtons
        min={0}
        max={100}
        id={id}
        title="Icon border radius"
        state={settings.iconBorderRadius}
      />
      <InputWithPlusMinusButtons
        min={1}
        max={100}
        id={id}
        title="Icon size"
        state={settings.iconSize}
      />
      <OptionsSelector
        id={id}
        state={settings.iconSpacing}
        title="Icon spacing"
        options={[5, 10, 15, 20]}
      />
      <h6 className="section-separator">Block Settings</h6>
      <BlockPaddingCustomizer id={id} state={settings.block.padding} />

      <HideOnMobileAndDesktopButtons id={id} state={settings.block?.hideOn} />
    </>
  );
}

export default React.memo(SidebarSocialSettings);
