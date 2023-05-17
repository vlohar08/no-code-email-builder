import { IconClock, IconEdit } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

type EmailDisplayCardProps = {
  image: string;
  title: string;
  lastUpdatedOn: string;
};

function EmailDisplayCard({
  image,
  title,
  lastUpdatedOn,
}: EmailDisplayCardProps) {
  return (
    <div className="email-display-card-wrapper">
      <Image src={image} width={200} height={200} alt={title} />
      <h3>{title}</h3>
      <p>
        <IconClock stroke={1} size={20} /> {lastUpdatedOn}
      </p>
      <div className="edit-overlay">
        <div>
          <IconEdit stroke={1} size={40} />
          <p>Edit</p>
        </div>
      </div>
    </div>
  );
}

export default EmailDisplayCard;
