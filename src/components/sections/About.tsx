import Link from "next/link";
import Container from "../ui/Container";
import { GridBackground } from "../ui/GridBackground";

export default function About() {
  return (
    <section id="about" className="relative z-0 bg-neutral-100 dark:bg-neutral-900">
        <GridBackground>
            <Container className="min-h-screen flex flex-col items-center justify-center text-center gap-4">
          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">About me</h1>
          <div className="flex flex-col text-2xl gap-4">
            <p>
            I&apos;m Nikita, a web developer based in Spain, currently studying Web
            Application Development. My journey began around age 9, when I tried
            to clone Google using HTML — it looked terrible, but something
            sparked. Since then, the web became my playground.
          </p>
          <p>
            At 16, I started learning more seriously: HTML, CSS, JavaScript —
            the classics. I built many raw websites and even completed a
            business website project during a summer hustle. But I wanted more.
            That&apos;s when I discovered <Link href='https://nextjs.org/' target="blank" className="after:content-['_↗'] underline">Next.js</Link> — and it clicked. Speed, structure,
            scalability — it gave me room to design and build the way I
            imagined.
          </p>
          <p>
            I&apos;m not just a frontend dev — I love infrastructure too. I&apos;ve
            experimented with home labs, Linux servers, and tools like Proxmox.
            I enjoy tinkering, optimizing, and building complete ecosystems. My
            mind lives between design systems and terminal prompts.
          </p>
          </div>
        </Container>
        </GridBackground>
    </section>
  );
}
