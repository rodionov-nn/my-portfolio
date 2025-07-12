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
      className="relative bg-gradient-to-t from-transparent to-white dark:to-black text-primary dark:text-primary-dark py-16 md:py-32"
    >
      <Container className="flex flex-col min-h-screen items-center justify-center gap-8 md:gap-16 py-16">
        <h1 className="text-5xl md:text-8xl font-serif text-center bg-gradient-to-b from-primary-dark to-primary dark:from-primary dark:to-primary-dark bg-clip-text text-transparent">
          Skills & Stack
        </h1>
        <h2 className="text-4xl md:text-6xl text-center font-serif">Frontend:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr h-full w-full gap-4">
          {frontendSkills.map((skill, idx) => (
            <GridItem key={skill.title + idx} {...skill} icon={skill.icon && skill.icon ? React.createElement(skill.icon) : null} />
          ))}
        </div>
        <h2 className="text-4xl md:text-6xl text-center font-serif">Tools:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr h-full w-full gap-4">
          {toolsSkills.map((skill, idx) => (
            <GridItem key={skill.title + idx} {...skill} icon={skill.icon && skill.icon ? React.createElement(skill.icon) : null} />
          ))}
        </div>
        <h2 className="text-4xl md:text-6xl text-center font-serif">Database:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr h-full w-full gap-4">
          {databaseSkills.map((skill, idx) => (
            <GridItem key={skill.title + idx} {...skill} icon={skill.icon && skill.icon ? React.createElement(skill.icon) : null} />
          ))}
        </div>
        <h2 className="text-4xl md:text-6xl text-center font-serif">OS & DevOps:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr h-full w-full gap-4">
          {osDevopsSkills.map((skill, idx) => (
            <GridItem key={skill.title + idx} {...skill} icon={skill.icon && skill.icon ? React.createElement(skill.icon) : null} />
          ))}
        </div>
      </Container>
    </section>
  );
}
