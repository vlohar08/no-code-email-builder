"use client";
import React from "react";
import {
  ACTIONS,
  useEmailEditor,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import SidebarElements from "./SidebarElements";
import SidebarSettings from "./SidebarSettings";

function EditEmailSidebar() {
  const { activeSidebarTab, selectedElement } = useEmailEditor();
  const updateEmailEditor = useUpdateEmailEditor();

  return (
    <>
      <aside className="edit-email-sidebar-wrapper">
        <div className="sidebar-tabs">
          <div
            data-active={activeSidebarTab === "elements"}
            onClick={() =>
              updateEmailEditor({
                type: ACTIONS.CHANGE_SIDEBAR_TAB,
                payload: "elements",
              })
            }
          >
            Elements
          </div>
          <div
            data-active={activeSidebarTab === "settings"}
            onClick={() =>
              updateEmailEditor({
                type: ACTIONS.CHANGE_SIDEBAR_TAB,
                payload: "settings",
              })
            }
          >
            Settings
          </div>
        </div>

        {activeSidebarTab === "elements" ? (
          <SidebarElements />
        ) : (
          <SidebarSettings selectedElement={selectedElement} />
        )}
      </aside>
    </>
  );
}

export default EditEmailSidebar;
