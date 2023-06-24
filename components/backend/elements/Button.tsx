"use client";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { ButtonElement } from "@/types/EmailEditorContext.types";
import ErrorBoundary from "@/components/ErrorBoundary";
import ElementsHoverOverlay from "../ElementsHoverOverlay";
import { startCase } from "lodash";

interface ButtonProps extends ButtonElement {
  onClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    element: any
  ) => void;
}

function Button({ id, index, settings, onClick }: ButtonProps) {
  return (
    <ErrorBoundary>
      <Draggable draggableId={id} index={index} isDragDisabled>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            onClick={(e) => onClick(e, { id, name: "button", settings })}
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
                  fontFamily: startCase(settings.fontFamily),
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
                {settings.text}
              </button>
            </a>
            <ElementsHoverOverlay provided={provided} id={id} />
          </div>
        )}
      </Draggable>
    </ErrorBoundary>
  );
}

export default React.memo(Button);
