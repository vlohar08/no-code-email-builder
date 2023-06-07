"use client";
import Button from "@/components/Button";
import EmailDisplayCard from "@/components/backend/EmailDisplayCard";
import { useSession } from "@/context/SessionProvider";
import { IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import NoEmailsFoundSvg from "@/assets/illustrations/no-emails-found.svg";
import toast from "react-hot-toast";
import { database } from "@/appwrite/client_init";
import { ID } from "appwrite";
import { defaultValues } from "@/context/EmailEditorContextProvider";
import { useRouter } from "next/navigation";

function App() {
  const { session } = useSession();
  const router = useRouter();
  const [emails, setEmails] = useState<any[]>([]);

  function fetchEmails() {
    const fetchPromise = database.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_COLLECTION_ID as string
    );
    toast.promise(fetchPromise, {
      loading: "Fetching new emails",
      success: (res) => {
        setEmails(res.documents);
        return "Fetching all your emails";
      },
      error: (err) => {
        console.log(err);
        return err.message;
      },
    });
  }

  async function handleCreateNewEmail() {
    const newEmail = database.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_COLLECTION_ID as string,
      ID.unique(),
      { title: "Email", content: JSON.stringify(defaultValues) }
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

  useEffect(() => {
    if (session) {
      fetchEmails();
    }
  }, [session]);

  return (
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
      <div className="email-cards">
        {emails.length ? (
          emails.map((email) => (
            <EmailDisplayCard key={email.id} data={email} />
          ))
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
    </div>
  );
}

export default App;
