import { IconClock, IconFileExport, IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import type Document from "appwrite";
import Button from "../Button";

type EmailDisplayCardProps = {
  data: Document.Models.Document;
  onDelete: (id: string) => void;
};

function EmailDisplayCard({ data, onDelete }: EmailDisplayCardProps) {
  const { image, title, $id, $updatedAt } = data;
  const router = useRouter();
  function handleEdit() {
    router.push("/app/" + $id);
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
        <Button leftIcon={<IconTrash />} onClick={() => onDelete($id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default EmailDisplayCard;
