import Container from "../ui/Container";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-transparent to-white dark:to-black h-svh">
      <Container className="flex flex-col items-center justify-center h-full text-center gap-4">
        <h2 className="text-4xl md:text-6xl">Nikita Rodionov</h2>
        <h1 className="text-5xl md:text-7xl font-extrabold text-neutral-900 dark:text-neutral-100">
          Front-end Dev. / IT Enthusiast
        </h1>
        <p className="text-md md:text-xl pb-6">
          I build for the web — with the mindset of a system architect. From UI
          to deployment, I understand the <span className="font-bold text-neutral-900 dark:text-neutral-100">full stack</span>.
        </p>
        <Link
          href="#contact"
          className="relative font-mono z-10 hover:translate-y-1 transition ease-in-out duration-300"
        >
          <p className="p-2 text-purple-600 dark:text-lime-400 uppercase font-bold backdrop-blur-xs shadow-xs rounded-full border border-neutral-400 dark:border-neutral-700 bg-neutral-200/30 dark:bg-neutral-900/30 hover:bg-neutral-400/30 dark:hover:bg-neutral-700/30 transition ease-in-out duration-300">
            Lets build something cool
          </p>
          <div className="absolute top-1 left-0 backdrop-blur-xs shadow-xs rounded-full border border-neutral-400 dark:border-neutral-700 bg-neutral-200/30 dark:bg-neutral-900/30 w-full h-full -z-10" />
        </Link>
      </Container>
    </section>
  );
}
