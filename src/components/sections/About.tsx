import Image from "next/image";
import Container from "../ui/Container";

export default function About() {
  return (
    <section className="relative min-h-[50vh] w-full flex flex-col justify-center items-center text-center overflow-hidden py-10">
      <div className="absolute inset-0 -z-10 select-none">
        <Image
          alt="Background"
          src="/vectors/circle2.svg"
          fill
          quality={100}
          priority
          sizes="100vw"
          className="invert-0 dark:invert-100 rotate-45 object-fill transition duration-500 ease-in-out"
        />
      </div>
      <Container className="p-2 sm:p-4 md:p-6 rounded-xl border border-neutral-700 bg-neutral-100/30 dark:bg-neutral-900/30 backdrop-blur-sm shadow-xl/20">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold pb-2 sm:pb-4">
          About me
        </h1>
        <p className="text-base sm:text-xl md:text-2xl">
          I&apos;m a web developer who codes with curiosity and designs with
          feeling. I love glassmorphism, light, motion, and everything that
          makes interfaces alive.
        </p>
      </Container>
    </section>
  );
}
