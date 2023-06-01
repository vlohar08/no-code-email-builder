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

export type SectionElement = {
  id: string;
  index: number;
  name: "section";
  backgroundColor: string;
  backgroundImage: string;
  hideOn?: "mobile" | "desktop";
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
  name: "heading";
  content: string;
  settings: {
    title: "h1" | "h2" | "h3";
    fontFamily: string;
    fontWeight: number;
    fontSize: number;
    textColor: string;
    linkColor: string;
    textAlign: "left" | "right" | "center" | "justify";
    lineHeight: number;
    letterSpacing: number;
    block: {
      padding: number | Padding;
      hideOn?: "mobile" | "desktop";
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
