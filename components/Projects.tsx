"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projectsData = [
    {
      id: 1,
      projectName: "CourtCanva",
      projectImg: "/CourtCanva.png",
      description:
        "Developed for a cutting-edge platform, CourtCanva enables customers to design, visualize, and order custom sports courts directly from their homes. Intensive development experience on a mono-repository and microservice architecture project including web apps for clients, franchisees, and admin portals. Collaborated in an 8-person Agile team to analyze business logic, create technical designs from product requirements, manage sprint planning and retrospectives, and delegate tasks into manageable Jira cards. Conducted peer reviews, debugging, and code revisions. Documented technical skills and solutions and fostered pair programming with new team members.",
      url: "https://www.courtcanva.com/",
      tech: [
        "TypeScript",
        "Next.js",
        "React.js",
        "Tailwind",
        "Storybook",
        "SpringBoot",
        "Yup",
        "JWT",
        "PostgreSQL",
        "Jest",
        "Junit5",
        "AWS",
      ],
    },
    {
      id: 2,
      projectName: "TunesSpire",
      projectImg: "/TunesSpire.png",
      description:
        "A music streaming platform providing seamless song playback, tailored music suggestions, subscription choices, and an extensive library of music videos. Through continuous optimization of the code, as well as the use of SSR, SSG, ISR and other different means of rendering, SEO optimization, etc. to ensure that the program performance to meet the user experience.",
      url: "https://www.tunesspire.com/",
      tech: [
        "TypeScript",
        "Next.js",
        "React.js",
        "Tailwind",
        "Storybook",
        "Node.js",
        "Express.js",
        "Supabase",
        "Vercel",
      ],
    },
    {
      id: 3,
      projectName: "A-comosus",
      projectImg: "/git.jpg",
      description:
        "A-comosus is a project designed as a clone of Linktree, aimed at allowing users to create a personalized and easy-to-navigate landing page that houses multiple links. This concept is particularly useful for individuals and businesses looking to share various online resources or social media profiles through a single link. A-comosus seeks to replicate Linktree’s core functionality while possibly introducing additional features or improvements to enhance user experience and interaction.",
      url: "https://github.com/A-Comosus",
      tech: [
        "TypeScript",
        "Next.js",
        "React.js",
        "Tailwind",
        "Node.js",
        "Express.js",
        "GraphQL",
        "Prisma",
        "JWT",
        "SendGrid",
        "AWS",
      ],
    },
    {
      id: 4,
      projectName: "Airbnb Clone",
      projectImg: "/AirBnb.png",
      description:
        "A simple airbnb clone. It is intended to demonstrate the different rendering methods of Next.js such as SSR, SSG, ISR, etc. and simple TypeScript generic, responsive design, etc.",
      url: "https://github.com/Cameron933/airbnb_V2",
      tech: [
        "TypeScript",
        "Next.js",
        "React.js",
        "Tailwind",
        "Node.js",
        "Express.js",
        "Sanity.io",
        "Google Map API",
        "Vercel",
      ],
    },
    {
      id: 5,
      projectName: "YulongFu",
      projectImg: "/git.jpg",
      description:
        "A restaurant homepage based on the ASP.NET framework. Includes login registration, email authentication, and third-party login. Users can learn about the restaurant's menu, make reservations through the calendar, and navigate to the restaurant through an interactive map.",
      url: "https://github.com/Cameron933/Resturant_app",
      tech: [
        "javaScript",
        "Moment.js",
        "Bootstrap",
        "C#",
        "ASP.NET",
        "SQL",
        "Google Calendar",
        "jQuery",
        "SendGrid",
        "Google Map API",
      ],
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        {projectsData.map((item) => (
          <div
            key={item.id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
              }}
              viewport={{ once: true }}
              src={item.projectImg}
              alt={`Project Img of ${item.projectName}`}
            />

            <div className="space-y-2 md:space-y-4 lg:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {item.id + 1} of {projectsData.length}:
                </span>{" "}
                {item.projectName}
              </h4>

              <div className="flex items-center justify-center space-x-2"></div>

              <p className="text-lg text-center md:text-left">{item.description}</p>

            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
