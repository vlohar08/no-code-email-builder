import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import { DividerElement } from "@/types/EmailEditorContext.types";

function Divider({ id, settings, index }: DividerElement) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleClick() {
    updateEmailEditor({
      type: ACTIONS.CHANGE_SIDEBAR_SETTINGS_TAB_CONTENT,
      payload: { element: "divider", id, settings },
    });
  }
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          onClick={handleClick}
          className={`content-element hide-on-${settings.block?.hideOn}`}
          style={{
            display: "flex",
            justifyContent: settings.align,
            padding:
              typeof settings.block.padding === "number"
                ? settings.block.padding
                : `${settings.block.padding.paddingTop}px ${settings.block.padding.paddingRight}px ${settings.block.padding.paddingBottom}px ${settings.block.padding.paddingLeft}px`,
          }}
        >
          <div
            style={{
              width:
                typeof settings.width === "number"
                  ? settings.width + "%"
                  : settings.width,
              height: "1px",
              border: `${settings.border.borderWidth}px ${settings.border.borderType} ${settings.border.borderColor}`,
            }}
          ></div>
        </div>
      )}
    </Draggable>
  );
}

export default Divider;
