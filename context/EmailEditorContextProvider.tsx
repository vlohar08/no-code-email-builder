"use client";
import { EmailEditorContextTypes } from "@/types/EmailEditorContext.types";
import React, { Dispatch, createContext, useContext, useReducer } from "react";

//Context Setup
// @ts-ignore
const EmailEditorContext = createContext<EmailEditorContextTypes>({});
const UpdateEmailEditorContext = createContext<
  Dispatch<{
    type: string;
    payload: any;
  }>
>(() => {});

//Custom Hooks
export function useEmailEditor() {
  return useContext(EmailEditorContext);
}

export function useUpdateEmailEditor() {
  return useContext(UpdateEmailEditorContext);
}

//Reducer Actions
export const ACTIONS = {
  CHANGE_SIDEBAR_TAB: "change-sidebar-tab",
};

//Default Values
// @ts-ignore
const defaultValues: EmailEditorContextTypes = {
  activeSidebarTab: "elements",
  settings: {
    contentWidth: 480,
    backgroundColor: "transparent",
    contentAreaBackgroundColor: "transparent",
    linkColor: "#000000",
    contentAreaAlignment: "Center",
    showBackgroundImage: false,
    backgroundImageUrl: "",
    shouldBackgroundImageRepeat: false,
    isBackgroundImageCentered: false,
  },
  content: [],
};

//Reducer Function
function handleEmailEditor(
  state: EmailEditorContextTypes,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case ACTIONS.CHANGE_SIDEBAR_TAB:
      return {
        ...state,
        activeSidebarTab: action.payload,
      };

    default:
      return state;
  }
}

function EmailEditorContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [emailEditor, dispatch] = useReducer(handleEmailEditor, defaultValues);
  return (
    <EmailEditorContext.Provider value={emailEditor}>
      <UpdateEmailEditorContext.Provider value={dispatch}>
        {children}
      </UpdateEmailEditorContext.Provider>
    </EmailEditorContext.Provider>
  );
}

export default EmailEditorContextProvider;
