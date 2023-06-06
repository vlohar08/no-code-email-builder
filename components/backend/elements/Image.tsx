"use client";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ImageElement } from "@/types/EmailEditorContext.types";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

interface ImageProps extends ImageElement {
  onClick: (element: any) => void;
}

function Image({ id, settings, index, onClick }: ImageProps) {
  return (
    <ErrorBoundary>
      <Draggable draggableId={id} index={index} isDragDisabled>
        {(provided) => (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            className={`content-element hide-on-${settings.block?.hideOn}`}
            onClick={onClick}
            style={{
              padding:
                typeof settings.block.padding === "number"
                  ? settings.block.padding
                  : `${settings.block.padding.paddingTop}px ${settings.block.padding.paddingRight}px ${settings.block.padding.paddingBottom}px ${settings.block.padding.paddingLeft}px`,
            }}
          >
            <a href={settings.link}>
              <img
                style={{
                  width:
                    typeof settings.width === "number"
                      ? settings.width + "%"
                      : settings.width,
                  margin:
                    settings.align === "center"
                      ? "0 auto"
                      : settings.align === "left"
                      ? "0 auto 0 0"
                      : "0 0 0 auto",
                }}
                src={settings.src}
                alt={settings.alt}
              />
            </a>
          </div>
        )}
      </Draggable>
    </ErrorBoundary>
  );
}

export default Image;
