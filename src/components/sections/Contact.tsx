import Container from "../ui/Container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center text-center gap-4"
    >
      <Container>
        <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-b from-primary-dark to-primary dark:from-primary dark:to-primary-dark bg-clip-text text-transparent">
          Contact
        </h1>
      </Container>
    </section>
  );
}
