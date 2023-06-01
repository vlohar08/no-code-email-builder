"use client";
import React from "react";
import EditEmailSidebarElement from "./EditEmailSidebarElement";
import {
  IconDeviceImac,
  IconHeading,
  IconListDetails,
  IconPhotoPlus,
  IconRectangle,
  IconSeparatorHorizontal,
  IconSocial,
  IconSpace,
  IconTextPlus,
  IconVideoPlus,
} from "@tabler/icons-react";
import SidebarGlobalSettings from "./SidebarGlobalSettings";
import SidebarHeadingSettings from "./SidebarHeadingSettings";
import SidebarTextBlockSettings from "./SidebarTextBlockSettings";
import SidebarListSettings from "./SidebarListSettings";
import SidebarImageSettings from "./SidebarImageSettings";
import { Droppable } from "react-beautiful-dnd";
import { SelectedElement } from "@/types/EmailEditorContext.types";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";

type RenderSidebarContentProps = {
  activeSidebarTab: "elements" | "settings";
  selectedElement: SelectedElement | null;
  settings?: any;
};

function RenderSidebarContent({
  activeSidebarTab,
  selectedElement,
  settings,
}: RenderSidebarContentProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  function handleReturnToGlobalSettings() {
    updateEmailEditor({
      type: ACTIONS.CHANGE_SIDEBAR_SETTINGS_TAB_CONTENT,
      payload: null,
    });
  }

  return (
    <>
      {activeSidebarTab === "elements" ? (
        <Droppable droppableId="sidebar" isDropDisabled={true}>
          {(provided, snapshot) => (
            <div
              className="sidebar-elements"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <EditEmailSidebarElement
                icon={<IconDeviceImac />}
                title="Section"
                index={1}
              />
              <EditEmailSidebarElement
                icon={<IconHeading />}
                title="Heading"
                index={2}
              />
              <EditEmailSidebarElement
                icon={<IconPhotoPlus />}
                title="Image"
                index={3}
              />
              <EditEmailSidebarElement
                icon={<IconVideoPlus />}
                title="Video"
                index={4}
              />
              <EditEmailSidebarElement
                icon={<IconTextPlus />}
                title="Text Block"
                index={5}
              />
              <EditEmailSidebarElement
                icon={<IconListDetails />}
                title="List"
                index={6}
              />
              <EditEmailSidebarElement
                icon={<IconSocial />}
                title="Social"
                index={7}
              />
              <EditEmailSidebarElement
                icon={<IconRectangle />}
                title="Button"
                index={8}
              />
              <EditEmailSidebarElement
                icon={<IconSeparatorHorizontal />}
                title="Divider"
                index={9}
              />
              <EditEmailSidebarElement
                icon={<IconSpace />}
                title="Spacer"
                index={10}
              />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ) : (
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
              default:
                return <SidebarGlobalSettings />;
            }
          })()}
        </div>
      )}
    </>
  );
}

export default RenderSidebarContent;
