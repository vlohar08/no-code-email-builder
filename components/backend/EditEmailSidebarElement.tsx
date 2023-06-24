"use client";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import ErrorBoundary from "@/components/ErrorBoundary";
import { camelCase } from "lodash";
import Image from "next/image";

type EditEmailSidebarElementProps = {
  icon: string;
  title: string;
  index: number;
};

function EditEmailSidebarElement({
  title,
  index,
  icon,
}: EditEmailSidebarElementProps) {
  return (
    <ErrorBoundary>
      <div>
        <Draggable draggableId={camelCase(title)} index={index}>
          {(provided) => (
            <div
              className="sidebar-element"
              ref={provided.innerRef}
              {...provided.dragHandleProps}
              {...provided.draggableProps}
            >
              <Image src={icon} width={24} height={24} alt={title} />
              <h5>{title}</h5>
            </div>
          )}
        </Draggable>
      </div>
    </ErrorBoundary>
  );
}

export default React.memo(EditEmailSidebarElement);
