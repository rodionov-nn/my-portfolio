import React from "react";
import { Container } from "../shared";
import { GridItem } from "../ui";
import { databaseSkills, frontendSkills, osDevopsSkills, toolsSkills } from "@/data";

export function SkillsStack() {
  return (
    <section
      id="SkillsStack"
      className="relative bg-gradient-to-b from-white dark:from-black via-white/50 dark:via-black/50 to-white dark:to-black text-primary dark:text-primary-dark py-16 md:py-32"
    >
      <Container className="flex flex-col min-h-screen items-center justify-center gap-8 md:gap-16 py-16">
        <h1>
          Skills & Stack
        </h1>
        <h2 className="text-center">Frontend:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr h-full w-full gap-4">
          {frontendSkills.map((skill, idx) => (
            <GridItem key={skill.title + idx} {...skill} icon={skill.icon && skill.icon ? React.createElement(skill.icon) : null} />
          ))}
        </div>
        <h2 className="text-center">Tools:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr h-full w-full gap-4">
          {toolsSkills.map((skill, idx) => (
            <GridItem key={skill.title + idx} {...skill} icon={skill.icon && skill.icon ? React.createElement(skill.icon) : null} />
          ))}
        </div>
        <h2 className="text-center">Database:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr h-full w-full gap-4">
          {databaseSkills.map((skill, idx) => (
            <GridItem key={skill.title + idx} {...skill} icon={skill.icon && skill.icon ? React.createElement(skill.icon) : null} />
          ))}
        </div>
        <h2 className="text-center">OS & DevOps:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr h-full w-full gap-4">
          {osDevopsSkills.map((skill, idx) => (
            <GridItem key={skill.title + idx} {...skill} icon={skill.icon && skill.icon ? React.createElement(skill.icon) : null} />
          ))}
        </div>
      </Container>
    </section>
  );
}
