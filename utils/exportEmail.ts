import { startCase } from "lodash";

function exportEmail(email: any) {
  const globalSettings = email.settings;
  const googleFonts = ["Roboto", "Lato", "Inter"];
  const usedFonts = new Set();
  function renderEmail(content: any) {
    return content.map((element: any) => {
      const { settings } = element;
      switch (element.name) {
        case "heading": {
          //HTML NODES
          const div = document.createElement("div");
          const heading = document.createElement(settings.title);

          //CLASSNAMES
          div.classList.add(`hide-on-${settings.block?.hideOn}`);

          //FONT CHECK
          const font = startCase(settings.fontFamily);
          if (googleFonts.includes(font)) {
            usedFonts.add(font);
          }

          //WRAPPER STYLES
          div.style.padding =
            typeof settings.block.padding === "number"
              ? `${settings.block.padding}px`
              : `${settings.block.padding.paddingTop}px ${settings.block.padding.paddingRight}px ${settings.block.padding.paddingBottom}px ${settings.block.padding.paddingLeft}px`;

          //HEADING STYLES
          heading.innerHTML = settings.content;
          heading.style.fontFamily = font;
          heading.style.fontWeight = settings.fontWeight;
          heading.style.fontSize = `${settings.fontSize}px`;
          heading.style.color = settings.textColor;
          heading.style.textAlign = settings.textAlign;
          heading.style.lineHeight = settings.lineHeight;
          heading.style.letterSpacing = `${settings.letterSpacing}px`;

          //APPEND
          div.appendChild(heading);

          return div;
        }
        case "image": {
          //HTML NODES
          const div = document.createElement("div");
          const link = document.createElement("a");
          const img = document.createElement("img");

          //CLASSNAMES
          div.classList.add(`hide-on-${settings.block?.hideOn}`);
          if (settings.fullWidthOnMobile) {
            img.classList.add("full-width-on-mobile");
          }

          //WRAPPER STYLES
          div.style.padding =
            typeof settings.block.padding === "number"
              ? `${settings.block.padding}px`
              : `${settings.block.padding.paddingTop}px ${settings.block.padding.paddingRight}px ${settings.block.padding.paddingBottom}px ${settings.block.padding.paddingLeft}px`;

          //LINK ATTRIBUTES
          link.href = settings.link;

          //IMAGE ATTRIBUTES
          img.src = settings.src;
          img.alt = settings.alt;

          //IMAGE STYLES
          img.style.width =
            typeof settings.width === "number"
              ? settings.width + "%"
              : settings.width;
          img.style.margin =
            settings.align === "center"
              ? "0 auto"
              : settings.align === "left"
              ? "0 auto 0 0"
              : "0 0 0 auto";

          //APPEND
          link.appendChild(img);
          div.appendChild(link);
          return div;
        }
        case "video": {
          //HTML NODES
          const div = document.createElement("div");
          const iframe = document.createElement("iframe");

          //CLASSNAMES
          div.classList.add(`hide-on-${settings.block?.hideOn}`);

          //WRAPPER STYLES
          div.style.padding =
            typeof settings.block.padding === "number"
              ? `${settings.block.padding}px`
              : `${settings.block.padding.paddingTop}px ${settings.block.padding.paddingRight}px ${settings.block.padding.paddingBottom}px ${settings.block.padding.paddingLeft}px`;

          //IFRAME ATTRIBUTES
          iframe.title = settings.title;
          iframe.width = "100%";
          iframe.height = "auto";
          iframe.src = settings.src;

          //APPEND
          div.appendChild(iframe);

          return div;
        }
        case "textBlock": {
          //HTML NODES
          const div = document.createElement("div");
          const innerDiv = document.createElement("div");

          //CLASSNAMES
          div.classList.add(`hide-on-${settings.block?.hideOn}`);

          //FONT CHECK
          const font = startCase(settings.fontFamily);
          if (googleFonts.includes(font)) {
            usedFonts.add(font);
          }

          //WRAPPER STYLES
          div.style.padding =
            typeof settings.block.padding === "number"
              ? `${settings.block.padding}px`
              : `${settings.block.padding.paddingTop}px ${settings.block.padding.paddingRight}px ${settings.block.padding.paddingBottom}px ${settings.block.padding.paddingLeft}px`;

          //INNERDIV STYLES
          innerDiv.style.fontFamily = font;
          innerDiv.style.fontWeight = settings.fontWeight;
          innerDiv.style.fontSize = `${settings.fontSize}px`;
          innerDiv.style.color = settings.textColor;
          innerDiv.style.textAlign = settings.textAlign;
          innerDiv.style.lineHeight = settings.lineHeight;
          innerDiv.style.letterSpacing = `${settings.letterSpacing}px`;

          //APPEND
          innerDiv.innerHTML = settings.content;
          div.appendChild(innerDiv);

          return div;
        }
        case "list": {
          //HTML NODES
          const div = document.createElement("div");
          const list = document.createElement(settings.listType);

          //CLASSNAMES
          div.classList.add(`hide-on-${settings.block?.hideOn}`);

          //FONT CHECK
          const font = startCase(settings.fontFamily);
          if (googleFonts.includes(font)) {
            usedFonts.add(font);
          }

          //WRAPPER STYLES
          div.style.padding =
            typeof settings.block.padding === "number"
              ? `${settings.block.padding}px`
              : `${settings.block.padding.paddingTop}px ${settings.block.padding.paddingRight}px ${settings.block.padding.paddingBottom}px ${settings.block.padding.paddingLeft}px`;

          //LIST ATTRIBUTES
          list.start = settings.startListFrom;

          //LIST STYLES
          list.style.fontFamily = font;
          list.style.fontWeight = settings.fontWeight;
          list.style.fontSize = `${settings.fontSize}px`;
          list.style.color = settings.textColor;
          list.style.lineHeight = settings.lineHeight;
          list.style.letterSpacing = `${settings.letterSpacing}px`;
          list.style.listStyleType = settings.listStyleType;

          //APPEND
          settings.lists.map((value: string) => {
            const li = document.createElement("li");
            li.innerText = value;
            list.appendChild(li);
          });
          div.appendChild(list);

          return div;
        }
        case "social": {
          //HTML NODES
          const div = document.createElement("div");

          //CLASSNAMES
          div.classList.add(`hide-on-${settings.block?.hideOn}`);

          //WRAPPER STYLES
          div.style.padding =
            typeof settings.block.padding === "number"
              ? `${settings.block.padding}px`
              : `${settings.block.padding.paddingTop}px ${settings.block.padding.paddingRight}px ${settings.block.padding.paddingBottom}px ${settings.block.padding.paddingLeft}px`;
          div.style.display = "flex";
          div.style.justifyContent = settings.align;
          div.style.gap = `${settings.iconSpacing}px`;

          const ICON_STYLES = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: settings.iconColor,
            backgroundColor: settings.iconBackgroundColor,
            borderRadius: settings.iconBorderRadius,
            padding: "5px",
          };

          //SOCIAL RENDERING
          if (settings.facebook.isEnabled) {
            const link = document.createElement("a");
            link.href = settings.facebook.url;
            for (const key in ICON_STYLES) {
              if (ICON_STYLES.hasOwnProperty(key)) {
                const value = ICON_STYLES[key as keyof typeof ICON_STYLES];
                link.style[key as any] = value;
              }
            }
            const icon = document.createElement("i");
            icon.style.fontSize = settings.iconSize + "px";
            icon.classList.add("ti");
            icon.classList.add("ti-brand-facebook");
            link.appendChild(icon);
            div.appendChild(link);
          }

          if (settings.instagram.isEnabled) {
            const link = document.createElement("a");
            link.href = settings.instagram.url;
            for (const key in ICON_STYLES) {
              if (ICON_STYLES.hasOwnProperty(key)) {
                const value = ICON_STYLES[key as keyof typeof ICON_STYLES];
                link.style[key as any] = value;
              }
            }
            const icon = document.createElement("i");
            icon.style.fontSize = settings.iconSize + "px";
            icon.classList.add("ti");
            icon.classList.add("ti-brand-instagram");
            link.appendChild(icon);
            div.appendChild(link);
          }

          if (settings.twitter.isEnabled) {
            const link = document.createElement("a");
            link.href = settings.twitter.url;
            for (const key in ICON_STYLES) {
              if (ICON_STYLES.hasOwnProperty(key)) {
                const value = ICON_STYLES[key as keyof typeof ICON_STYLES];
                link.style[key as any] = value;
              }
            }
            const icon = document.createElement("i");
            icon.style.fontSize = settings.iconSize + "px";
            icon.classList.add("ti");
            icon.classList.add("ti-brand-twitter");
            link.appendChild(icon);
            div.appendChild(link);
          }

          if (settings.linkedin.isEnabled) {
            const link = document.createElement("a");
            link.href = settings.linkedin.url;
            for (const key in ICON_STYLES) {
              if (ICON_STYLES.hasOwnProperty(key)) {
                const value = ICON_STYLES[key as keyof typeof ICON_STYLES];
                link.style[key as any] = value;
              }
            }
            const icon = document.createElement("i");
            icon.style.fontSize = settings.iconSize + "px";
            icon.classList.add("ti");
            icon.classList.add("ti-brand-linkedin");
            link.appendChild(icon);
            div.appendChild(link);
          }

          //APPEND
          return div;
        }
        case "button": {
          //HTML NODES
          const div = document.createElement("div");
          const link = document.createElement("a");
          const button = document.createElement("button");

          //CLASSNAMES
          div.classList.add(`hide-on-${settings.block?.hideOn}`);

          //FONT CHECK
          const font = startCase(settings.fontFamily);
          if (googleFonts.includes(font)) {
            usedFonts.add(font);
          }

          //WRAPPER STYLES
          div.style.padding =
            typeof settings.block.padding === "number"
              ? `${settings.block.padding}px`
              : `${settings.block.padding.paddingTop}px ${settings.block.padding.paddingRight}px ${settings.block.padding.paddingBottom}px ${settings.block.padding.paddingLeft}px`;
          div.style.display = "flex";
          div.style.justifyContent = settings.align;

          //LINK ATTRIBUTES
          link.href = settings.url;

          //LINK STYLES
          link.style.width =
            typeof settings.width === "number"
              ? settings.width + "%"
              : settings.width;

          //BUTTON STYLES
          button.style.width =
            typeof settings.width === "number"
              ? settings.width + "%"
              : settings.width;
          button.style.color = settings.textColor;
          button.style.fontFamily = font;
          button.style.fontSize = `${settings.fontSize}px`;
          button.style.fontWeight = settings.fontWeight;
          button.style.backgroundColor = settings.backgroundColor;
          button.style.lineHeight = settings.lineHeight;
          button.style.letterSpacing = `${settings.letterSpacing}px`;
          button.style.borderRadius = `${settings.borderRadius}px`;
          button.style.padding =
            typeof settings.padding === "number"
              ? `${settings.padding}px`
              : `${settings.padding.paddingTop}px ${settings.padding.paddingRight}px ${settings.padding.paddingBottom}px ${settings.padding.paddingLeft}px`;

          //APPEND
          button.innerText = settings.text;
          link.appendChild(button);
          div.appendChild(link);

          return div;
        }
        case "divider": {
          //HTML NODES
          const div = document.createElement("div");
          const innerDiv = document.createElement("div");

          //CLASSNAMES
          div.classList.add(`hide-on-${settings.block?.hideOn}`);

          //WRAPPER STYLES
          div.style.padding =
            typeof settings.block.padding === "number"
              ? `${settings.block.padding}px`
              : `${settings.block.padding.paddingTop}px ${settings.block.padding.paddingRight}px ${settings.block.padding.paddingBottom}px ${settings.block.padding.paddingLeft}px`;

          //INNERDIV STYLES
          innerDiv.style.width =
            typeof settings.width === "number"
              ? settings.width + "%"
              : settings.width;
          innerDiv.style.height = "1px";
          innerDiv.style.border = `${settings.border.borderWidth}px ${settings.border.borderType} ${settings.border.borderColor}`;

          //APPEND
          div.appendChild(innerDiv);

          return div;
        }
        case "spacer": {
          //HTML NODES
          const div = document.createElement("div");
          const innerDiv = document.createElement("div");

          //CLASSNAMES
          div.classList.add(`hide-on-${settings.block?.hideOn}`);

          //WRAPPER STYLES
          div.style.padding =
            typeof settings.block.padding === "number"
              ? `${settings.block.padding}px`
              : `${settings.block.padding.paddingTop}px ${settings.block.padding.paddingRight}px ${settings.block.padding.paddingBottom}px ${settings.block.padding.paddingLeft}px`;

          //INNERDIV STYLES
          innerDiv.style.height = settings.height;

          //APPEND
          div.appendChild(innerDiv);

          return div;
        }
        case "section": {
          // HTML NODES
          const section = document.createElement("section");
          const innerDiv = document.createElement("div");

          //INNERDIV STYLES
          innerDiv.style.maxWidth = globalSettings.contentAreaWidth + "px";
          innerDiv.style.backgroundColor = settings.contentAreaBackgroundColor;
          innerDiv.style.margin =
            globalSettings.contentAreaAlignment === "center" ? "0 auto" : "";
          innerDiv.style.border = `${settings.contentAreaBorder.borderWidth}px ${settings.contentAreaBorder.borderType} ${settings.contentAreaBorder.borderColor}`;
          if (settings.showBackgroundImage) {
            (innerDiv.style.backgroundImage = `url(${settings.backgroundImageUrl})`),
              (innerDiv.style.backgroundRepeat =
                settings.shouldBackgroundImageRepeat ? "repeat" : "no-repeat"),
              (innerDiv.style.backgroundPosition =
                settings.isBackgroundImageCentered ? "center" : "");
          }

          //APPEND
          innerDiv.appendChild(renderEmail(element.columns)[0]);
          section.appendChild(innerDiv);

          return section;
        }
        case "column": {
          //HTML NODES
          const column = document.createElement("div");

          //CLASSNAMES
          column.classList.add("column-element");

          //APPEND
          if (element.content[0]) {
            column.appendChild(renderEmail(element.content)[0]);
          }

          return column;
        }
        default: {
          return null;
        }
      }
    });
  }
  const emailContentNodes = renderEmail(email.content);

  //HTML NODES
  const bodyWrapperDiv = document.createElement("div");
  const html = document.createElement("html");
  const head = document.createElement("head");
  const body = document.createElement("body");

  emailContentNodes.forEach((node: HTMLElement) => {
    bodyWrapperDiv.appendChild(node);
  });

  //BODY WRAPPER DIV STYLES
  bodyWrapperDiv.style.backgroundColor = globalSettings.backgroundColor;
  bodyWrapperDiv.style.margin =
    globalSettings.contentAreaAlignment === "center" ? "0 auto" : "";
  if (globalSettings.showBackgroundImage) {
    bodyWrapperDiv.style.backgroundImage = `url(${globalSettings.backgroundImageUrl})`;
    bodyWrapperDiv.style.backgroundRepeat =
      globalSettings.shouldBackgroundImageRepeat ? "repeat" : "no-repeat";
    bodyWrapperDiv.style.backgroundPosition =
      globalSettings.isBackgroundImageCentered ? "center" : "";
  }

  html.lang = "en";
  head.innerHTML = `<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!--[if mso
    ]><xml
      ><o:OfficeDocumentSettings
        ><o:PixelsPerInch>96</o:PixelsPerInch
        ><o:AllowPNG /></o:OfficeDocumentSettings></xml
  ><![endif]-->
  <!--[if !mso]><!-->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/iconfont/tabler-icons.min.css">

  <!--<![endif]-->
  <style>
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    body {
      margin: 0;
      padding: 0;
    }

    a {
      color: inherit !important;
      text-decoration: none;
    }

    .column-element {
      padding: 10px;
    }

    @media (min-width: 621px) {
      .hide-on-desktop {
        display: none;
      }
    }
    @media (max-width: 620px) {
      .hide-on-mobile {
        display: none;
      }
      .full-width-on-mobile {
        width: 100%;
      }
    }
  </style>
  `;

  //Add used Google font links in head tag
  usedFonts.forEach((fontFamily: any) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
      fontFamily.replace(/ /g, "+")
    )}&display=swap`;
    head.appendChild(link);
  });

  //APPEND
  html.appendChild(head);
  body.appendChild(bodyWrapperDiv);
  html.appendChild(body);

  return html.outerHTML;
}

export default exportEmail;
