"use client";
import elements from "@/data/elements";
import { EmailEditorContextTypes } from "@/types/EmailEditorContext.types";
import { nanoid } from "nanoid";
import React, { Dispatch, createContext, useContext, useReducer } from "react";
import { SectionElement } from "@/types/EmailEditorContext.types";
import { cloneDeep } from "lodash";

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
  ADD_EMAIL_ELEMENT_WITH_SECTION: "add-email-element-with-section",
  CHANGE_SIDEBAR_SETTINGS_TAB_CONTENT: "change-sidebar-settings-tab-content",
  UPDATE_ELEMENT_SETTINGS: "update-element-settings",
  UPDATE_ELEMENT_BLOCK_SETTINGS: "update-element-block-settings",
};

//Default Values
// @ts-ignore
const defaultValues: EmailEditorContextTypes = {
  activeSidebarTab: "elements",
  selectedElement: null,
  settings: {
    contentAreaWidth: 480,
    backgroundColor: "transparent",
    contentAreaBackgroundColor: "transparent",
    linkColor: "#000000",
    contentAreaAlignment: "center",
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
  let newState: any;
  switch (action.type) {
    case ACTIONS.CHANGE_SIDEBAR_TAB:
      return {
        ...state,
        activeSidebarTab: action.payload,
      };
    case ACTIONS.ADD_EMAIL_ELEMENT_WITH_SECTION:
      const section = cloneDeep(elements["section"]);
      const element = cloneDeep(
        elements[action.payload as keyof typeof elements]
      );
      section.id = nanoid(10);
      element.id = nanoid(10);
      section.columns[0].id = nanoid(10);
      section.columns[0].content.push(element);

      return {
        ...state,
        content: [...state.content, section],
      };
    case ACTIONS.CHANGE_SIDEBAR_SETTINGS_TAB_CONTENT:
      return {
        ...state,
        activeSidebarTab: "settings",
        selectedElement: action.payload,
      };
    case ACTIONS.UPDATE_ELEMENT_SETTINGS:
      newState = cloneDeep(state);
      if (action.payload.id === "global") {
        newState = cloneDeep(state);
        newState.settings[action.payload.title] = action.payload.value;

        return newState;
      }
      newState.content.find((section: any) => {
        section.columns.find((column: any) => {
          column.content.find((element: any) => {
            if (element.id === action.payload.id) {
              element.settings[action.payload.title] = action.payload.value;
            }
          });
        });
      });
      return newState;
    case ACTIONS.UPDATE_ELEMENT_BLOCK_SETTINGS:
      newState = cloneDeep(state);
      newState.content.find((section: any) => {
        section.columns.find((column: any) => {
          column.content.find((element: any) => {
            if (element.id === action.payload.id) {
              element.settings.block[action.payload.title] =
                action.payload.value;
            }
          });
        });
      });
      return newState;
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
