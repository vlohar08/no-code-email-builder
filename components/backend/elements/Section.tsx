"use client";
import ErrorBoundary from "@/components/ErrorBoundary";
import {
  GlobalSettings,
  SectionElement,
} from "@/types/EmailEditorContext.types";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import ElementsHoverOverlay from "../ElementsHoverOverlay";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  settings: SectionElement["settings"];
  globalSettings: GlobalSettings;
  index: number;
  onClick: (element: any) => void;
}

function Section({
  id,
  children,
  globalSettings,
  settings,
  index,
  onClick,
}: SectionProps) {
  return (
    <ErrorBoundary>
      <Draggable draggableId={id} index={index} isDragDisabled>
        {(provided) => (
          <section
            id={id}
            className="section-element"
            onClick={onClick}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
          >
            <div
              style={{
                maxWidth: globalSettings.contentAreaWidth,
                backgroundColor: settings.contentAreaBackgroundColor,
                ...(settings.showBackgroundImage && {
                  backgroundImage: `url(${settings.backgroundImageUrl})`,
                  backgroundRepeat: settings.shouldBackgroundImageRepeat
                    ? "repeat"
                    : "no-repeat",
                  backgroundPosition: settings.isBackgroundImageCentered
                    ? "center"
                    : "",
                }),
                margin:
                  globalSettings.contentAreaAlignment === "center"
                    ? "0 auto"
                    : "",
                border: `${settings.contentAreaBorder.borderWidth}px ${settings.contentAreaBorder.borderType} ${settings.contentAreaBorder.borderColor}`,
              }}
            >
              {children}
            </div>
            <ElementsHoverOverlay provided={provided} id={id} />
          </section>
        )}
      </Draggable>
    </ErrorBoundary>
  );
}

export default Section;
