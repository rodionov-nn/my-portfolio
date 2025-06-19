import MainHeroImage from "../ui/MainHeroImage";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative h-screen w-full pb-10 flex flex-col justify-end items-center text-center">
      <MainHeroImage />

      <Container className="p-2 sm:p-4 md:p-6 text-left rounded-xl bg-neutral-100/30 dark:bg-neutral-900/30 backdrop-invert-100 border border-neutral-700 backdrop-blur-[2px] shadow-xl/20">
        <div className="mb-3 sm:mb-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
          <h1>
            &lt;Nikita Rodionov
            <br />
            Web Developer & Designer
            <br />
            Portfolio /&gt;
          </h1>
        </div>
        <p className="text-lg sm:text-2xl md:text-3xl">
          Hello — I&apos;m [Nikita Rodionov], a web developer who codes with
          curiosity and designs with feeling. I love glassmorphism, light,
          motion, and everything that makes interfaces alive.
        </p>
      </Container>
    </section>
  );
}
