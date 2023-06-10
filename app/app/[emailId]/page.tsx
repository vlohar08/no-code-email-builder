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
    const destination = result.destination?.droppableId;
    //If element is dragged in the content area
    if (destination === "email-content") {
      updateEmailEditor({
        type: ACTIONS.ADD_ELEMENT,
        payload: result,
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
