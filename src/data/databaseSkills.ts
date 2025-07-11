import { SiPostgresql, SiMongodb } from "react-icons/si";

export const databaseSkills = [
  {
    title: "PostgreSQL & pgAdmin",
    description: "Basic SQL queries, schema design, and management via pgAdmin and Dockerized environments.",
    progress: 60,
    icon: SiPostgresql,
    status: "Learning",
    color: "group-hover:text-[#396c94]",
  },
  {
    title: "MongoDB",
    description: "Experience with NoSQL documents, collections, and CRUD operations using GUI and CLI tools.",
    progress: 60,
    icon: SiMongodb,
    status: "Learning",
    color: "group-hover:text-lime-500",
  },
];
