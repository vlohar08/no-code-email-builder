"use client";
import EmailEditorContextProvider from "@/context/EmailEditorContextProvider";
import React from "react";

function EditEmailLayout({ children }: { children: React.ReactNode }) {
  return <EmailEditorContextProvider>{children}</EmailEditorContextProvider>;
}

export default EditEmailLayout;
