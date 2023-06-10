import { IconLoader2 } from "@tabler/icons-react";
import React from "react";

function Loading() {
  return (
    <div className="loading-wrapper">
      <div>
        <IconLoader2 size={40} />
        <h2>Loading...</h2>
      </div>
    </div>
  );
}

export default Loading;
