"use client";
import MobileEditorWarning from "@/components/backend/MobileEditorWarning";
import EmailEditorContextProvider from "@/context/EmailEditorContextProvider";
import React, { useEffect, useState } from "react";

function EditEmailLayout({ children }: { children: React.ReactNode }) {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowWarning(window.innerWidth < 1024);
    }
  }, []);

  if (showWarning) {
    return <MobileEditorWarning />;
  }

  return <EmailEditorContextProvider>{children}</EmailEditorContextProvider>;
}

export default EditEmailLayout;
