export type SectionElement = {
  index: number;
  "background-color": string;
  "background-image": string;
  "hide-on": "mobile" | "desktop";
  content: {
    "background-color": string;
    "align-items": "start" | "center" | "end";
    "border-radius": string;
    border: string;
    "stack-on-mobile": boolean;
  };
  columns: {
    id: string;
    index: number;
    "background-color": string;
    padding: string;
    border: string;
  }[];
};

export type HeadingElement = {
  id: string;
  index: number;
  name: "heading";
  content: string;
  settings: {
    title: "H1" | "H2" | "H3";
    "font-family": string;
    "font-weight": number;
    "font-size": number;
    "text-color": string;
    "link-color": string;
    align: string;
    "line-height": number;
    "letter-spacing": number;
    block: {
      padding: string;
      "hide-on": "mobile" | "desktop";
    };
  };
};

export type EmailEditorContextTypes = {
  activeSidebarTab: "elements" | "settings";
  selectedElement?: {
    id: string;
    name: string;
  };
  settings: {
    backgroundColor: string;
    contentAreaBackgroundColor: string;
    contentWidth: number;
    linkColor: string;
    contentAreaAlignment: string;
    showBackgroundImage: boolean;
    backgroundImageUrl: string;
    shouldBackgroundImageRepeat: boolean;
    isBackgroundImageCentered: boolean;
  };
  content: {}[];
};
