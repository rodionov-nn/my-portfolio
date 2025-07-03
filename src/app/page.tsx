import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SkillsStack from "@/components/sections/SkillsStack";
import Projects from "@/components/sections/Projects";
import { GridBackground } from "@/components/ui/GridBackground";

export const metadata: Metadata = {
  title: "Nikita Rodionov — Web Developer & Designer",
  description:
    "Hi, I’m Nikita. I build interactive, emotional, and modern websites using React, Next.js, and Tailwind CSS.",
  openGraph: {
    title: "Nikita Rodionov — Web Developer & Designer",
    description: "Creative and modern portfolio.",
    images: [
      {
        url: "/images/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Nikita Rodionov Portfolio",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-white dark:bg-black z-0">
        <GridBackground>
          <About />
          <SkillsStack />
          <Projects />
        </GridBackground>
      </div>
    </>
  );
}
