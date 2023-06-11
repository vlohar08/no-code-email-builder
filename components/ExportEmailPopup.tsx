import { IconX } from "@tabler/icons-react";
import React, { Dispatch, SetStateAction } from "react";
import Button from "./Button";
import { toast } from "react-hot-toast";

type ExportEmailPopupPros = {
  html: string;
  setIsPopupEnabled: Dispatch<SetStateAction<boolean>>;
};

function ExportEmailPopup({ html, setIsPopupEnabled }: ExportEmailPopupPros) {
  function handleCopy() {
    navigator.clipboard.writeText(html);
    toast.success("The HTML was copied");
  }

  function handleDownload() {
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "email.html";
    downloadLink.click();

    URL.revokeObjectURL(url);
  }

  return (
    <aside className="export-email-popup-wrapper">
      <div>
        <button
          className="close-button"
          onClick={() => setIsPopupEnabled(false)}
        >
          <IconX />
        </button>
        <div className="export-email-popup-content">
          <div className="code-wrapper">
            <code>{html}</code>
          </div>
          <div className="export-options">
            <Button
              style={{
                backgroundColor: "rgb(var(--primary-color))",
                color: "white",
              }}
              onClick={handleCopy}
            >
              Copy HTML
            </Button>
            <Button
              style={{
                backgroundColor: "white",
                border: "1px solid rgb(var(--primary-color))",
              }}
              onClick={handleDownload}
            >
              Downlaod HTML
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ExportEmailPopup;
