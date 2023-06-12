import React from "react";
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
import { Droppable } from "react-beautiful-dnd";
import EditEmailSidebarElement from "./EditEmailSidebarElement";
function SidebarElements() {
  return (
    <Droppable droppableId="sidebar" isDropDisabled={true}>
      {(provided) => (
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
  );
}

export default SidebarElements;
