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
  function renderEmail(content: any) {
    return content.map((element: any) => {
      switch (element.name) {
        case "heading":
          return <Heading {...element} />;
        case "section":
          return (
            <Section id={element.id} settings={settings}>
              {renderEmail(element.columns)}
            </Section>
          );
        case "column":
          return (
            <Column id={element.id}>{renderEmail(element.content)}</Column>
          );
        default:
          return null;
      }
    });
  }
  return <>{renderEmail(content)}</>;
}

export default RenderEmailContent;
