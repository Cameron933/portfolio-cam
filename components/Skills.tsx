"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  const skillData = [
    {
      id: 1,
      imgPath: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
      description: "Next.js",
      directionLeft: true,
    },
    {
      id: 2,
      imgPath:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      description: "React",
      directionLeft: true,
    },
    {
      id: 3,
      imgPath:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      description: "Node.js",
      directionLeft: false,
    },
    {
      id: 4,
      imgPath:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
      description: "Redux",
      directionLeft: false,
    },
    {
      id: 5,
      imgPath:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      description: "JavaScript",
      directionLeft: true,
    },
    {
      id: 6,
      imgPath:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      description: "TypeScript",
      directionLeft: true,
    },
    {
      id: 7,
      imgPath:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      description: "HTML5",
      directionLeft: false,
    },
    {
      id: 8,
      imgPath:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      description: "CSS3",
      directionLeft: false,
    },
    {
      id: 9,
      imgPath: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      description: "Tailwind",
      directionLeft: true,
    },
    {
      id: 10,
      imgPath:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
      description: "Sass",
      directionLeft: true,
    },
    {
      id: 11,
      imgPath:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      description: "Java",
      directionLeft: false,
    },
    {
      id: 12,
      imgPath: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
      description: "Spring Boot",
      directionLeft: false,
    },
    {
      id: 13,
      imgPath:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      description: "MongoDB",
      directionLeft: true,
    },
    {
      id: 14,
      imgPath:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      description: "PostgreSQL",
      directionLeft: true,
    },
    {
      id: 15,
      imgPath:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      description: "AWS",
      directionLeft: false,
    },
    {
      id: 16,
      imgPath:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      description: "Docker",
      directionLeft: false,
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for its Name
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skillData.map((item) => (
          <Skill
            key={item.id}
            imgPath={item.imgPath}
            description={item.description}
            directionLeft={item.directionLeft}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
