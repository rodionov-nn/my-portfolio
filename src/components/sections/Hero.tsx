import Container from "../ui/Container";

export default function Hero() {
  return (
    <section>
      <Container className="flex flex-col justify-end pb-30 items-start min-h-screen gap-4">
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-9xl font-extrabold">
          &lt;Nikita Rodionov Web Developer & Designer Portfolio /&gt;
        </h1>
        <p className="text-lg md:text-4xl font-bold">
          Web Design & Development is in my DNA.
        </p>
      </Container>
    </section>
  );
}
