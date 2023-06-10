"use client";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ListElement } from "@/types/EmailEditorContext.types";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import ElementsHoverOverlay from "../ElementsHoverOverlay";
import { startCase } from "lodash";

interface ListProps extends ListElement {
  onClick: (element: any) => void;
}

function List({ id, settings, index, onClick }: ListProps) {
  const ListTag = `<${settings.listType} start="${settings.startListFrom}"
  style="
  font-family:${settings.fontFamily};
  font-weight:${startCase(settings.fontFamily)};
  font-size: ${settings.fontSize}px;
  color:${settings.textColor};
  text-align: ${settings.textAlign};
  line-height: ${settings.lineHeight};
  letter-spacing: ${settings.letterSpacing}px;
  list-style-type: ${settings.listStyleType}
  ">${settings.lists.map((list) => `<li>${list}</li>`)}</${settings.listType}>`;

  return (
    <ErrorBoundary>
      <Draggable draggableId={id} index={index} isDragDisabled>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            onClick={onClick}
            className={`content-element hide-on-${settings.block?.hideOn}`}
            style={{
              padding:
                typeof settings.block.padding === "number"
                  ? settings.block.padding
                  : `${settings.block.padding.paddingTop}px ${settings.block.padding.paddingRight}px ${settings.block.padding.paddingBottom}px ${settings.block.padding.paddingLeft}px`,
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: ListTag }}></div>
            <ElementsHoverOverlay provided={provided} id={id} />
          </div>
        )}
      </Draggable>
    </ErrorBoundary>
  );
}

export default List;
