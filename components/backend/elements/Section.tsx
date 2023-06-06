"use client";
import ErrorBoundary from "@/components/ErrorBoundary";
import {
  GlobalSettings,
  SectionElement,
} from "@/types/EmailEditorContext.types";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

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
  let target: null | HTMLElement = null;
  function handleMouseEnter(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    target = e.target as HTMLElement;
    if (target?.nodeName === "SECTION") {
      target.classList.add("element-hover");
    }
  }
  function handleMouseLeave(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (target?.nodeName === "SECTION") {
      target.classList.remove("element-hover");
    }
  }

  return (
    <ErrorBoundary>
      <Draggable draggableId={id} index={index} isDragDisabled>
        {(provided) => (
          <section
            id={id}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            className="section-element"
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseLeave}
            onClick={onClick}
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
          </section>
        )}
      </Draggable>
    </ErrorBoundary>
  );
}

export default Section;
