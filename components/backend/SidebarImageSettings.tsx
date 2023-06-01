import React from "react";
import RangeSlider from "./RangeSlider";
import ImageWidthEditor from "./ImageWidthEditor";
import ImageAlignOptionsSelector from "./ImageAlignOptionsSelector";
import InputWithSideLabel from "./InputWithSideLabel";

function SidebarImageSettings() {
  return (
    <>
      <ImageWidthEditor />
      <ImageAlignOptionsSelector />
      <div data-apply-default-styles="false">
        <InputWithSideLabel title="Url" state={""} setState={() => 1} />
      </div>
      <div data-apply-default-styles="false">
        <InputWithSideLabel title="Alt" state={""} setState={() => 1} />
      </div>
    </>
  );
}

export default SidebarImageSettings;
