"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

      <motion.img
        initial={{
          x: -200,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/Cam_selfie.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:h-[600px] xl:w-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4l font-semibold">
          Here is a <span className="underline decoration-[#F7AB0A]">little</span> background
        </h4>
        <p className="text-sm">
          Hi, I&apos;m Cameron Huang, an IT professional specializing in full-stack development
          with a passion for creating solutions that make a significant impact. I have a diverse set
          of skills that range from JavaScript, TypeScript, and Python to front-end technologies
          such as ReactJS and Next.js, and back-end technologies like Spring Boot and .NET. My
          proficiency extends to testing with Jest and JUnit 5, databases like MySQL and PostgreSQL,
          and even DevOps with Docker and Vercel CI/CD. I&apos;ve had the privilege to work as a
          Full-stack Developer at Async Working where I gained valuable experience in microservice
          architecture and Agile methodologies. I was part of an 8-person team, developing a range
          of web applications and maintaining an AWS ECS-backed Jenkins CI/CD pipeline. I am proud
          of the work we did there, especially the role I played in developing versatile UI
          components and establishing robust backend RESTful APIs. My recent project, TunesSpire, a
          music streaming platform, is a testament to my love for problem-solving and creating
          user-centric solutions. Here, I leveraged my skills to achieve perfect Lighthouse
          performance scores of 100/100. Before transitioning to tech, I worked as a Civil Engineer
          at China Construction Third Engineering Bureau Co., Ltd. in China. The experience
          instilled in me a strong foundation in project management and teamwork.
        </p>
      </div>
    </div>
  );
};

export default About;
