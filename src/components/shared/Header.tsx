import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { Divider, NavLink, ThemeToggle } from "../ui";

interface Props {
  className?: string;
}

export const Header: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  return (
    <header className={cn("sticky top-0 w-full z-50 text-2xl lg:text-3xl py-2 text-primary dark:text-primary-dark bg-neutral-100/20 dark:bg-neutral-900/20 backdrop-blur-xs border-b-1 border-neutral-500 dark:border-neutral-700 shadow-neutral-900/50 dark:shadow-neutral-600/50 shadow-md select-none", className)}>
      <Container className="flex flex-row justify-between items-center">
        <Link href="/" className="flex items-center gap-2 font-serif hover:opacity-80 transition ease-in-out duration-300">
          <div className="relative size-6 lg:size-8 dark:invert-100">
            <Image src="/logo.png" fill alt="N" />
          </div>
          <Divider />
          Nikita Rodionov
        </Link>
        <nav className="hidden lg:flex text-xl font-semibold flex-row gap-6 xl:gap-16">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#SkillsStack">Skills & Stack</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <ThemeToggle />
      </Container>
    </header>
  );
}
