import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { Divider, NavLink } from "../ui";

interface Props {
  className?: string;
}

export const Footer: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  return (
    <footer className={cn("py-4 text-2xl lg:text-3xl text-primary dark:text-primary-dark bg-neutral-100/20 dark:bg-neutral-900/20 backdrop-blur-xs border-t-1 border-neutral-500 dark:border-neutral-700 select-none", className)}>
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-serif hover:opacity-80 transition ease-in-out duration-300"
          >
            <div className="relative size-6 lg:size-8 dark:invert-100">
              <Image src="/logo.png" fill alt="N" />
            </div>
            <Divider />
            Nikita Rodionov
          </Link>
          <nav className="flex flex-col items-start gap-2">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#SkillsStack">Skills & Stack</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </div>
        <p className="flex items-center justify-center text-center text-xs sm:text-base">
          &copy; {new Date().getFullYear()} Nikita Rodionov. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
