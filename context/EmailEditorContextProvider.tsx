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
  ADD_ELEMENT: "add-element",
  CHANGE_SIDEBAR_SETTINGS_TAB_CONTENT: "change-sidebar-settings-tab-content",
  UPDATE_ELEMENT_SETTINGS: "update-element-settings",
  UPDATE_ELEMENT_NESTED_SETTINGS: "update-element-nested-settings",
  ADD_ELEMENT_IN_COLUMN: "add-element-in-column",
  DELETE_ELEMENT: "delete-element",
};

//Default Values
// @ts-ignore
const defaultValues: EmailEditorContextTypes = {
  activeSidebarTab: "elements",
  selectedElement: null,
  settings: {
    contentAreaWidth: 480,
    backgroundColor: "transparent",
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
  switch (action.type) {
    case ACTIONS.CHANGE_SIDEBAR_TAB: {
      return {
        ...state,
        activeSidebarTab: action.payload,
      };
    }
    case ACTIONS.ADD_ELEMENT: {
      const { destination, draggableId } = action.payload;
      const newState = cloneDeep(state);
      const element = cloneDeep(elements[draggableId as keyof typeof elements]);
      //Add a element in section if the element was dropped outside of a section
      if (draggableId !== "section") {
        element.id = nanoid(10);
        const section = cloneDeep(elements["section"]);
        section.id = "section-" + nanoid(10);
        section.columns[0].id = "column-" + nanoid(10);
        section.columns[0].content.push(element);
        newState.content.splice(destination.index, 0, section);
      }
      //Add a section element
      if (draggableId === "section" && element.name === "section") {
        element.id = "section-" + nanoid(10);
        element.columns[0].id = "column-" + nanoid(10);
        newState.content.splice(destination.index, 0, element);
      }
      return newState;
    }
    case ACTIONS.CHANGE_SIDEBAR_SETTINGS_TAB_CONTENT: {
      return {
        ...state,
        activeSidebarTab: "settings",
        selectedElement: action.payload,
      };
    }
    case ACTIONS.UPDATE_ELEMENT_SETTINGS: {
      const newState = cloneDeep(state);
      if (action.payload.id === "global") {
        newState.settings[action.payload.title] = action.payload.value;
        return newState;
      }

      if (action.payload.id.includes("section")) {
        newState.content.find((section: any) => {
          if (section.id === action.payload.id) {
            section.settings[action.payload.title] = action.payload.value;
          }
        });
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
    }
    case ACTIONS.UPDATE_ELEMENT_NESTED_SETTINGS: {
      const newState = cloneDeep(state);
      const { titles, value, id } = action.payload;

      if (action.payload.id.includes("section")) {
        newState.content.find((section: any) => {
          if (section.id === id) {
            section.settings[titles[0]][titles[1]] = value;
          }
        });
        return newState;
      }

      newState.content.find((section: any) => {
        section.columns.find((column: any) => {
          column.content.find((element: any) => {
            if (element.id === id) {
              element.settings[titles[0]][titles[1]] = value;
            }
          });
        });
      });
      return newState;
    }
    case ACTIONS.ADD_ELEMENT_IN_COLUMN: {
      const { source, destination, draggableId } = action.payload;

      if (draggableId === "section") return state;
      const newState = cloneDeep(state);
      newState.content.find((section: any) => {
        section.columns.find((column: any) => {
          if (column.id === destination.droppableId) {
            if (source.droppableId === "sidebar") {
              const element = cloneDeep(
                elements[draggableId as keyof typeof elements]
              );
              element.id = nanoid(10);
              column.content.push(element);
            }
          }
        });
      });
      return newState;
    }
    case ACTIONS.DELETE_ELEMENT: {
      const newState = cloneDeep(state);
      const id = action.payload;
      if (id.includes("section")) {
        newState.content.find((section: any) => {
          newState.content = newState.content.filter(
            (section: any) => section.id !== id
          );
        });
      } else {
        newState.content.find((section: any) => {
          section.columns.find((column: any) => {
            column.content = column.content.filter(
              (element: any) => element.id !== id
            );
          });
        });
      }
      return newState;
    }
    default: {
      return state;
    }
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
