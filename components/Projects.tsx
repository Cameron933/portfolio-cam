"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
              }}
              viewport={{ once: true }}
              src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>
                UPS clone
              </h4>

              <p className="text-lg text-center md:text-left">
                Hi, I&apos;m Cameron Huang, an IT professional specializing in full-stack
                development with a passion for creating solutions that make a significant impact. I
                have a diverse set of skills that range from JavaScript, TypeScript, and Python to
                front-end technologies such as ReactJS and Next.js, and back-end technologies like
                Spring Boot and .NET. My proficiency extends to testing with Jest and JUnit 5,
                databases like MySQL and PostgreSQL, and even DevOps with Docker and Vercel CI/CD.
                I&apos;ve had the privilege to work as a Full-stack Developer at Async Working where
                I gained valuable experience in microservice architecture and Agile methodologies.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
