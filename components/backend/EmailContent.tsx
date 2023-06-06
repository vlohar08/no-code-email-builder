"use client";
import { useEmailEditor } from "@/context/EmailEditorContextProvider";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import RenderEmailContent from "./RenderEmailContent";
import ErrorBoundary from "../ErrorBoundary";

function EmailContent() {
  const { settings, content } = useEmailEditor();
  return (
    <ErrorBoundary>
      <Droppable droppableId="email-content">
        {(provided) => (
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
            }}
          >
            <div className="email-editor-content-wrapper">
              <RenderEmailContent settings={settings} content={content} />
            </div>
          </div>
        )}
      </Droppable>
    </ErrorBoundary>
  );
}

export default EmailContent;
