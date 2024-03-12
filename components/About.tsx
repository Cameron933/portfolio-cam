"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

      {/* <motion.img
        initial={{
          x: -200,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/Cam_selfie.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:h-[600px] xl:w-[500px]"
      /> */}

      <div className="flex flex-col items-center space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#F7AB0A]">little</span> background
        </h4>
        <p className="text-sm lg:text-base">
          Hi, My name is Cameron (Chu) Huang, a recent Monash Master of IT graduate specializing in
          full-stack development with a 🌟passion for creating solutions that make a difference.
          <br />
          <br />
          Prior to the digital transition, I worked on several construction projects as a civil
          engineer. On the construction site, we not only applied engineering techniques but also
          dealt with site emergencies and did stakeholder management to ensure that the team&apos;s
          work was carried out. This experience gave me a solid foundation in project management and
          teamwork.
          <br />
          <br />I have a diverse set of skills that range from{" "}
          <strong>HTML, CSS, JavaScript</strong> to front-end technologies such as{" "}
          <strong>ReactJS</strong> and <strong>Next.js</strong>, and back-end technologies like{" "}
          <strong>Express.js</strong> and <strong>Spring Boot</strong>. My proficiency extends to
          testing with <strong>Jest</strong> and <strong>JUnit 5</strong>, databases like{" "}
          <strong>MongoDB</strong> and <strong>PostgreSQL</strong>.
          <br />
          <br />
          I&apos;ve had the privilege to work as a Full-stack Developer at Async Working where I
          gained valuable experience in microservice architecture and Agile methodologies. I was
          part of an 8-person team, developing a range of web applications and maintaining an{" "}
          <strong>AWS</strong> ECS-backed Jenkins CI/CD pipeline. I am proud of the work we did
          there, especially the role I played in developing versatile UI components and establishing
          robust backend RESTful APIs.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
