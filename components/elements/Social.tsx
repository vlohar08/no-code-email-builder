"use client";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";
import { SocialElement } from "@/types/EmailEditorContext.types";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

function Social({ id, settings, index }: SocialElement) {
  const ICON_STYLES = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: settings.iconColor,
    backgroundColor: settings.iconBackgroundColor,
    borderRadius: settings.iconBorderRadius,
    padding: "5px",
  };
  const updateEmailEditor = useUpdateEmailEditor();
  function handleClick() {
    updateEmailEditor({
      type: ACTIONS.CHANGE_SIDEBAR_SETTINGS_TAB_CONTENT,
      payload: { element: "social", id, settings },
    });
  }
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          onClick={handleClick}
          className={`content-element hide-on-${settings.block?.hideOn}`}
          style={{
            display: "flex",
            gap: settings.iconSpacing,
            justifyContent: settings.align,

            padding:
              typeof settings.block.padding === "number"
                ? settings.block.padding
                : `${settings.block.padding.paddingTop}px ${settings.block.padding.paddingRight}px ${settings.block.padding.paddingBottom}px ${settings.block.padding.paddingLeft}px`,
          }}
        >
          {settings.facebook.isEnabled && (
            <a style={ICON_STYLES} href={settings.facebook.url}>
              <IconBrandFacebook
                width={settings.iconSize}
                height={settings.iconSize}
              />
            </a>
          )}
          {settings.instagram.isEnabled && (
            <a style={ICON_STYLES} href={settings.instagram.url}>
              <IconBrandInstagram
                width={settings.iconSize}
                height={settings.iconSize}
              />
            </a>
          )}
          {settings.twitter.isEnabled && (
            <a style={ICON_STYLES} href={settings.twitter.url}>
              <IconBrandTwitter
                width={settings.iconSize}
                height={settings.iconSize}
              />
            </a>
          )}
          {settings.linkedin.isEnabled && (
            <a style={ICON_STYLES} href={settings.linkedin.url}>
              <IconBrandLinkedin
                width={settings.iconSize}
                height={settings.iconSize}
              />
            </a>
          )}
        </div>
      )}
    </Draggable>
  );
}

export default Social;
