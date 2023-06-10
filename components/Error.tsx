import { IconCircleX } from "@tabler/icons-react";
import React from "react";

type ErrorProps = {
  error: string;
  message?: string;
};

function Error({ error, message }: ErrorProps) {
  return (
    <div className="error-wrapper">
      <div>
        <IconCircleX size={50} />
        <h2>{error}</h2>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Error;
