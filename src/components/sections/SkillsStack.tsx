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
  SiGit,
  SiGithub,
  SiNpm,
  SiFigma,
  SiAdobephotoshop,
  SiDocker,
  SiProxmox,
  SiLinux,
  SiMacos,
  SiOpenai,
  SiGithubcopilot,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import GridItem from "../ui/GridItem";
import { BiLogoWindows } from "react-icons/bi";

export default function SkillsStack() {
  return (
    <section
      id="SkillsStack"
      className="relative bg-gradient-to-t from-transparent to-white dark:to-black text-primary dark:text-primary-dark py-16 md:py-32"
    >
      <Container className="flex flex-col min-h-screen items-center justify-center gap-8 py-16">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center bg-gradient-to-b from-neutral-200 to-neutral-900 dark:from-neutral-800 dark:to-neutral-100 bg-clip-text text-transparent">
          Skills & Stack
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-center">Frontend</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr h-full w-full gap-4">
          <GridItem
            title="HTML"
            description="Semantic, accessible, and modern markup. Confident in building structured, SEO-friendly layouts."
            progress={98}
            icon={<SiHtml5 />}
            status="Expert"
            color="group-hover:text-orange-500"
          />
          <GridItem
            title="CSS"
            description="Experienced with Flexbox, Grid, animations, media queries, and custom styling techniques."
            progress={96}
            icon={<SiCss3 />}
            status="Expert"
            color="group-hover:text-blue-500"
          />
          <GridItem
            title="JavaScript"
            description="Comfortable with syntax, control flow, DOM manipulation, and ES6+ features. Learning async patterns."
            progress={45}
            icon={<SiJavascript />}
            status="Learning"
            color="group-hover:text-yellow-300"
          />
          <GridItem
            title="Tailwind CSS"
            description="Primary styling method. Confident in utility-first design, breakpoints, themes, and custom config."
            progress={95}
            icon={<SiTailwindcss />}
            status="Expert"
            color="group-hover:text-sky-500"
          />
          <GridItem
            title="React"
            description="Working with functional components, hooks, props, and local state. Building dynamic UIs."
            progress={55}
            icon={<SiReact />}
            status="Learning"
            color="group-hover:text-cyan-500"
          />
          <GridItem
            title="Typescript"
            description="Learning type annotations, interfaces, and component typing. Applying in React projects."
            progress={40}
            icon={<SiTypescript />}
            status="Learning"
            color="group-hover:text-sky-600"
          />
          <GridItem
            title="Next.js"
            description="Exploring SSR, routing, layouts, and performance optimization for scalable React apps."
            progress={45}
            icon={<SiNextdotjs />}
            status="Learning"
            color="group-hover:invert-100"
          />
          <GridItem
            title="Motion"
            description="Creating smooth UI transitions and microinteractions with Framer Motion in React apps."
            progress={30}
            icon={<SiFramer />}
            status="Learning"
            color="group-hover:invert-100"
          />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-center">Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr h-full w-full gap-4">
          <GridItem
            title="Git"
            description="Daily use for version control, branching, merging, and collaborative development."
            progress={80}
            icon={<SiGit />}
            status="Proficient"
            color="group-hover:text-[#f05033]"
          />
          <GridItem
            title="GitHub"
            description="Hosting repositories, pull requests, project boards, and portfolio deployment."
            progress={100}
            icon={<SiGithub />}
            status="Expert"
            color="group-hover:invert-100"
          />
          <GridItem
            title="VS Code"
            description="Main editor with custom extensions, themes, Git integration, and snippet productivity setup."
            progress={100}
            icon={<VscVscode />}
            status="Expert"
            color="group-hover:text-blue-500"
          />
          <GridItem
            title="npm"
            description="Managing dependencies, scripts, and package.json workflows for modern JavaScript apps."
            progress={100}
            icon={<SiNpm />}
            status="Expert"
            color="group-hover:text-red-500"
          />
          <GridItem
            title="ChatGPT"
            description="Managing dependencies, scripts, and package.json workflows for modern JavaScript apps."
            progress={100}
            icon={<SiOpenai />}
            status="Expert"
            color="group-hover:invert-100"
          />
          <GridItem
            title="Copilot"
            description="Managing dependencies, scripts, and package.json workflows for modern JavaScript apps."
            progress={100}
            icon={<SiGithubcopilot />}
            status="Expert"
            color="group-hover:invert-100"
          />
          <GridItem
            title="Figma"
            description="Wireframing, prototyping, UI mockups, and developer handoff in design-to-code workflow."
            progress={80}
            icon={<SiFigma />}
            status="Proficient"
            color="group-hover:invert-100"
          />
          <GridItem
            title="Photoshop"
            description="Image editing and graphics preparation for UI design, content, and visual assets."
            progress={70}
            icon={<SiAdobephotoshop />}
            status="Proficient"
            color="group-hover:text-sky-600"
          />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-center">Database</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr h-full w-full gap-4">
          <GridItem
            title="PostgreSQL & pgAdmin"
            description="Using containers for isolated development environments and testing setups."
            progress={60}
            icon={<SiPostgresql />}
            status="Learning"
            color="group-hover:text-[#396c94]"
          />
          <GridItem
            title="MongoDB"
            description="Using containers for isolated development environments and testing setups."
            progress={60}
            icon={<SiMongodb />}
            status="Learning"
            color="group-hover:text-lime-500"
          />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-center">OS & DevOps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr h-full w-full gap-4">
          <GridItem
            title="Docker"
            description="Using containers for isolated development environments and testing setups."
            progress={100}
            icon={<SiDocker />}
            status="Expert"
            color="group-hover:text-sky-500"
          />
          <GridItem
            title="Proxmox VE"
            description="Managing virtual machines and containers in a homelab and dev/test environments."
            progress={80}
            icon={<SiProxmox />}
            status="Expert"
            color="group-hover:text-orange-500"
          />
          <GridItem
            title="Linux"
            description="Comfortable with command-line, shell scripting, file system, and package management."
            progress={80}
            icon={<SiLinux />}
            status="Proficient"
            color="group-hover:invert-100"
          />
          <GridItem
            title="Windows"
            description="Primary OS for development and personal use. Familiar with system tools and optimization."
            progress={80}
            icon={<BiLogoWindows />}
            status="Proficient"
            color="group-hover:text-sky-500"
          />
          <GridItem
            title="macOS"
            description="Secondary environment. Familiar with interface, system utilities, and development setup."
            progress={80}
            icon={<SiMacos />}
            status="Proficient"
            color="group-hover:invert-100"
          />
        </div>
      </Container>
    </section>
  );
}
