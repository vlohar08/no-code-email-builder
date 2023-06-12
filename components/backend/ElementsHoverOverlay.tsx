"use client";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import { IconDragDrop, IconTrash } from "@tabler/icons-react";
import React from "react";
import { DraggableProvided } from "react-beautiful-dnd";

type ElementsHoverOverlayProps = {
  id: string;
  provided: DraggableProvided;
};

function ElementsHoverOverlay({ id, provided }: ElementsHoverOverlayProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleDelete() {
    updateEmailEditor({
      type: ACTIONS.DELETE_ELEMENT,
      payload: id,
    });
  }

  return (
    <div className="elements-hover-overlay-wrapper">
      <div className="element-options">
        <div {...provided.dragHandleProps}>
          <IconDragDrop />
        </div>
        <IconTrash onClick={handleDelete} />
      </div>
    </div>
  );
}

export default ElementsHoverOverlay;
