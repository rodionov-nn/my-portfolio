import Container from "../ui/Container";
import ShadowEllipse from "../ui/ShadowEllipse";

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative min-h-screen flex flex-col items-center justify-center text-center gap-4"
    >
      <Container>
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-b from-neutral-200 to-neutral-900 dark:from-neutral-800 dark:to-neutral-100 bg-clip-text text-transparent">
          Vision
        </h1>
      </Container>
      <ShadowEllipse />
    </section>
  );
}
