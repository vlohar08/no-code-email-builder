"use client";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { DividerElement } from "@/types/EmailEditorContext.types";
import ErrorBoundary from "@/components/ErrorBoundary";
import ElementsHoverOverlay from "../ElementsHoverOverlay";

interface DividerProps extends DividerElement {
  onClick: (element: any) => void;
}

function Divider({ id, settings, index, onClick }: DividerProps) {
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
            <ElementsHoverOverlay provided={provided} id={id} />
          </div>
        )}
      </Draggable>
    </ErrorBoundary>
  );
}

export default Divider;
