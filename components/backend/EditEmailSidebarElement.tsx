"use client";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import ErrorBoundary from "@/components/ErrorBoundary";

type EditEmailSidebarElementProps = {
  icon: React.ReactNode;
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
      <Draggable draggableId={title.toLowerCase()} index={index}>
        {(provided) => (
          <div
            className="sidebar-element"
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
          >
            {icon}
            <h5>{title}</h5>
          </div>
        )}
      </Draggable>
    </ErrorBoundary>
  );
}

export default EditEmailSidebarElement;
