import Container from "../ui/Container";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";
import BentoItem from "../ui/BentoItem";

export default function SkillsStack() {
  return (
    <section
      id="SkillsStack"
      className="relative bg-gradient-to-t from-transparent to-white dark:to-black text-primary dark:text-primary-dark py-16"
    >
      <Container className="flex flex-col min-h-screen items-center justify-center gap-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center bg-gradient-to-b from-neutral-200 to-neutral-900 dark:from-neutral-800 dark:to-neutral-100 bg-clip-text text-transparent">
          Skills & Stack
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr h-full w-full gap-4">
          <BentoItem
            title="HTML"
            description="Markup language, skeleton of the web."
            progress={100}
            icon={<SiHtml5 />}
            color="group-hover:text-orange-500"
            colSpan={1}
            rowSpan={1}
          />
          <BentoItem
            title="CSS"
            description="Colors, sizes, margins & paddings. Stylesheet for HTML."
            progress={95}
            icon={<SiCss3 />}
            color="group-hover:text-blue-500"
            colSpan={1}
            rowSpan={1}
          />
          <BentoItem
            title="Tailwind CSS"
            description="CSS Framework used to speed up the development process."
            progress={95}
            icon={<SiTailwindcss />}
            color="group-hover:text-sky-500"
            colSpan={1}
            rowSpan={1}
          />
          <BentoItem
            title="JavaScript"
            description="The muscle of websites."
            progress={50}
            icon={<SiJavascript />}
            color="group-hover:text-yellow-300"
            colSpan={1}
            rowSpan={1}
          />
          <BentoItem
            title="React"
            progress={50}
            icon={<SiReact />}
            color="group-hover:text-cyan-500"
            colSpan={1}
            rowSpan={1}
          />
          <BentoItem
            title="Typescript"
            description="Type-safe JavaScript"
            progress={50}
            icon={<SiTypescript />}
            color="group-hover:text-sky-600"
            colSpan={1}
            rowSpan={1}
          />
          <BentoItem
            title="Next.js"
            description="React based, powerfull Framework for the modern web."
            progress={50}
            icon={<SiNextdotjs />}
            color="group-hover:invert-100"
            colSpan={1}
            rowSpan={1}
          />
          <BentoItem
            title="Framer Motion"
            description="Fancy animations and interactions."
            progress={50}
            icon={<SiFramer />}
            color="group-hover:invert-100"
            colSpan={1}
            rowSpan={1}
          />
        </div>
      </Container>
    </section>
  );
}
