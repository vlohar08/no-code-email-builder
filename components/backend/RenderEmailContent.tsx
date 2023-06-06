"use client";
import React from "react";
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
  function handleClick(e: any, element: any) {
    e.stopPropagation();
    const { name, id, settings } = element;
    updateEmailEditor({
      type: ACTIONS.CHANGE_SIDEBAR_SETTINGS_TAB_CONTENT,
      payload: { element: name, id, settings },
    });
  }

  function renderEmail(content: any) {
    return content.map((element: any, index: number) => {
      switch (element.name) {
        case "heading":
          return (
            <Heading
              key={element.id}
              {...element}
              index={index}
              onClick={(e) => handleClick(e, element)}
            />
          );
        case "image":
          // eslint-disable-next-line jsx-a11y/alt-text
          return (
            <Image
              key={element.id}
              {...element}
              index={index}
              onClick={(e) => handleClick(e, element)}
            />
          );
        case "video":
          return (
            <Video
              key={element.id}
              {...element}
              index={index}
              onClick={(e) => handleClick(e, element)}
            />
          );
        case "textBlock":
          return (
            <TextBlock
              key={element.id}
              {...element}
              index={index}
              onClick={(e) => handleClick(e, element)}
            />
          );
        case "list":
          return (
            <List
              key={element.id}
              {...element}
              index={index}
              onClick={(e) => handleClick(e, element)}
            />
          );
        case "social":
          return (
            <Social
              key={element.id}
              {...element}
              index={index}
              onClick={(e) => handleClick(e, element)}
            />
          );
        case "button":
          return (
            <Button
              key={element.id}
              {...element}
              index={index}
              onClick={(e) => handleClick(e, element)}
            />
          );
        case "divider":
          return (
            <Divider
              key={element.id}
              {...element}
              index={index}
              onClick={(e) => handleClick(e, element)}
            />
          );
        case "spacer":
          return (
            <Spacer
              key={element.id}
              {...element}
              index={index}
              onClick={(e) => handleClick(e, element)}
            />
          );
        case "section":
          return (
            <Section
              key={element.id}
              id={element.id}
              {...element}
              globalSettings={settings}
              index={index}
              onClick={(e) => handleClick(e, element)}
            >
              {renderEmail(element.columns)}
            </Section>
          );
        case "column":
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
