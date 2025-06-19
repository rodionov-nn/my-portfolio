import Link from "next/link";
import { Instagram, Github, Linkedin } from "lucide-react";
import NavLink from "@/components/ui/NavLink";
import ExternalLinkButton from "@/components/ui/ExternalLinkButton";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="mt-8 px-2 sm:px-4 md:px-8 2xl:px-50 w-full h-fit font-mono rounded-t-xl border border-neutral-700 bg-neutral-100/30 dark:bg-neutral-900/30 backdrop-blur-sm select-none">
      <Container className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 py-4 sm:py-8">
        <Link
          href={"/"}
          className="text-md sm:text-1xl lg:text-4xl 2xl:text-6xl mb-2 sm:mb-0 hover:invert-30 ease-in-out duration-300"
        >
          /Nikita Rodionov
        </Link>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 w-full sm:w-auto items-center sm:items-start justify-center sm:justify-end text-base xl:text-2xl">
          <div className="flex flex-row sm:flex-col gap-4 sm:gap-6 items-center sm:items-start">
            <NavLink href="/about">/About</NavLink>
            <NavLink href="/skills">/Skills</NavLink>
            <NavLink href="/contact">/Contact</NavLink>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-4 items-center mt-2 sm:mt-0">
            <ExternalLinkButton
              href="https://github.com/rodionov-nn"
              iconLeft={<Github className="sm:h-5 sm:w-5" />}
              className="p-2 text-xs sm:text-base rounded-full"
            >
              GitHub
            </ExternalLinkButton>
            <ExternalLinkButton
              href="https://www.instagram.com/rodionov.nn"
              iconLeft={<Instagram className="sm:h-5 sm:w-5" />}
              className="p-2 text-xs sm:text-base rounded-full"
            >
              Instagram
            </ExternalLinkButton>
            <ExternalLinkButton
              href="https://www.linkedin.com/in/rodionov-nn/"
              iconLeft={<Linkedin className="sm:h-5 sm:w-5" />}
              className="p-2 text-xs sm:text-base rounded-full"
            >
              Linkedin
            </ExternalLinkButton>
          </div>
        </div>
      </Container>
      <p className="flex items-center justify-center text-center pb-4 text-xs sm:text-base">
        &copy; {new Date().getFullYear()} Nikita Rodionov. All rights reserved.
      </p>
    </footer>
  );
}