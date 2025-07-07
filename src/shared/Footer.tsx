import Link from "next/link";
import Image from "next/image";
import Divider from "@/components/ui/Divider";
import Container from "@/components/ui/Container";
import NavLink from "@/components/ui/NavLink";

export default function Footer() {
  return (
    <footer className="py-4 text-2xl lg:text-3xl bg-neutral-100/20 dark:bg-neutral-900/20 backdrop-blur-xs border-t-1 border-neutral-400 dark:border-neutral-700 select-none">
      <Container>
        <div className="flex flex-row justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
          <div className="relative size-6 lg:size-8 dark:invert-100">
            <Image src="/logo.png" fill alt="N" />
          </div>
          <Divider />
          Nikita Rodionov
        </Link>
        <nav className="flex flex-col items-start gap-2">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#SkillsStack">Skills & Stack</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#vision">Vision</NavLink>
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
