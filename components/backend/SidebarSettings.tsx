import React from "react";
import SidebarGlobalSettings from "./settings/SidebarGlobalSettings";
import SidebarHeadingSettings from "./settings/SidebarHeadingSettings";
import SidebarTextBlockSettings from "./settings/SidebarTextBlockSettings";
import SidebarListSettings from "./settings/SidebarListSettings";
import SidebarImageSettings from "./settings/SidebarImageSettings";
import { SelectedElement } from "@/types/EmailEditorContext.types";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import SidebarVideoSettings from "./settings/SidebarVideoSettings";
import SidebarSocialSettings from "./settings/SidebarSocialSettings";
import SidebarButtonSettings from "./settings/SidebarButtonSettings";
import SidebarDividerSettings from "./settings/SidebarDividerSettings";
import SidebarSpacerSettings from "./settings/SidebarSpacerSettings";
import SidebarSectionSettings from "./settings/SidebarSectionSettings";

function SidebarSettings({
  selectedElement,
}: {
  selectedElement: SelectedElement | null;
}) {
  const updateEmailEditor = useUpdateEmailEditor();

  function handleReturnToGlobalSettings() {
    updateEmailEditor({
      type: ACTIONS.CHANGE_SIDEBAR_SETTINGS_TAB_CONTENT,
      payload: null,
    });
  }
  return (
    <div className="sidebar-settings-wrapper">
      {selectedElement && (
        <p
          className="default-padding"
          style={{ cursor: "pointer" }}
          onClick={handleReturnToGlobalSettings}
        >
          Return to Global Settings
        </p>
      )}
      {(() => {
        switch (selectedElement?.element) {
          case "heading":
            return (
              <SidebarHeadingSettings
                id={selectedElement.id}
                settings={selectedElement.settings}
              />
            );
          case "image":
            return (
              <SidebarImageSettings
                id={selectedElement.id}
                settings={selectedElement.settings}
              />
            );
          case "video":
            return (
              <SidebarVideoSettings
                id={selectedElement.id}
                settings={selectedElement.settings}
              />
            );
          case "textBlock":
            return (
              <SidebarTextBlockSettings
                id={selectedElement.id}
                settings={selectedElement.settings}
              />
            );
          case "list":
            return (
              <SidebarListSettings
                id={selectedElement.id}
                settings={selectedElement.settings}
              />
            );
          case "social":
            return (
              <SidebarSocialSettings
                id={selectedElement.id}
                settings={selectedElement.settings}
              />
            );
          case "button":
            return (
              <SidebarButtonSettings
                id={selectedElement.id}
                settings={selectedElement.settings}
              />
            );
          case "divider":
            return (
              <SidebarDividerSettings
                id={selectedElement.id}
                settings={selectedElement.settings}
              />
            );
          case "spacer":
            return (
              <SidebarSpacerSettings
                id={selectedElement.id}
                settings={selectedElement.settings}
              />
            );
          case "section":
            return (
              <SidebarSectionSettings
                id={selectedElement.id}
                settings={selectedElement.settings}
              />
            );
          default:
            return <SidebarGlobalSettings />;
        }
      })()}
    </div>
  );
}

export default SidebarSettings;
