import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import { ButtonElement } from "@/types/EmailEditorContext.types";

function Button({ id, index, settings, content }: ButtonElement) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleClick() {
    updateEmailEditor({
      type: ACTIONS.CHANGE_SIDEBAR_SETTINGS_TAB_CONTENT,
      payload: { element: "button", id, settings },
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
          <a
            href={settings.url}
            style={{
              width:
                typeof settings.width === "number"
                  ? settings.width + "%"
                  : settings.width,
            }}
          >
            <button
              style={{
                width:
                  typeof settings.width === "number"
                    ? settings.width + "%"
                    : settings.width,
                color: settings.textColor,
                fontFamily: settings.fontFamily,
                fontSize: settings.fontSize,
                fontWeight: settings.fontWeight,
                backgroundColor: settings.backgroundColor,
                lineHeight: settings.lineHeight,
                letterSpacing: settings.letterSpacing,
                borderRadius: settings.borderRadius,
                padding:
                  typeof settings.padding === "number"
                    ? settings.padding
                    : `${settings.padding.paddingTop}px ${settings.padding.paddingRight}px ${settings.padding.paddingBottom}px ${settings.padding.paddingLeft}px`,
              }}
            >
              {content}
            </button>
          </a>
        </div>
      )}
    </Draggable>
  );
}

export default Button;
