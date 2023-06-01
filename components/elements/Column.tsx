import React from "react";
import { Droppable } from "react-beautiful-dnd";

type ColumnProps = {
  id: string;
  children: React.ReactNode;
};

function Column({ id, children }: ColumnProps) {
  return (
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
  );
}

export default Column;
