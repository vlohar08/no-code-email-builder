"use client";
import React from "react";
import Heading from "../elements/Heading";
import Section from "../elements/Section";
import Column from "../elements/Column";
import { GlobalSettings } from "@/types/EmailEditorContext.types";

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
