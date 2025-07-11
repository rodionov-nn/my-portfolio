"use client"

import * as React from "react"
import { LuMoon, LuSun } from "react-icons/lu"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 relative inline-flex items-center justify-center rounded-full border border-neutral-400 dark:border-neutral-700 bg-neutral-200/30 dark:bg-neutral-900/30 hover:bg-neutral-400/30 dark:hover:bg-neutral-700/30 transition ease-in-out duration-300 cursor-pointer"
    >
      <LuSun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ease-in-out duration-300" />
      <LuMoon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ease-in-out duration-300" />

      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
