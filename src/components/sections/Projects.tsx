import Container from "../ui/Container";

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center text-center gap-4">
            <Container>
                <h1 className="text-6xl md:text-8xl leading-relaxed font-extrabold bg-gradient-to-b from-neutral-200 to-neutral-800 dark:from-neutral-800 dark:to-neutral-200 bg-clip-text text-transparent">Projects</h1>
            </Container>
        </section>
    )
}