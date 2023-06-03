import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { TextBlockElement } from "@/types/EmailEditorContext.types";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";

function TextBlock({ id, settings, content, index }: TextBlockElement) {
  const updateEmailEditor = useUpdateEmailEditor();

  function handleClick() {
    updateEmailEditor({
      type: ACTIONS.CHANGE_SIDEBAR_SETTINGS_TAB_CONTENT,
      payload: { element: "textBlock", id, settings },
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
          <p
            style={{
              fontFamily: settings.fontFamily,
              fontWeight: settings.fontWeight,
              fontSize: settings.fontSize,
              color: settings.textColor,
              textAlign: settings.textAlign,
              lineHeight: settings.lineHeight,
              letterSpacing: settings.letterSpacing,
            }}
          >
            {content}
          </p>
        </div>
      )}
    </Draggable>
  );
}

export default TextBlock;
