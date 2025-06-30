import Container from "../ui/Container"

export default function About() {
    return (
        <section id="about" className="bg-[#70e000] dark:bg-[#3c096c]">
            <Container className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h1 className="text-6xl md:text-9xl font-extrabold">About me</h1>
            </Container>
        </section>
    )
}