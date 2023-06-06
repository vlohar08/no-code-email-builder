"use client";
import dynamic from "next/dynamic";
const EmailContent = dynamic(
  () => import("@/components/backend/EmailContent"),
  {
    ssr: false,
  }
);
const EditEmailSidebar = dynamic(
  () => import("@/components/backend/EditEmailSidebar"),
  { ssr: false }
);
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function EditEmail() {
  const updateEmailEditor = useUpdateEmailEditor();

  function onDragEnd(result: DropResult) {
    const source = result.source?.droppableId;
    const draggedElement = result?.draggableId;
    const destination = result.destination?.droppableId;
    //If element is dragged in the content area
    if (destination === "email-content") {
      updateEmailEditor({
        type: ACTIONS.ADD_EMAIL_ELEMENT_WITH_SECTION,
        payload: draggedElement,
      });
    }
    //If element is dragged in any column of a section
    else if (destination?.includes("column")) {
      updateEmailEditor({
        type: ACTIONS.ADD_ELEMENT_IN_COLUMN,
        payload: result,
      });
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="edit-email-wrapper">
        <EmailContent />
        <EditEmailSidebar />
      </div>
    </DragDropContext>
  );
}

export default EditEmail;
