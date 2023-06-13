"use client";
import Button from "@/components/Button";
import EmailDisplayCard from "@/components/backend/EmailDisplayCard";
import { IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import NoEmailsFoundSvg from "@/assets/illustrations/no-emails-found.svg";
import toast from "react-hot-toast";
import { database, storage } from "@/appwrite/client_init";
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
        router.push("/app/" + res.$id);
        return "Email Created! Redirecting to the edit page";
      },
      error: (err) => {
        return err.message;
      },
    });
  }

  async function handleDeleteEmail(id: string, deleteEmailScreenshot: boolean) {
    const deleteToast = toast.loading("Deleting the selected email");
    try {
      if (deleteEmailScreenshot) {
        await storage.deleteFile(
          process.env.NEXT_PUBLIC_BUCKET_ID as string,
          id
        );
      }
      await database.deleteDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID as string,
        process.env.NEXT_PUBLIC_COLLECTION_ID as string,
        id
      );
      toast.dismiss(deleteToast);
      toast.success(() => {
        const newEmails = emails.filter((email) => email.$id !== id);
        setEmails(newEmails);
        return "Email Deleted";
      });
    } catch (error) {
      toast.dismiss(deleteToast);
      toast.error("The selected email can't be deleted");
    }
  }

  function handlePopup() {
    setIsPopupEnabled(false);
    setExportCode("");
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
              <ExportEmailPopup html={exportCode} onClose={handlePopup} />
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
