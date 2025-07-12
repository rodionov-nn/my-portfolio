import Container from "../ui/Container";
import { GridBackground } from "../ui/GridBackground";
import ShadowEllipse from "../ui/ShadowEllipse";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white dark:bg-black text-primary dark:text-primary-dark z-10"
    >
      <GridBackground>
        <Container className="min-h-screen flex flex-col items-center justify-center text-center gap-8 py-16 md:py-32">
          <h1 className="text-5xl md:text-8xl font-serif bg-gradient-to-b from-primary-dark to-primary dark:from-primary dark:to-primary-dark bg-clip-text text-transparent">
            About me
          </h1>

          <div className="flex flex-col text-md md:text-xl text-justify gap-2 max-w-3xl indent-8">
            <p>
              Hello! I&apos;m Nikita — a junior web developer from Russia,
              currently based in Spain. Welcome to my corner of the internet.
            </p>
            <p>
              I&apos;ve been interested in IT from a very young age, and when it
              came time to choose a career path, I enrolled in a two-year degree
              focused on IT Systems & Networks. That experience gave me a solid
              foundation in system administration — but more importantly, it
              sparked my interest in web development.
            </p>
            <p>
              Since late 2022, I started building simple websites using just
              HTML, CSS, and a bit of JavaScript when needed. I kept
              experimenting, constantly pushing myself to see how far I could
              go. By mid-2023, I landed my first small freelance project — a
              hardcoded website for a local business. It was simple, but it
              worked, and it significantly leveled up my skills.
            </p>
            <p>
              Throughout my studies, I continued working on web projects, and by
              mid-2024, I was confidently building solid static websites. At
              that point, I started exploring how to make my work more scalable
              and dynamic. That search led me to Next.js, which felt like
              exactly what I was looking for — flexible, modern, and perfect for
              my needs. This portfolio is my very first project built with it.
            </p>
            <p>
              I primarily see myself as a Frontend Developer, but I&apos;m also
              curious about the Full Stack path in the future. Besides web
              development, I still carry my system admin background with me — I
              enjoy working with hardware, servers, the Linux CLI, networking,
              virtualization, and containers.
            </p>
            <p>
              Finally, I care deeply about aesthetic and detail. I polish every
              piece of my work until it feels harmoniously complete. That
              sometimes slows me down — but the quality is always worth it.
            </p>
          </div>
        </Container>
      </GridBackground>
      <ShadowEllipse />
    </section>
  );
}
