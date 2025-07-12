import { SiDocker, SiProxmox, SiLinux, SiMacos } from "react-icons/si";
import { BiLogoWindows } from "react-icons/bi";

export const osDevopsSkills = [
  {
    title: "Docker",
    description: "Using containers for isolated development environments and testing setups.",
    progress: 90,
    icon: SiDocker,
    status: "Proficient",
    color: "group-hover:text-[#2496ED]",
  },
  {
    title: "Proxmox VE",
    description: "Managing virtual machines and containers in a homelab and dev/test environments.",
    progress: 80,
    icon: SiProxmox,
    status: "Proficient",
    color: "group-hover:text-[#E57000]",
  },
  {
    title: "Linux",
    description: "Comfortable with command-line, shell scripting, file system, and package management.",
    progress: 80,
    icon: SiLinux,
    status: "Proficient",
    color: "group-hover:invert-100",
  },
  {
    title: "Windows",
    description: "Primary OS for development and personal use. Familiar with system tools and optimization.",
    progress: 80,
    icon: BiLogoWindows,
    status: "Proficient",
    color: "group-hover:text-sky-500",
  },
  {
    title: "macOS",
    description: "Secondary environment. Familiar with interface, system utilities, and development setup.",
    progress: 80,
    icon: SiMacos,
    status: "Proficient",
    color: "group-hover:invert-100",
  },
];
