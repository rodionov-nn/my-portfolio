import Container from "../ui/Container";

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-primary dark:text-primary-dark"
    >
        <Container className="min-h-screen flex flex-col items-center justify-center text-center gap-8 py-16 md:py-32">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-b from-neutral-200 to-neutral-900 dark:from-neutral-800 dark:to-neutral-100 bg-clip-text text-transparent">
            Projects
          </h1>
        </Container>
    </section>
  );
}
