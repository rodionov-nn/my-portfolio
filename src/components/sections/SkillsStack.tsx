import Container from "../ui/Container";
import { GridBackground } from "../ui/GridBackground";

export default function SkillsStack() {
    return (
        <section id="SkillsStack" className="relative z-0 bg-neutral-100 dark:bg-neutral-900">
            <GridBackground>
                <Container className="flex flex-row h-screen items-center justify-center">
                <h1 className="text-6xl md:text-8xl font-extrabold">Skills & Stack</h1>
            </Container>
            </GridBackground>
        </section>
    )
}