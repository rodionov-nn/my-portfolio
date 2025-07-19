"use client";

import { ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function NavLink({
  href,
  children,
  className = "",
  onClick,
}: NavLinkProps) {
  const baseClass =
    "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary dark:after:bg-primary-dark after:transition-all hover:after:w-full";

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (onClick) onClick();
  };

  return (
    <a
      href={href}
      className={cn(baseClass, className)}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
