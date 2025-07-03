import Container from "../ui/Container";
import ShadowEllipse from "../ui/ShadowEllipse";

export default function SkillsStack() {
  return (
    <section id="SkillsStack" className="relative">
      <Container className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-extrabold">Skills & Stack</h1>
      </Container>
      <ShadowEllipse />
    </section>
  );
}
