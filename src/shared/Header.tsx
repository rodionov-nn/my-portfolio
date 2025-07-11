import Link from "next/link";
import Image from "next/image";
import Divider from "@/components/ui/Divider";
import Container from "@/components/ui/Container";
import NavLink from "@/components/ui/NavLink";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-50 text-2xl lg:text-3xl py-2 text-primary dark:text-primary-dark bg-neutral-100/20 dark:bg-neutral-900/20 backdrop-blur-xs border-b-1 border-neutral-400 dark:border-neutral-700 shadow-neutral-900/50 dark:shadow-neutral-500/50 shadow-md select-none">
      <Container className="flex flex-row justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative size-6 lg:size-8 dark:invert-100">
            <Image src="/logo.png" fill alt="N" />
          </div>
          <Divider />
          Nikita Rodionov
        </Link>
        <nav className="hidden lg:flex text-xl flex-row gap-6 xl:gap-16">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#SkillsStack">Skills & Stack</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#vision">Vision</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <ThemeToggle />
      </Container>
    </header>
  );
}
