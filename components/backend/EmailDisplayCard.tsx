import { IconClock, IconFileExport, IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import type Document from "appwrite";
import Button from "../Button";
import { database } from "@/appwrite/client_init";
import { toast } from "react-hot-toast";

type EmailDisplayCardProps = {
  data: Document.Models.Document;
};

function EmailDisplayCard({ data }: EmailDisplayCardProps) {
  const { image, title, $id, $updatedAt } = data;
  const router = useRouter();
  function handleEdit() {
    router.push("/app/" + $id);
  }

  function handleDeleteEmail() {
    const deleteEmailPromise = database.deleteDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_COLLECTION_ID as string,
      $id
    );
    toast.promise(deleteEmailPromise, {
      loading: "Deleting the selected email",
      success: "Email Deleted",
      error: "The selected email can't be deleted",
    });
  }

  return (
    <div className="email-display-card-wrapper">
      <div onClick={handleEdit}>
        <Image src={image} width={200} height={200} alt={title} />
        <h3>{title}</h3>
        <p>
          <IconClock stroke={1} size={20} />{" "}
          {new Intl.DateTimeFormat().format(new Date($updatedAt))}
        </p>
      </div>
      <div className="email-options">
        <Button leftIcon={<IconFileExport />}>Export</Button>
        <Button leftIcon={<IconTrash />} onClick={handleDeleteEmail}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default EmailDisplayCard;
