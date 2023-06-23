"use client";
import { useEmailEditor } from "@/context/EmailEditorContextProvider";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import RenderEmailContent from "./RenderEmailContent";
import ErrorBoundary from "../ErrorBoundary";

type EmailContentProps = {
  isDropDisabled: boolean;
};

function EmailContent({ isDropDisabled }: EmailContentProps) {
  const { settings, content } = useEmailEditor();
  return (
    <ErrorBoundary>
      <Droppable droppableId="email-content" isDropDisabled={isDropDisabled}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="email-editor"
            style={{
              backgroundColor: settings.backgroundColor,
              ...(settings.showBackgroundImage && {
                backgroundImage: `url(${settings.backgroundImageUrl})`,
                backgroundRepeat: settings.shouldBackgroundImageRepeat
                  ? "repeat"
                  : "no-repeat",
                backgroundPosition: settings.isBackgroundImageCentered
                  ? "center"
                  : "",
              }),
              outline: snapshot.isDraggingOver
                ? "2px solid rgb(var(--primary-color))"
                : "none",
            }}
          >
            <div className="email-editor-content-wrapper">
              <RenderEmailContent settings={settings} content={content} />
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </ErrorBoundary>
  );
}

export default EmailContent;
