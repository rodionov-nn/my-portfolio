import { Container } from "../shared";
import { ClickToAction, Typewriter } from "../ui";

export function Hero() {
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
          Web developer with a sysadmin background — constantly pushing the stack forward.
        </p>
        <ClickToAction />
      </Container>
    </section>
  );
}
