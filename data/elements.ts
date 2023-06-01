import {
  HeadingElement,
  SectionElement,
} from "@/types/EmailEditorContext.types";

type Elements = {
  section: SectionElement;
  heading: HeadingElement;
};

const elements: Elements = {
  section: {
    id: "",
    name: "section",
    index: 1,
    backgroundColor: "inherit",
    backgroundImage: "inherit",
    content: {
      backgroundColor: "inherit",
      alignItems: "start",
      borderRadius: "inherit",
      border: "inherit",
      stackOnMobile: false,
    },
    columns: [
      {
        id: "",
        name: "column",
        backgroundColor: "inherit",
        padding: 5,
        border: "inherit",
        content: [],
      },
    ],
  },
  heading: {
    id: "",
    name: "heading",
    content: "I'm a Heading!",
    settings: {
      title: "h1",
      fontFamily: "inherit",
      fontWeight: 600,
      fontSize: 38,
      textColor: "#000000",
      linkColor: "#000000",
      textAlign: "left",
      lineHeight: 1,
      letterSpacing: 0,
      block: {
        padding: 5,
      },
    },
  },
};

export default elements;
