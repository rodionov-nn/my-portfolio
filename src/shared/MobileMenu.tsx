"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import NavLink from "@/components/ui/NavLink";
import LinkButton from "@/components/ui/LinkButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [containerRect, setContainerRect] = useState<{
    left: number;
    width: number;
  } | null>(null);

  useEffect(() => {
    function updateRect() {
      const headerContainer = document.querySelector("header > div");
      if (headerContainer) {
        const rect = headerContainer.getBoundingClientRect();
        setContainerRect({ left: rect.left, width: rect.width });
      }
    }
    if (isOpen) {
      updateRect();
      window.addEventListener("resize", updateRect);
    }
    return () => window.removeEventListener("resize", updateRect);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleWindowChange() {
      setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    window.addEventListener("resize", handleWindowChange);
    window.addEventListener("orientationchange", handleWindowChange);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      window.removeEventListener("resize", handleWindowChange);
      window.removeEventListener("orientationchange", handleWindowChange);
    };
  }, [isOpen]);

  const menu = isOpen
    ? createPortal(
        <div
          className="fixed inset-0 z-50 flex justify-center items-start"
          style={{ minHeight: "100vh" }}
        >
          <div
            className="absolute inset-0 bg-black/10 dark:bg-black/30"
            onClick={() => setIsOpen(false)}
            style={{ zIndex: 0 }}
          />
          <div
            ref={menuRef}
            className="mobile-menu-panel relative mt-[5.5rem] rounded-xl border border-neutral-700 bg-neutral-100/30 dark:bg-neutral-900/30 backdrop-blur-sm p-6 px-4 text-lg font-mono space-y-4 transition-all duration-300 ease-in-out opacity-100 scale-100 pointer-events-auto translate-y-0 text-[#0a0a0a] dark:text-[#ededed]"
            style={{
              zIndex: 1,
              willChange: "opacity, transform, left, width",
              position: "absolute",
              left: containerRect?.left ?? 0,
              width: containerRect?.width ?? "100vw",
              maxWidth: "100vw",
              transition:
                "left 0.3s cubic-bezier(.4,0,.2,1), width 0.3s cubic-bezier(.4,0,.2,1), opacity 0.3s, transform 0.3s",
            }}
          >
            <NavLink
              href="/"
              className="block"
              onClick={() => setIsOpen(false)}
            >
              /Home
            </NavLink>
            <NavLink
              href="/about"
              className="block"
              onClick={() => setIsOpen(false)}
            >
              /About
            </NavLink>
            <NavLink
              href="/skills"
              className="block"
              onClick={() => setIsOpen(false)}
            >
              /Skills
            </NavLink>

            <LinkButton
              href="/contact"
              className="w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              /Contact me
            </LinkButton>

            <div className="flex justify-center py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <div className="sm:hidden relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-2xl transition hover:scale-110 relative"
        aria-label="Toggle menu"
      >
        <Menu
          size={24}
          className={`absolute transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-0 scale-0 rotate-90"
              : "opacity-100 scale-100 rotate-0"
          }`}
        />
        <X
          size={24}
          className={`absolute transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-0 -rotate-90"
          }`}
        />
        <span className="opacity-0">
          <Menu size={24} />
        </span>
      </button>
      {typeof window !== "undefined" && menu}
    </div>
  );
}
