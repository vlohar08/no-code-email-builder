"use client";
import { ListElement } from "@/types/EmailEditorContext.types";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";

function List({ id, settings, content, index }: ListElement) {
  const updateEmailEditor = useUpdateEmailEditor();
  const ListTag = `<${settings.listType} 
  style="
  font-family:${settings.fontFamily};
  font-weight:${settings.fontWeight};
  font-size: ${settings.fontSize}px;
  color:${settings.textColor};
  text-align: ${settings.textAlign};
  line-height: ${settings.lineHeight};
  letter-spacing: ${settings.letterSpacing}px;
  list-style-type: ${settings.listStyleType}
  ">${content}</${settings.listType}>`;

  function handleClick() {
    updateEmailEditor({
      type: ACTIONS.CHANGE_SIDEBAR_SETTINGS_TAB_CONTENT,
      payload: { element: "list", id, settings },
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
          dangerouslySetInnerHTML={{ __html: ListTag }}
        ></div>
      )}
    </Draggable>
  );
}

export default List;
