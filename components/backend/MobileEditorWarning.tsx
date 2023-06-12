import React from "react";
import Image from "next/image";
import ComputerImg from "@/assets/illustrations/computer.svg";
function MobileEditorWarning() {
  return (
    <div className="mobile-editor-warning-wrapper">
      <Image src={ComputerImg} alt="Computer" />
      <a href="https://www.freepik.com/free-vector/desktop-computer-concept-illustration_40468605.htm#query=computer&position=5&from_view=search&track=sph">
        Image by storyset
      </a>{" "}
      on Freepik
      <h3>Please use desktop for editing emails</h3>
    </div>
  );
}

export default MobileEditorWarning;
