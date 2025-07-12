import { SiGit, SiGithub, SiNpm, SiFigma, SiAdobephotoshop, SiOpenai, SiGithubcopilot } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const toolsSkills = [
  {
    title: "Git",
    description: "Daily use for version control, branching, merging, and collaborative development.",
    progress: 80,
    icon: SiGit,
    status: "Proficient",
    color: "group-hover:text-[#F05032]",
  },
  {
    title: "GitHub",
    description: "Hosting repositories, pull requests, project boards, and portfolio deployment.",
    progress: 100,
    icon: SiGithub,
    status: "Expert",
    color: "group-hover:invert-100",
  },
  {
    title: "VS Code",
    description: "Main editor with custom extensions, themes, Git integration, and snippet productivity setup.",
    progress: 100,
    icon: VscVscode,
    status: "Expert",
    color: "group-hover:text-[#2F80ED]",
  },
  {
    title: "npm",
    description: "Managing dependencies, scripts, and package.json workflows for modern JavaScript apps.",
    progress: 100,
    icon: SiNpm,
    status: "Expert",
    color: "group-hover:text-[#CB3837]",
  },
  {
    title: "ChatGPT",
    description: "Daily use as coding assistant, debugger, and idea generator for design, code, and learning.",
    progress: 100,
    icon: SiOpenai,
    status: "Expert",
    color: "group-hover:invert-100",
  },
  {
    title: "Copilot",
    description: "Code completion and AI pair-programming inside VS Code, boosting speed and reducing boilerplate.",
    progress: 100,
    icon: SiGithubcopilot,
    status: "Expert",
    color: "group-hover:invert-100",
  },
  {
    title: "Figma",
    description: "Wireframing, prototyping, UI mockups, and developer handoff in design-to-code workflow.",
    progress: 80,
    icon: SiFigma,
    status: "Proficient",
    color: "group-hover:text-[#F24E1E]",
  },
  {
    title: "Photoshop",
    description: "Image editing and graphics preparation for UI design, content, and visual assets.",
    progress: 70,
    icon: SiAdobephotoshop,
    status: "Proficient",
    color: "group-hover:text-sky-600",
  },
];
