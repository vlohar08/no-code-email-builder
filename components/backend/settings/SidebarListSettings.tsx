import React from "react";
import OptionsSelector from "../setting customizers/OptionsSelector";
import InputWithPlusMinusButtons from "../setting customizers/InputWithPlusMinusButtons";
import ColorPicker from "../setting customizers/ColorPicker";
import AlignOptionsSelector from "../setting customizers/TextAlignOptionsSelector";
import LineHeightOptionsSelector from "../setting customizers/LineHeightOptionsSelector";
import BlockPaddingCustomizer from "../setting customizers/BlockPaddingCustomizer";
import HideOnMobileAndDesktopButtons from "../setting customizers/HideOnMobileAndDesktopButtons";
import { FONTS, FONT_WEIGHTS } from "@/data/options";
import ListTypeSelector from "../setting customizers/ListTypeSelector";
import { ListElement } from "@/types/EmailEditorContext.types";
import InputWithSideLabel from "../setting customizers/InputWithSideLabel";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";

type SidebarHeadingSettingsProps = {
  id: string;
  settings: ListElement["settings"];
};

function SidebarListSettings({ id, settings }: SidebarHeadingSettingsProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleChange(index: number, value: string) {
    const updatedLists = settings.lists;
    updatedLists[index] = value;
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
      payload: { id, title: "lists", value: updatedLists },
    });
  }

  function handleAddNewList() {
    const updatedLists = settings.lists;
    updatedLists.push("I'm a list");
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_SETTINGS,
      payload: { id, title: "lists", value: updatedLists },
    });
  }

  return (
    <>
      <div className="default-border default-padding">
        {settings.lists.map((list, index) => (
          <InputWithSideLabel
            className="default-margin-bottom"
            key={list + index}
            id={id}
            state={list}
            title={`${index + 1}`}
            onChange={(value) => handleChange(index, value)}
          />
        ))}
        <button
          style={{ fontSize: 14, width: "100%", textAlign: "right" }}
          onClick={handleAddNewList}
        >
          Add New
        </button>
      </div>
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
        min={1}
        max={100}
        id={id}
        title="Font size"
        state={settings.fontSize}
      />
      <ColorPicker id={id} title="Text color" state={settings.textColor} />
      <AlignOptionsSelector id={id} state={settings.textAlign} />
      <LineHeightOptionsSelector id={id} state={settings.lineHeight} />
      <h6 className="section-separator">Block Settings</h6>
      <BlockPaddingCustomizer id={id} state={settings.block.padding} />
      <HideOnMobileAndDesktopButtons id={id} state={settings.block?.hideOn} />
    </>
  );
}

export default React.memo(SidebarListSettings);
