"use client";
import React from "react";
import OptionToggle from "./OptionToggle";

type ImageWidthEditorProps = {
  id: string;
};

function ImageWidthEditor({ id }: ImageWidthEditorProps) {
  return (
    <div className="image-width-editor-wrapper">
      <OptionToggle id={id} title="Auto width" state={true}>
        <div className="image-width-range-slider">
          <input
            type="range"
            min={0}
            max={100}
            value={100}
            onChange={() => 1}
          />
          <p>100%</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Full width on mobile</p>
        </div>
      </OptionToggle>
    </div>
  );
}

export default ImageWidthEditor;
