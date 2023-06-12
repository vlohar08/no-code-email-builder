"use client";
import MobileEditorWarning from "@/components/backend/MobileEditorWarning";
import EmailEditorContextProvider from "@/context/EmailEditorContextProvider";
import React from "react";

function EditEmailLayout({ children }: { children: React.ReactNode }) {
  if (window.innerWidth < 1024) {
    return <MobileEditorWarning />;
  }
  return <EmailEditorContextProvider>{children}</EmailEditorContextProvider>;
}

export default EditEmailLayout;
