"use client";
import ErrorBoundary from "@/components/ErrorBoundary";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import EmptyColumn from "../EmptyColumn";

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
            {(children as any[])?.length ? children : <EmptyColumn />}
          </div>
        )}
      </Droppable>
    </ErrorBoundary>
  );
}

export default Column;
