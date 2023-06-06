"use client";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { HeadingElement } from "@/types/EmailEditorContext.types";
import ErrorBoundary from "@/components/ErrorBoundary";

interface HeadingProps extends HeadingElement {
  onClick: (element: any) => void;
}

function Heading({ id, settings, index, onClick }: HeadingProps) {
  let HeadingTag = `<${settings.title} 
  style="
  font-family:${settings.fontFamily};
  font-weight:${settings.fontWeight};
  font-size: ${settings.fontSize}px;
  color:${settings.textColor};
  text-align: ${settings.textAlign};
  line-height: ${settings.lineHeight};
  letter-spacing: ${settings.letterSpacing}px;
  ">${settings.content}</${settings.title}>`;

  return (
    <ErrorBoundary>
      <Draggable draggableId={id} index={index} isDragDisabled>
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
            dangerouslySetInnerHTML={{ __html: HeadingTag }}
          ></div>
        )}
      </Draggable>
    </ErrorBoundary>
  );
}

export default Heading;
