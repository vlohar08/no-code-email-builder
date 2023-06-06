"use client";
import ErrorBoundary from "@/components/ErrorBoundary";
import React from "react";
import { Droppable } from "react-beautiful-dnd";

type ColumnProps = {
  id: string;
  children: React.ReactNode;
};

function Column({ id, children }: ColumnProps) {
  return (
    <ErrorBoundary>
      <Droppable droppableId={id}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="column-element"
          >
            {children}
          </div>
        )}
      </Droppable>
    </ErrorBoundary>
  );
}

export default Column;
