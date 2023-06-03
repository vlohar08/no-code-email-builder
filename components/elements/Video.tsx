import { VideoElement } from "@/types/EmailEditorContext.types";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";

function Video({ id, index, settings }: VideoElement) {
  const updateEmailEditor = useUpdateEmailEditor();

  function handleClick() {
    updateEmailEditor({
      type: ACTIONS.CHANGE_SIDEBAR_SETTINGS_TAB_CONTENT,
      payload: { element: "video", id, settings },
    });
  }
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className={`content-element hide-on-${settings.block?.hideOn}`}
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
          <div
            title="iframe-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "auto",
              zIndex: 1,
            }}
            onClick={handleClick}
          ></div>
        </div>
      )}
    </Draggable>
  );
}

export default Video;
