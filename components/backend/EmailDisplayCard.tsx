import { IconClock, IconFileExport, IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";
import type Document from "appwrite";
import Button from "../Button";
import exportEmail from "@/utils/exportEmail";

type EmailDisplayCardProps = {
  data: Document.Models.Document;
  onDelete: (id: string) => void;
  setExportCode: Dispatch<SetStateAction<string>>;
  setIsPopupEnabled: Dispatch<SetStateAction<boolean>>;
};

function EmailDisplayCard({
  data,
  onDelete,
  setExportCode,
  setIsPopupEnabled,
}: EmailDisplayCardProps) {
  const { image, title, $id, $updatedAt } = data;
  const router = useRouter();
  function handleEdit() {
    router.push("/app/" + $id);
  }

  function handleExport() {
    setIsPopupEnabled(true);
    setExportCode(exportEmail(JSON.parse(data.content)));
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
        <Button
          style={{
            backgroundColor: "rgb(var(--primary-color))",
            color: "white",
          }}
          leftIcon={<IconFileExport />}
          onClick={handleExport}
        >
          Export
        </Button>
        <Button
          style={{
            backgroundColor: "rgba(255,0,0,0.7)",
            color: "white",
          }}
          leftIcon={<IconTrash />}
          onClick={() => onDelete($id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default EmailDisplayCard;
