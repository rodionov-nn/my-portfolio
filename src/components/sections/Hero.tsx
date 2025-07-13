import Container from "../ui/Container";
import Typewriter from "../ui/TypeWriter";
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
          className="relative z-10 hover:translate-y-1 transition ease-in-out duration-300"
        >
          <p className="p-2 text-accent dark:text-accent-dark uppercase font-mono font-bold backdrop-blur-xs shadow-xs rounded-full border border-neutral-400 dark:border-neutral-700 bg-neutral-300/30 dark:bg-neutral-900/30 hover:bg-neutral-400/30 dark:hover:bg-neutral-700/30 transition ease-in-out duration-300">
            Lets build something cool
          </p>
          <div className="absolute top-1 left-0 backdrop-blur-xs shadow-xs rounded-full border border-neutral-400 dark:border-neutral-700 bg-neutral-300/30 dark:bg-neutral-900/30 w-full h-full -z-10" />
        </Link>
      </Container>
    </section>
  );
}
