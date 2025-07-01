import Container from "../ui/Container";

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center text-center gap-4">
            <Container>
                <h1 className="leading-32 text-6xl md:text-8xl font-extrabold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">Projects</h1>
            </Container>
        </section>
    )
}