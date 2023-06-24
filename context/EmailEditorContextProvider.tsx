"use client";
import elements from "@/data/elements";
import {
  EmailEditorContextTypes,
  GlobalSettings,
} from "@/types/EmailEditorContext.types";
import { nanoid } from "nanoid";
import React, { Dispatch, createContext, useContext, useReducer } from "react";
import { cloneDeep } from "lodash";
import { database, storage } from "@/appwrite/client_init";
import { toast } from "react-hot-toast";
import html2canvas from "html2canvas";

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
  LOAD_EMAIL_FROM_SERVER: "load-email-from-server",
  MOVE_SECTION_ELEMENT: "move-section-element",
  ADD_OR_REMOVE_COLUMN_IN_SECTION: "add-or-remove-column-in-section",
};

//Default Values
// @ts-ignore
export const defaultValues: EmailEditorContextTypes = {
  activeSidebarTab: "elements",
  selectedElement: null,
  settings: {
    contentAreaWidth: 480,
    backgroundColor: "#ffffff",
    contentAreaAlignment: "center",
    showBackgroundImage: false,
    backgroundImageUrl: "",
    shouldBackgroundImageRepeat: false,
    isBackgroundImageCentered: false,
  },
  content: [
    {
      id: "section-i-FCEKsyi_v7",
      name: "section",
      index: 0,
      settings: {
        totalColumns: 1,
        contentAreaBackgroundColor: "#f6f6f6",
        contentAreaRoundedCorners: 0,
        contentAreaBorder: {
          borderWidth: 0,
          borderType: "solid",
          borderColor: "#000000",
        },
        showBackgroundImage: false,
        backgroundImageUrl: "",
        shouldBackgroundImageRepeat: false,
        isBackgroundImageCentered: false,
      },
      columns: [
        {
          id: "column-i-FCEKsyi_v7",
          name: "column",
          content: [],
        },
      ],
    },
  ],
};

//Update Email On Server
let saveTimeout: any = null;
async function handleUpdateEmailOnServer(state: any) {
  //If no state return
  if (!state.id) return;

  //Clear existing timeout to avoid multiple save requests
  if (saveTimeout) {
    clearTimeout(saveTimeout);
    saveTimeout = null;
  }

  //Create a new save event
  saveTimeout = setTimeout(async () => {
    const savingToast = toast.loading("Saving");
    try {
      //Takes a email screenshot and uploads it to the appwrite storage
      const emailContainer = document.querySelector(
        ".email-editor-content-wrapper"
      );
      const canvas = await html2canvas(emailContainer as any);
      const imageBlob = await new Promise((resolve) =>
        canvas.toBlob(resolve, "image/png")
      );
      const file = new File([imageBlob as any], `${state.id}.png`);
      await storage.createFile(
        process.env.NEXT_PUBLIC_BUCKET_ID as string,
        state.id,
        file
      );
      const emailScreenshot = `${process.env.NEXT_PUBLIC_APPWRITE_API_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_BUCKET_ID}/files/${state.id}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`;

      //Update the email document
      await database.updateDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID as string,
        process.env.NEXT_PUBLIC_COLLECTION_ID as string,
        state.id,
        { image: emailScreenshot, content: JSON.stringify(state) }
      );

      toast.dismiss(savingToast);
      toast.success("Saved");
    } catch (error) {
      toast.dismiss(savingToast);
      toast.error("Error in Saving Email");
    }
  }, 8000);
}

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
      handleUpdateEmailOnServer(newState);
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
        const title: keyof GlobalSettings = action.payload.title;
        // @ts-ignore
        newState.settings[title] = action.payload.value;
      } else if (action.payload.id.includes("section")) {
        newState.content.find((section: any) => {
          if (section.id === action.payload.id) {
            section.settings[action.payload.title] = action.payload.value;
          }
        });
      } else {
        newState.content.find((section: any) => {
          section.columns.find((column: any) => {
            column.content.find((element: any) => {
              if (element.id === action.payload.id) {
                element.settings[action.payload.title] = action.payload.value;
              }
            });
          });
        });
      }
      handleUpdateEmailOnServer(newState);
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
      } else {
        newState.content.find((section: any) => {
          section.columns.find((column: any) => {
            column.content.find((element: any) => {
              if (element.id === id) {
                element.settings[titles[0]][titles[1]] = value;
              }
            });
          });
        });
      }
      handleUpdateEmailOnServer(newState);
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
              column.content.splice(destination.index, 0, element);
            }
          }
        });
      });
      handleUpdateEmailOnServer(newState);
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
      newState.selectedElement = null;
      handleUpdateEmailOnServer(newState);
      return newState;
    }
    case ACTIONS.LOAD_EMAIL_FROM_SERVER: {
      return action.payload;
    }
    case ACTIONS.MOVE_SECTION_ELEMENT: {
      const { source, destination, draggableId } = action.payload;
      const newState = cloneDeep(state);
      const draggedElement: any = newState.content.find(
        (section: any) => section.id === draggableId
      );
      newState.content.splice(source.index, 1);
      newState.content.splice(destination.index, 0, draggedElement);
      handleUpdateEmailOnServer(newState);
      return newState;
    }
    case ACTIONS.ADD_OR_REMOVE_COLUMN_IN_SECTION: {
      const newState = cloneDeep(state);
      const section: any = newState.content.find(
        (section: any) => section.id === action.payload.id
      );
      if (section) {
        section.settings.totalColumns = action.payload.value;
        if (action.payload.type === "increment") {
          section.columns.push({
            id: "column-" + nanoid(10),
            name: "column",
            content: [],
          });
        } else {
          section.columns.splice(section.columns.length - 1, 1);
        }
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
  // @ts-ignore
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
