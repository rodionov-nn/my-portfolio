"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

const LIGHT_COLOR = "#ffffff";
const DARK_COLOR = "#000000";
const LIGHT_STATUS_STYLE = "default";
const DARK_STATUS_STYLE = "black-translucent";

export const MetaThemeProvider = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const color = theme === "dark" ? DARK_COLOR : LIGHT_COLOR;
    const statusStyle = theme === "dark" ? DARK_STATUS_STYLE : LIGHT_STATUS_STYLE;

    // theme-color
    let themeMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeMeta) {
      themeMeta = document.createElement("meta");
      themeMeta.setAttribute("name", "theme-color");
      document.head.appendChild(themeMeta);
    }
    themeMeta.setAttribute("content", color);

    // msapplication-navbutton-color
    let msMeta = document.querySelector('meta[name="msapplication-navbutton-color"]');
    if (!msMeta) {
      msMeta = document.createElement("meta");
      msMeta.setAttribute("name", "msapplication-navbutton-color");
      document.head.appendChild(msMeta);
    }
    msMeta.setAttribute("content", color);

    // apple-mobile-web-app-status-bar-style
    let appleMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (!appleMeta) {
      appleMeta = document.createElement("meta");
      appleMeta.setAttribute("name", "apple-mobile-web-app-status-bar-style");
      document.head.appendChild(appleMeta);
    }
    appleMeta.setAttribute("content", statusStyle);

    // viewport-fit=cover
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      const content = viewportMeta.getAttribute("content") || "";
      if (!content.includes("viewport-fit=cover")) {
        viewportMeta.setAttribute("content", content + ", viewport-fit=cover");
      }
    }
  }, [theme]);

  return null;
};
