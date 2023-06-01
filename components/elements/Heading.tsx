"use client";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { HeadingElement } from "@/types/EmailEditorContext.types";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";

function Heading({ id, content, settings, index }: HeadingElement) {
  let HeadingTag = `<${settings.title} 
  style="
  font-family:${settings.fontFamily};
  font-weight:${settings.fontWeight};
  font-size: ${settings.fontSize}px;
  color:${settings.textColor};
  text-align: ${settings.textAlign};
  line-height: ${settings.lineHeight};
  letter-spacing: ${settings.letterSpacing}px;
  ">${content}</${settings.title}>`;

  const updateEmailEditor = useUpdateEmailEditor();

  function handleClick() {
    updateEmailEditor({
      type: ACTIONS.CHANGE_SIDEBAR_SETTINGS_TAB_CONTENT,
      payload: { element: "heading", id, settings },
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
          dangerouslySetInnerHTML={{ __html: HeadingTag }}
        ></div>
      )}
    </Draggable>
  );
}

export default Heading;
