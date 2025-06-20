import Link from "next/link";
import LinkButton from "@/components/ui/LinkButton";
import NavLink from "@/components/ui/NavLink";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Container from "@/components/ui/Container";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header>
      <Container className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full text-2xl font-mono select-none flex items-center justify-between px-4 py-2 rounded-xl border border-neutral-400 dark:border-neutral-700 bg-neutral-200/20 dark:bg-neutral-900/20 backdrop-blur-sm shadow-xl/20">
        <Link href="/" className="hover:invert-30 ease-in-out duration-300">
          /NR
        </Link>
        <nav className="hidden sm:flex items-center gap-6">
          <NavLink href="/about">/About</NavLink>
          <NavLink href="/skills">/Skills</NavLink>
          <LinkButton href="/contact" className="px-2">
            /Contact me
          </LinkButton>
          <ThemeToggle />
        </nav>
        <MobileMenu />
      </Container>
    </header>
  );
}
