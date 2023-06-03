"use client";
import React from "react";
import Heading from "../elements/Heading";
import Section from "../elements/Section";
import Column from "../elements/Column";
import Image from "../elements/Image";
import { GlobalSettings } from "@/types/EmailEditorContext.types";
import Video from "../elements/Video";
import TextBlock from "../elements/TextBlock";
import List from "../elements/List";
import Social from "../elements/Social";
import Button from "../elements/Button";
import Divider from "../elements/Divider";
import Spacer from "../elements/Spacer";

type RenderEmailContentProps = {
  content: any;
  settings: GlobalSettings;
};

function RenderEmailContent({ content, settings }: RenderEmailContentProps) {
  let index = 1;
  function renderEmail(content: any) {
    return content.map((element: any, index: number) => {
      switch (element.name) {
        case "heading":
          return <Heading key={element.id} {...element} index={index} />;
        case "image":
          // eslint-disable-next-line jsx-a11y/alt-text
          return <Image key={element.id} {...element} index={index} />;
        case "video":
          return <Video key={element.id} {...element} index={index} />;
        case "textBlock":
          return <TextBlock key={element.id} {...element} index={index} />;
        case "list":
          return <List key={element.id} {...element} index={index} />;
        case "social":
          return <Social key={element.id} {...element} index={index} />;
        case "button":
          return <Button key={element.id} {...element} index={index} />;
        case "divider":
          return <Divider key={element.id} {...element} index={index} />;
        case "spacer":
          return <Spacer key={element.id} {...element} index={index} />;
        case "section":
          return (
            <Section
              key={element.id}
              id={element.id}
              settings={settings}
              index={index}
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
