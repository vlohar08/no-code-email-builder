"use client";
import { useEmailEditor } from "@/context/EmailEditorContextProvider";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import RenderEmailContent from "./RenderEmailContent";
import ErrorBoundary from "../ErrorBoundary";
import EmptyColumn from "./EmptyColumn";

function EmailContent() {
  const { settings, content } = useEmailEditor();
  return (
    <ErrorBoundary>
      <Droppable droppableId="email-content">
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
              {content.length ? (
                <RenderEmailContent settings={settings} content={content} />
              ) : (
                <div
                  className="column-element"
                  style={{
                    maxWidth: settings.contentAreaWidth,
                    margin:
                      settings.contentAreaAlignment === "center"
                        ? "0 auto"
                        : "",
                  }}
                >
                  <EmptyColumn />
                </div>
              )}
            </div>
          </div>
        )}
      </Droppable>
    </ErrorBoundary>
  );
}

export default EmailContent;
