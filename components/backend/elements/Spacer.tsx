"use client";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { SpacerElement } from "@/types/EmailEditorContext.types";
import ErrorBoundary from "@/components/ErrorBoundary";
import ElementsHoverOverlay from "../ElementsHoverOverlay";

interface SpacerProps extends SpacerElement {
  onClick: (element: any) => void;
}

function Spacer({ id, settings, index, onClick }: SpacerProps) {
  return (
    <ErrorBoundary>
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
                height: settings.height,
              }}
            ></div>
            <ElementsHoverOverlay provided={provided} id={id} />
          </div>
        )}
      </Draggable>
    </ErrorBoundary>
  );
}

export default Spacer;
