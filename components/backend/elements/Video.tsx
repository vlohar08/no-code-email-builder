"use client";
import ErrorBoundary from "@/components/ErrorBoundary";
import { VideoElement } from "@/types/EmailEditorContext.types";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import ElementsHoverOverlay from "../ElementsHoverOverlay";

interface VideoProps extends VideoElement {
  onClick: (element: any) => void;
}

function Video({ id, index, settings, onClick }: VideoProps) {
  return (
    <ErrorBoundary>
      <Draggable draggableId={id} index={index} isDragDisabled>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            className={`content-element hide-on-${settings.block?.hideOn}`}
            onClick={onClick}
            style={{
              position: "relative",
              padding:
                typeof settings.block.padding === "number"
                  ? settings.block.padding
                  : `${settings.block.padding.paddingTop}px ${settings.block.padding.paddingRight}px ${settings.block.padding.paddingBottom}px ${settings.block.padding.paddingLeft}px`,
            }}
          >
            <iframe
              title={settings.title}
              width="100%"
              height="auto"
              src={settings.src}
            ></iframe>
            <ElementsHoverOverlay provided={provided} id={id} />
          </div>
        )}
      </Draggable>
    </ErrorBoundary>
  );
}

export default Video;
