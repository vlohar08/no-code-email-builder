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
            icon="/assets/icons/device-imac.svg"
            title="Section"
            index={1}
          />
          <EditEmailSidebarElement
            icon="/assets/icons/heading.svg"
            title="Heading"
            index={2}
          />
          <EditEmailSidebarElement
            icon="/assets/icons/photo-plus.svg"
            title="Image"
            index={3}
          />
          <EditEmailSidebarElement
            icon="/assets/icons/video-plus.svg"
            title="Video"
            index={4}
          />
          <EditEmailSidebarElement
            icon="/assets/icons/text-plus.svg"
            title="Text Block"
            index={5}
          />
          <EditEmailSidebarElement
            icon="/assets/icons/list-details.svg"
            title="List"
            index={6}
          />
          <EditEmailSidebarElement
            icon="/assets/icons/social.svg"
            title="Social"
            index={7}
          />
          <EditEmailSidebarElement
            icon="/assets/icons/rectangle.svg"
            title="Button"
            index={8}
          />
          <EditEmailSidebarElement
            icon="/assets/icons/separator-horizontal.svg"
            title="Divider"
            index={9}
          />
          <EditEmailSidebarElement
            icon="/assets/icons/space.svg"
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
