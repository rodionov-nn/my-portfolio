import Container from "../ui/Container";

export default function SkillsStack() {
  return (
    <section id="SkillsStack" className="relative">
      <Container className="flex flex-row h-screen items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-extrabold">Skills & Stack</h1>
      </Container>
      <div className="absolute inset-0 -z-10 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
    </section>
  );
}
