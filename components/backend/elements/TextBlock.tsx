"use client";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { TextBlockElement } from "@/types/EmailEditorContext.types";
import ElementsHoverOverlay from "../ElementsHoverOverlay";

interface TextBlockProps extends TextBlockElement {
  onClick: (element: any) => void;
}

function TextBlock({ id, settings, index, onClick }: TextBlockProps) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          onClick={onClick}
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
              fontFamily: settings.fontFamily,
              fontWeight: settings.fontWeight,
              fontSize: settings.fontSize,
              color: settings.textColor,
              textAlign: settings.textAlign,
              lineHeight: settings.lineHeight,
              letterSpacing: settings.letterSpacing,
            }}
            dangerouslySetInnerHTML={{ __html: settings.content }}
          />
          <ElementsHoverOverlay provided={provided} id={id} />
        </div>
      )}
    </Draggable>
  );
}

export default TextBlock;
