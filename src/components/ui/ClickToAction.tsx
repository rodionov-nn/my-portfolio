"use client";

import { FaArrowRight } from "react-icons/fa";

export default function ClickToAction() {
  return (
    <button
      type="button"
      onClick={() => {
        const el = document.getElementById("contact");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-neutral-400 bg-neutral-300/30 py-[6px] pr-[6px] pl-3 font-bold text-accent hover:text-primary hover:dark:text-primary-dark backdrop-blur-xs transition-all duration-300 hover:bg-transparent dark:border-neutral-700 dark:bg-neutral-900/30 dark:hover:bg-transparent active:scale-95"
    >
      <span className="z-10 px-3 transition-colors duration-300">
        Let&apos;s build something cool
      </span>

      <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-accent opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100" />

      <span className="z-10 relative flex items-center justify-center overflow-hidden rounded-full bg-accent text-primary dark:text-primary-dark p-2 transition-colors duration-300 ease-in-out group-hover:bg-transparent">
        <FaArrowRight className="transition-all duration-300 ease-in-out group-hover:translate-x-5 group-hover:opacity-0" />

        <FaArrowRight className="absolute -translate-x-5 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100" />
      </span>
    </button>
  );
}
