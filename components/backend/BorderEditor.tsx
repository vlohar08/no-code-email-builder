import { Border } from "@/types/EmailEditorContext.types";
import React from "react";
import InputWithPlusMinusButtons from "./InputWithPlusMinusButtons";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import { cloneDeep } from "lodash";

type BorderEditorProps = {
  id: string;
  state: Border;
};

function BorderEditor({ id, state }: BorderEditorProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleChange(title: string, value: string | number) {
    updateEmailEditor({
      type: ACTIONS.UPDATE_ELEMENT_NESTED_SETTINGS,
      payload: { titles: ["border", title], value },
    });
  }
  return (
    <div className="border-editor-wrapper default-padding default-border">
      <p>Border</p>
      <div>
        <select
          name="borderWidth"
          value={state.borderType}
          onChange={(e) => handleChange("borderType", e.target.value)}
        >
          <option value="solid">Solid</option>
          <option value="dashed">Dashed</option>
          <option value="dotted">Dotted</option>
        </select>
        <div className="border-width-input-wrapper">
          <IconMinus
            size={20}
            onClick={() => handleChange("borderWidth", state.borderWidth - 1)}
          />
          <input type="number" value={state.borderWidth} readOnly />
          <IconPlus
            size={20}
            onClick={() => handleChange("borderWidth", state.borderWidth + 1)}
          />
        </div>
        <div className="border-width-color-wrapper">
          <input
            type="color"
            value={state.borderColor}
            onChange={(e) => handleChange("borderColor", e.target.value)}
          />
          <p>{state.borderColor}</p>
        </div>
      </div>
    </div>
  );
}

export default BorderEditor;
