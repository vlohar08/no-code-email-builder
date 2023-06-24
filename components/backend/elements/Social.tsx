"use client";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { SocialElement } from "@/types/EmailEditorContext.types";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import ErrorBoundary from "@/components/ErrorBoundary";
import ElementsHoverOverlay from "../ElementsHoverOverlay";

interface SocialProps extends SocialElement {
  onClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    element: any
  ) => void;
}

function Social({ id, settings, index, onClick }: SocialProps) {
  const ICON_STYLES = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: settings.iconColor,
    backgroundColor: settings.iconBackgroundColor,
    borderRadius: settings.iconBorderRadius,
    padding: "5px",
  };

  return (
    <ErrorBoundary>
      <Draggable draggableId={id} index={index} isDragDisabled>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            onClick={(e) => onClick(e, { id, name: "social", settings })}
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
            <ElementsHoverOverlay provided={provided} id={id} />
          </div>
        )}
      </Draggable>
    </ErrorBoundary>
  );
}

export default React.memo(Social);
