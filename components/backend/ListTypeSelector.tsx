"use client";
import { IconList, IconListNumbers } from "@tabler/icons-react";
import React from "react";

function ListTypeSelector() {
  return (
    <div className="list-type-selector-wrapper default-padding default-two-grid default-border">
      <p>List type</p>
      <div>
        <button className="svg-option">
          <IconList data-active="true" />
        </button>
        <button className="svg-option">
          <IconListNumbers />
        </button>
      </div>
    </div>
  );
}

export default ListTypeSelector;
