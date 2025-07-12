"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

const LIGHT_COLOR = "#ffffff";
const DARK_COLOR = "#000000";

export default function ThemeColorMeta() {
  const { theme } = useTheme();

  useEffect(() => {
    const color = theme === "dark" ? DARK_COLOR : LIGHT_COLOR;
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", color);
  }, [theme]);

  return null;
}