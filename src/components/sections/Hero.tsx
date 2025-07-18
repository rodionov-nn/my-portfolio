import Container from "../ui/Container";
import Typewriter from "../ui/TypeWriter";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-transparent to-white dark:to-black h-screen text-primary dark:text-primary-dark">
      <Container className="flex flex-col items-center justify-center h-full text-center gap-4">
        <h2 className="text-3xl md:text-5xl">Nikita Rodionov</h2>
        <h1 className="text-4xl md:text-7xl text-primary dark:text-primary-dark">
          <Typewriter
            texts={[
              "Frontend Developer",
              "IT Enthusiast",
              "Builder of cool stuff",
              "UI/UX Visionary",
            ]}
            speed={100}
            pause={3000}
          />
        </h1>
        <p className="text-md md:text-xl text-secondary dark:text-secondary-dark pb-6">
          I build for the web — with the mindset of a system architect. From UI
          to deployment, I understand the{" "}
          <span className="font-bold text-primary dark:text-primary-dark">
            full stack
          </span>
          .
        </p>
        <Link
          href="#contact"
          className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-neutral-400 bg-neutral-300/30 py-[6px] pr-[6px] pl-3 font-bold text-accent hover:text-primary hover:dark:text-primary-dark backdrop-blur-xs transition-all duration-300 hover:bg-transparent dark:border-neutral-700 dark:bg-neutral-900/30 dark:hover:bg-transparent active:scale-95"
        >
          <span className="z-10 px-3 transition-colors duration-300">
            Let&apos;s build something cool
          </span>

          <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-accent opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100" />

          <span className="z-10 relative flex items-center justify-center overflow-hidden rounded-full bg-accent text-primary dark:text-primary-dark p-2 transition-colors duration-300 group-hover:bg-transparent">
            <FaArrowRight className="transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0" />

            <FaArrowRight className="absolute -translate-x-5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </span>
        </Link>
      </Container>
    </section>
  );
}
