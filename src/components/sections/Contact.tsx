import Container from "../ui/Container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center text-center gap-4 bg-gradient-to-t from-transparent to-white dark:to-black"
    >
      <Container>
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-b from-neutral-200 to-neutral-900 dark:from-neutral-800 dark:to-neutral-100 bg-clip-text text-transparent">
          Contact
        </h1>
      </Container>
    </section>
  );
}
