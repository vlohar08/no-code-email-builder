"use client";
import { GlobalSettings } from "@/types/EmailEditorContext.types";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  settings: GlobalSettings;
  index: number;
}

function Section({ id, children, settings, index }: SectionProps) {
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
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <section
          id={id}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="section-element"
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
        >
          <div
            style={{
              maxWidth: settings.contentAreaWidth,
              margin:
                settings.contentAreaAlignment === "center" ? "0 auto" : "",
              background: settings.contentAreaBackgroundColor,
            }}
          >
            {children}
          </div>
        </section>
      )}
    </Draggable>
  );
}

export default Section;
