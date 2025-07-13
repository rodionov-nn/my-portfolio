import Container from "../ui/Container";
import React from "react";
import GridItem from "../ui/GridItem";
import { frontendSkills } from "../../data/frontendSkills";
import { toolsSkills } from "../../data/toolsSkills";
import { databaseSkills } from "../../data/databaseSkills";
import { osDevopsSkills } from "../../data/osDevopsSkills";

export default function SkillsStack() {
  return (
    <section
      id="SkillsStack"
      className="relative bg-gradient-to-b from-white dark:from-black to-white/50 dark:to-black/50 text-primary dark:text-primary-dark py-16 md:py-32"
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
