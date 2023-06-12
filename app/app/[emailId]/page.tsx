"use client";
import EmailContent from "@/components/backend/EmailContent";
import EditEmailSidebar from "@/components/backend/EditEmailSidebar";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { database } from "@/appwrite/client_init";
import { useRouter } from "next/navigation";
import LoadingAndErrorManager from "@/components/LoadingAndErrorManager";
import WebFont from "webfontloader";

function EditEmail({ params }: { params: { emailId: string } }) {
  const updateEmailEditor = useUpdateEmailEditor();
  const router = useRouter();

  WebFont.load({
    google: {
      families: ["Inter", "Roboto", "Lato"],
    },
  });

  async function fetchEmailContent() {
    try {
      const emailContent = await database.getDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID as string,
        process.env.NEXT_PUBLIC_COLLECTION_ID as string,
        params.emailId
      );
      updateEmailEditor({
        type: ACTIONS.LOAD_EMAIL_FROM_SERVER,
        payload: {
          ...JSON.parse(emailContent.content),
          id: emailContent.$id,
          selectedElement: null,
          activeSidebarTab: "elements",
        },
      });
    } catch (error) {
      setTimeout(() => router.push("/app"), 3000);
      throw Error("404: Email not found");
    }
  }

  function onDragEnd(result: DropResult) {
    const source = result.source?.droppableId;
    const destination = result.destination?.droppableId;
    const draggableId = result?.draggableId;

    //If element is dropped outside of droppable area
    if (!destination) {
      return;
    }

    //If element is dragged in the content area
    if (destination === "email-content" && source === "sidebar") {
      updateEmailEditor({
        type: ACTIONS.ADD_ELEMENT,
        payload: result,
      });
    }

    //If element is dragged in any column of a section
    else if (destination?.includes("column") && source === "sidebar") {
      updateEmailEditor({
        type: ACTIONS.ADD_ELEMENT_IN_COLUMN,
        payload: result,
      });
    }

    //If section is moved inside the content area
    else if (
      source === "email-content" &&
      destination === "email-content" &&
      draggableId.includes("section")
    ) {
      updateEmailEditor({
        type: ACTIONS.MOVE_SECTION_ELEMENT,
        payload: result,
      });
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <LoadingAndErrorManager
        onLoad={fetchEmailContent}
        errorMessage="Redirecting to the dashboard..."
      >
        <div className="edit-email-wrapper">
          <EmailContent />
          <EditEmailSidebar />
        </div>
      </LoadingAndErrorManager>
    </DragDropContext>
  );
}

export default EditEmail;
