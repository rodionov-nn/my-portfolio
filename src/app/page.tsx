import { Hero, About, SkillsStack, Contact, Projects } from "@/components/sections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nikita Rodionov — Portfolio",
  description:
    "Hi, I’m Nikita. I build interactive, emotional, and modern websites using React, Next.js, and Tailwind CSS.",
  openGraph: {
    title: "Nikita Rodionov — Portfolio",
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
      <About />
      <Projects />
      <SkillsStack />
      <Contact />
    </>
  );
}
