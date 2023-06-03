export type Padding = {
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
};

export type SelectedElement = {
  id: string;
  element: string;
  settings: any;
};

export type HideOn = "mobile" | "desktop" | undefined;
export type FontWeight = "normal" | "bold";
export type TextAlign = "left" | "right" | "center" | "justify";
export type Align = "left" | "right" | "center";
export type Border = {
  borderWidth: number;
  borderType: "solid" | "dashed" | "dotted";
  borderColor: string;
};

export type SectionElement = {
  id: string;
  index: number;
  name: "section";
  backgroundColor: string;
  backgroundImage: string;
  hideOn?: HideOn;
  content: {
    backgroundColor: string;
    alignItems: "start" | "center" | "end";
    borderRadius: string;
    border: string;
    stackOnMobile: boolean;
  };
  columns: {
    id: string;
    name: string;
    backgroundColor: string;
    padding: number | Padding;
    border: string;
    content: {}[];
  }[];
};

export type HeadingElement = {
  id: string;
  index: number;
  name: "heading";
  content: string;
  settings: {
    title: "h1" | "h2" | "h3";
    fontFamily: string;
    fontWeight: number;
    fontSize: number;
    textColor: string;
    linkColor: string;
    textAlign: TextAlign;
    lineHeight: number;
    letterSpacing: number;
    block: {
      padding: number | Padding;
      hideOn?: HideOn;
    };
  };
};

export type ImageElement = {
  id: string;
  index: number;
  name: "image";
  settings: {
    width: number | "auto";
    fullWidthOnMobile: boolean;
    src: string;
    alt: string;
    align: "left" | "right" | "center";
    link: string;
    block: {
      padding: number | Padding;
      hideOn?: HideOn;
    };
  };
};

export type VideoElement = {
  id: string;
  index: number;
  name: "video";
  settings: {
    src: string;
    title: string;
    block: {
      padding: number | Padding;
      hideOn?: HideOn;
    };
  };
};

export type TextBlockElement = {
  id: string;
  index: number;
  name: "textBlock";
  content: string;
  settings: {
    fontFamily: string;
    fontWeight: FontWeight;
    fontSize: number;
    textColor: string;
    linkColor: string;
    textAlign: TextAlign;
    lineHeight: number;
    letterSpacing: number;
    block: {
      padding: number | Padding;
      hideOn?: HideOn;
    };
  };
};

export type ListElement = {
  id: string;
  index: number;
  name: "list";
  content: string;
  settings: {
    listType: "ul" | "ol";
    listStyleType: "circle" | "square" | "upper roman" | "lower alpha";
    startListFrom: number;
    fontFamily: string;
    fontWeight: FontWeight;
    fontSize: number;
    textColor: string;
    linkColor: string;
    textAlign: TextAlign;
    lineHeight: number;
    letterSpacing: number;
    block: {
      padding: number | Padding;
      hideOn?: HideOn;
    };
  };
};

export type SocialElement = {
  id: string;
  index: number;
  name: "social";
  settings: {
    facebook: {
      isEnabled: boolean;
      url: string;
    };
    instagram: {
      isEnabled: boolean;
      url: string;
    };
    twitter: {
      isEnabled: boolean;
      url: string;
    };
    linkedin: {
      isEnabled: boolean;
      url: string;
    };
    align: Align;
    iconColor: string;
    iconBackgroundColor: string;
    iconBorderRadius: number;
    iconSpacing: number;
    iconSize: number;
    block: {
      padding: number | Padding;
      hideOn?: HideOn;
    };
  };
};

export type ButtonElement = {
  id: string;
  index: number;
  name: "button";
  content: string;
  settings: {
    url: string;
    width: number | "auto";
    fontFamily: string;
    fontWeight: FontWeight;
    fontSize: number;
    backgroundColor: string;
    textColor: string;
    align: Align;
    lineHeight: number;
    letterSpacing: number;
    borderRadius: number;
    padding: number | Padding;
    block: {
      padding: number | Padding;
      hideOn?: HideOn;
    };
  };
};

export type DividerElement = {
  id: string;
  index: number;
  name: "divider";
  settings: {
    width: number | "auto";
    align: Align;
    border: Border;
    block: {
      padding: number | Padding;
      hideOn?: HideOn;
    };
  };
};

export type SpacerElement = {
  id: string;
  index: number;
  name: "spacer";
  settings: {
    height: number;
    block: {
      padding: number | Padding;
      hideOn?: HideOn;
    };
  };
};

export type GlobalSettings = {
  backgroundColor: string;
  contentAreaBackgroundColor: string;
  contentAreaWidth: number;
  linkColor: string;
  contentAreaAlignment: string;
  showBackgroundImage: boolean;
  backgroundImageUrl: string;
  shouldBackgroundImageRepeat: boolean;
  isBackgroundImageCentered: boolean;
};

export type EmailEditorContextTypes = {
  activeSidebarTab: "elements" | "settings";
  selectedElement: SelectedElement | null;
  settings: GlobalSettings;
  content: {}[];
};
