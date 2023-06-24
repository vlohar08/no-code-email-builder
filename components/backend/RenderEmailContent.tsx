"use client";
import React, { useCallback } from "react";
import Heading from "./elements/Heading";
import Section from "./elements/Section";
import Column from "./elements/Column";
import Image from "./elements/Image";
import { GlobalSettings } from "@/types/EmailEditorContext.types";
import Video from "./elements/Video";
import TextBlock from "./elements/TextBlock";
import List from "./elements/List";
import Social from "./elements/Social";
import Button from "./elements/Button";
import Divider from "./elements/Divider";
import Spacer from "./elements/Spacer";
import {
  ACTIONS,
  useUpdateEmailEditor,
} from "@/context/EmailEditorContextProvider";

type RenderEmailContentProps = {
  content: any;
  settings: GlobalSettings;
};

function RenderEmailContent({ content, settings }: RenderEmailContentProps) {
  const updateEmailEditor = useUpdateEmailEditor();
  const handleClick = useCallback((e: any, element: any) => {
    e.stopPropagation();
    const { name, id, settings } = element;
    updateEmailEditor({
      type: ACTIONS.CHANGE_SIDEBAR_SETTINGS_TAB_CONTENT,
      payload: { element: name, id, settings },
    });
  }, []);

  function renderEmail(content: any) {
    let elementIndex = 0;
    let sectionIndex = 0;
    return content.map((element: any, index: number) => {
      switch (element.name) {
        case "heading":
          elementIndex = index ? (elementIndex += 1) : elementIndex;
          return (
            <Heading
              key={element.id}
              {...element}
              index={elementIndex}
              onClick={handleClick}
            />
          );
        case "image":
          elementIndex = index ? (elementIndex += 1) : elementIndex;
          return (
            // eslint-disable-next-line jsx-a11y/alt-text
            <Image
              key={element.id}
              {...element}
              index={elementIndex}
              onClick={handleClick}
            />
          );
        case "video":
          elementIndex = index ? (elementIndex += 1) : elementIndex;
          return (
            <Video
              key={element.id}
              {...element}
              index={elementIndex}
              onClick={handleClick}
            />
          );
        case "textBlock":
          elementIndex = index ? (elementIndex += 1) : elementIndex;
          return (
            <TextBlock
              key={element.id}
              {...element}
              index={elementIndex}
              onClick={handleClick}
            />
          );
        case "list":
          elementIndex = index ? (elementIndex += 1) : elementIndex;
          return (
            <List
              key={element.id}
              {...element}
              index={elementIndex}
              onClick={handleClick}
            />
          );
        case "social":
          elementIndex = index ? (elementIndex += 1) : elementIndex;
          return (
            <Social
              key={element.id}
              {...element}
              index={elementIndex}
              onClick={handleClick}
            />
          );
        case "button":
          elementIndex = index ? (elementIndex += 1) : elementIndex;
          return (
            <Button
              key={element.id}
              {...element}
              index={elementIndex}
              onClick={handleClick}
            />
          );
        case "divider":
          elementIndex = index ? (elementIndex += 1) : elementIndex;
          return (
            <Divider
              key={element.id}
              {...element}
              index={elementIndex}
              onClick={handleClick}
            />
          );
        case "spacer":
          elementIndex = index ? (elementIndex += 1) : elementIndex;
          return (
            <Spacer
              key={element.id}
              {...element}
              index={elementIndex}
              onClick={handleClick}
            />
          );
        case "section":
          sectionIndex = index ? (sectionIndex += 1) : sectionIndex;
          return (
            <Section
              key={element.id}
              id={element.id}
              {...element}
              globalSettings={settings}
              index={sectionIndex}
              onClick={handleClick}
            >
              {renderEmail(element.columns)}
            </Section>
          );
        case "column":
          elementIndex = 0;
          return (
            <Column key={element.id} id={element.id}>
              {renderEmail(element.content)}
            </Column>
          );
        default:
          return null;
      }
    });
  }
  return <>{renderEmail(content)}</>;
}

export default RenderEmailContent;
