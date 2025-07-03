import Container from "../ui/Container";
import ShadowEllipse from "../ui/ShadowEllipse";

export default function SkillsStack() {
  return (
    <section id="SkillsStack" className="relative">
      <Container className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-b from-neutral-200 to-neutral-900 dark:from-neutral-800 dark:to-neutral-100 bg-clip-text text-transparent">
          Skills & Stack
        </h1>
      </Container>
      <ShadowEllipse />
    </section>
  );
}
