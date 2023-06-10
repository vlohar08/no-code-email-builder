import {
  ButtonElement,
  DividerElement,
  HeadingElement,
  ImageElement,
  ListElement,
  SectionElement,
  SocialElement,
  SpacerElement,
  TextBlockElement,
  VideoElement,
} from "@/types/EmailEditorContext.types";

type Elements = {
  section: SectionElement;
  heading: HeadingElement;
  image: ImageElement;
  video: VideoElement;
  textBlock: TextBlockElement;
  list: ListElement;
  social: SocialElement;
  button: ButtonElement;
  divider: DividerElement;
  spacer: SpacerElement;
};

const elements: Elements = {
  section: {
    id: "",
    name: "section",
    index: 0,
    settings: {
      contentAreaBackgroundColor: "#f6f6f6",
      contentAreaRoundedCorners: 0,
      contentAreaBorder: {
        borderWidth: 0,
        borderType: "solid",
        borderColor: "#000000",
      },
      showBackgroundImage: false,
      backgroundImageUrl: "",
      shouldBackgroundImageRepeat: false,
      isBackgroundImageCentered: false,
    },
    columns: [
      {
        id: "",
        name: "column",
        content: [],
      },
    ],
  },
  heading: {
    id: "",
    index: 0,
    name: "heading",
    settings: {
      content: "I'm a Heading!",
      title: "h1",
      fontFamily: "Arial",
      fontWeight: 600,
      fontSize: 38,
      textColor: "#000000",
      textAlign: "left",
      lineHeight: 1,
      letterSpacing: 0,
      block: {
        padding: 5,
      },
    },
  },
  image: {
    id: "",
    index: 0,
    name: "image",
    settings: {
      width: 100,
      fullWidthOnMobile: false,
      align: "left",
      src: "/assets/default/placeholder.jpg",
      alt: "",
      link: "",
      block: {
        padding: 5,
      },
    },
  },
  video: {
    id: "",
    index: 0,
    name: "video",
    settings: {
      src: "https://www.youtube.com/watch?v=8om1eJrO2lU&ab_channel=MarquesBrownlee",
      title: "",
      block: {
        padding: 5,
      },
    },
  },
  textBlock: {
    id: "",
    index: 0,
    name: "textBlock",
    settings: {
      content: "I'm a Paragraph!",
      fontFamily: "Arial",
      fontWeight: "normal",
      fontSize: 18,
      textColor: "#000000",
      textAlign: "left",
      lineHeight: 1,
      letterSpacing: 0,
      block: {
        padding: 5,
      },
    },
  },
  list: {
    id: "",
    index: 0,
    name: "list",
    settings: {
      lists: ["I'm a list"],
      listType: "ul",
      listStyleType: "circle",
      startListFrom: 1,
      fontFamily: "Arial",
      fontWeight: "normal",
      fontSize: 18,
      textColor: "#000000",
      textAlign: "left",
      lineHeight: 1,
      letterSpacing: 0,
      block: {
        padding: 5,
      },
    },
  },
  social: {
    id: "",
    index: 0,
    name: "social",
    settings: {
      facebook: { isEnabled: true, url: "#" },
      instagram: { isEnabled: true, url: "#" },
      twitter: { isEnabled: true, url: "#" },
      linkedin: { isEnabled: true, url: "#" },
      align: "left",
      iconColor: "#000000",
      iconSpacing: 10,
      iconBackgroundColor: "#ffffff",
      iconBorderRadius: 5,
      iconSize: 24,
      block: {
        padding: 5,
      },
    },
  },
  button: {
    id: "",
    index: 0,
    name: "button",
    settings: {
      text: "I'm a button",
      url: "#",
      width: "auto",
      fontFamily: "Arial",
      fontWeight: "bold",
      fontSize: 18,
      backgroundColor: "#488eff",
      textColor: "#ffffff",
      align: "center",
      lineHeight: 1,
      letterSpacing: 1,
      borderRadius: 5,
      padding: 5,
      block: {
        padding: 5,
      },
    },
  },
  divider: {
    id: "",
    index: 0,
    name: "divider",
    settings: {
      width: 100,
      align: "center",
      border: {
        borderWidth: 1,
        borderType: "solid",
        borderColor: "#000000",
      },
      block: {
        padding: 5,
      },
    },
  },
  spacer: {
    id: "",
    index: 0,
    name: "spacer",
    settings: {
      height: 60,
      block: {
        padding: 5,
      },
    },
  },
};

export default elements;
