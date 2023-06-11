"use client";
import Button from "@/components/Button";
import EmailDisplayCard from "@/components/backend/EmailDisplayCard";
import { IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import NoEmailsFoundSvg from "@/assets/illustrations/no-emails-found.svg";
import toast from "react-hot-toast";
import { database } from "@/appwrite/client_init";
import { ID } from "appwrite";
import { defaultValues } from "@/context/EmailEditorContextProvider";
import { useRouter } from "next/navigation";
import LoadingAndErrorManager from "@/components/LoadingAndErrorManager";
import ExportEmailPopup from "@/components/ExportEmailPopup";
import { nanoid } from "nanoid";

function App() {
  const [emails, setEmails] = useState<any[]>([]);
  const [exportCode, setExportCode] = useState("");
  const [isPopupEnabled, setIsPopupEnabled] = useState(false);
  const router = useRouter();

  async function fetchEmails() {
    try {
      const emails = await database.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID as string,
        process.env.NEXT_PUBLIC_COLLECTION_ID as string
      );
      setEmails(emails.documents);
    } catch (error) {
      toast.error("Error in fetching your emails. Please reload!");
    }
  }

  function handleCreateNewEmail() {
    const newEmail = database.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_COLLECTION_ID as string,
      ID.unique(),
      {
        title: "Email-" + nanoid(5),
        content: JSON.stringify(defaultValues),
      }
    );
    toast.promise(newEmail, {
      loading: "Creating a new email",
      success: (res) => {
        setTimeout(() => router.push("/app/" + res.$id), 2000);
        return "Email Created! Redirecting to the edit page";
      },
      error: (err) => {
        return err.message;
      },
    });
  }

  function handleDeleteEmail(id: string) {
    const deleteEmailPromise = database.deleteDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_COLLECTION_ID as string,
      id
    );
    toast.promise(deleteEmailPromise, {
      loading: "Deleting the selected email",
      success: () => {
        const newEmails = emails.filter((email) => email.$id !== id);
        setEmails(newEmails);
        return "Email Deleted";
      },
      error: "The selected email can't be deleted",
    });
  }

  return (
    <LoadingAndErrorManager onLoad={fetchEmails}>
      <div className="app-wrapper">
        <Button
          style={{
            width: "fit-content",
            marginLeft: "auto",
            marginBottom: 15,
            color: "white",
            backgroundColor: "rgb(var(--primary-color))",
          }}
          leftIcon={<IconPlus />}
          onClick={handleCreateNewEmail}
        >
          Create new email
        </Button>
        {emails.length ? (
          <div className="email-cards">
            {emails.map((email) => (
              <EmailDisplayCard
                key={email.id}
                data={email}
                onDelete={handleDeleteEmail}
                setExportCode={setExportCode}
                setIsPopupEnabled={setIsPopupEnabled}
              />
            ))}
            {isPopupEnabled && (
              <ExportEmailPopup
                html={exportCode}
                setIsPopupEnabled={setIsPopupEnabled}
              />
            )}
          </div>
        ) : (
          <div className="no-emails-found-wrapper">
            <Image src={NoEmailsFoundSvg} alt="No Emails Available" />
            <a href="https://storyset.com/work">
              Work illustrations by Storyset
            </a>
            <h2>No Emails Available</h2>
          </div>
        )}
      </div>
    </LoadingAndErrorManager>
  );
}

export default App;
