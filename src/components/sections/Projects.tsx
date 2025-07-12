import Container from "../ui/Container";

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-primary dark:text-primary-dark"
    >
        <Container className="min-h-screen flex flex-col items-center justify-center text-center gap-8 py-16 md:py-32">
          <h1 className="text-5xl md:text-8xl font-serif leading-snug bg-gradient-to-b from-primary-dark to-primary dark:from-primary dark:to-primary-dark bg-clip-text text-transparent">
            Projects
          </h1>
        </Container>
    </section>
  );
}
