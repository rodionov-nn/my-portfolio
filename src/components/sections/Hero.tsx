import Container from "../ui/Container";

export default function Hero() {
  return (
    <section>
      <Container className="flex flex-col justify-end pb-30 items-start min-h-screen gap-6">
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-9xl font-extrabold">
          &lt;Nikita Rodionov Portfolio/&gt;
        </h1>
        <h2 className="text-md sm:text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold">Web Developer, Designer & IT Enthusiast</h2>
        <p className="text-lg md:text-4xl font-bold italic">
          Web Development & <span className="font-sedgwick-ave-display not-italic">Design</span> is in my <span className="text">DNA</span>.
        </p>
      </Container>
    </section>
  );
}
