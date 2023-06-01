"use client";
import { useEmailEditor } from "@/context/EmailEditorContextProvider";
import React from "react";
import EmptyColumn from "./EmptyColumn";
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
              backgroundImage: settings.showBackgroundImage
                ? `url(${settings.backgroundImageUrl})`
                : "",
              backgroundRepeat:
                settings.showBackgroundImage &&
                settings.shouldBackgroundImageRepeat
                  ? "repeat"
                  : "no-repeat",
              backgroundPosition:
                settings.showBackgroundImage &&
                settings.isBackgroundImageCentered
                  ? "center"
                  : "",
            }}
          >
            <div
              className="email-editor-content-wrapper"
              style={{
                maxWidth: settings.contentAreaWidth,
                backgroundColor: settings.contentAreaBackgroundColor,
                margin:
                  settings.contentAreaAlignment === "center" ? "0 auto" : "",
              }}
            >
              <RenderEmailContent settings={settings} content={content} />
              <EmptyColumn />
            </div>
          </div>
        )}
      </Droppable>
    </ErrorBoundary>
  );
}

export default EmailContent;
