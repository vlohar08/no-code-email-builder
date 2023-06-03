import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import { SpacerElement } from "@/types/EmailEditorContext.types";

function Spacer({ id, settings, index }: SpacerElement) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleClick() {
    updateEmailEditor({
      type: ACTIONS.CHANGE_SIDEBAR_SETTINGS_TAB_CONTENT,
      payload: { element: "spacer", id, settings },
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
            padding:
              typeof settings.block.padding === "number"
                ? settings.block.padding
                : `${settings.block.padding.paddingTop}px ${settings.block.padding.paddingRight}px ${settings.block.padding.paddingBottom}px ${settings.block.padding.paddingLeft}px`,
          }}
        >
          <div
            style={{
              height: settings.height,
            }}
          ></div>
        </div>
      )}
    </Draggable>
  );
}

export default Spacer;
