"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  const experiencePageData = [
    {
      id: 1,
      companyImg: "https://www.asyncworking.com/wp-content/uploads/2024/01/async_working_logo.jpg",
      workTitle: "Junior Full-stack Developer",
      company: "Async Working",
      techIconArray: [
        {
          id: 1,
          path: "/git.jpg",
          description: "GitHub",
        },
        {
          id: 2,
          path: "/jira.svg",
          description: "Jira",
        },
        {
          id: 3,
          path: "/figma.png",
          description: "Figma",
        },
        {
          id: 4,
          path: "/vscode.png",
          description: "VScode",
        },
        {
          id: 5,
          path: "/postman.svg",
          description: "Poastman",
        },
        {
          id: 6,
          path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          description: "AWS",
        },
      ],
      startAndEndDate: "Sep, 2022 - Present",
      summary: [
        {
          id: 1,
          content:
            "Agile development with Scrum methodology, Jira for tracking productivity, GitHub workflow for version control",
        },
        {
          id: 2,
          content:
            "Complete AB testing with React.js(Next.js) front-end and Springboot/Node.js(Express.js) back-end",
        },
        {
          id: 3,
          content:
            "Produce high-quality code with comprehensive tests(Jest, React testing library, JUnit 5)",
        },
        {
          id: 4,
          content: "Implement code review for peers and provide revision suggestions",
        },
        {
          id: 5,
          content:
            "Contribute to sprint planning, design, build, refactor and testing of components",
        },
        {
          id: 6,
          content:
            "Managed an AWS ECS-backed Jenkins CI/CD pipeline to automate code deployment to UAT and subsequent production release upon successful user acceptance tests",
        },
      ],
    },

    {
      id: 2,
      companyImg:
        "https://ires.ubc.ca/files/2021/03/monash-university-logo-vector-free-download-11574248228l3ldprvtjm.png",
      workTitle: "Master of IT Student",
      company: "Monash University",
      techIconArray: [
        {
          id: 1,
          path: "/machine learning.png",
          description: "Machine Learning",
        },
        {
          id: 2,
          path: "python.png",
          description: "Python",
        },
        {
          id: 3,
          path: "/sql.png",
          description: "SQL",
        },
        {
          id: 4,
          path: "R.jpg",
          description: "R",
        },
        {
          id: 5,
          path: "java.png",
          description: "Java",
        },
      ],
      startAndEndDate: "Aug, 2020 - Aug, 2022",
      summary: [
        {
          id: 1,
          content: "Achieving a distinction academic points average",
        },
        {
          id: 2,
          content:
            "Course Work: Internet Applications Development, Mobile and Distributed Computing Systems, Software Engineering, Programming in Java, Algorithms and programming in Python, Database, Computer Architecture and Networks, User Interface design and usability...",
        },
        {
          id: 3,
          content:
            "Participated in peer tutoring sessions to help new students better understand the FIT9131 Java and FIT9132 SQL units.",
        },
      ],
    },
    {
      id: 3,
      companyImg: "/zhongjian.png",
      workTitle: "Civil Engineer",
      company: "China Construction Third Engineering Bureau Co., Ltd.",
      techIconArray: [
        {
          id: 1,
          path: "/civil_engineer.png",
          description: "Blueprint Reviewing",
        },
        {
          id: 2,
          path: "/work-safety.png",
          description: "Safty Management",
        },
        {
          id: 3,
          path: "/project-management-icon.jpg",
          description: "Project Management",
        },
        {
          id: 4,
          path: "/stakeholder.png",
          description: "Stakeholders Management",
        },
        {
          id: 5,
          path: "/construction.png",
          description: "Site Inspections",
        },
      ],
      startAndEndDate: "Jun, 2016 - Oct, 2019",
      summary: [
        {
          id: 1,
          content:
            "Agile development with Scrum methodology, Jira for tracking productivity, GitHub workflow for version control",
        },
        {
          id: 2,
          content:
            "Complete AB testing with React.js(Next.js) front-end and Springboot/Node.js(Express.js) back-end",
        },
        {
          id: 3,
          content:
            "Produce high-quality code with comprehensive tests(Jest, React testing library, JUnit 5)",
        },
        {
          id: 4,
          content: "Implement code review for peers and provide revision suggestions",
        },
        {
          id: 5,
          content:
            "Contribute to sprint planning, design, build, refactor and testing of components",
        },
        {
          id: 6,
          content:
            "Managed an AWS ECS-backed Jenkins CI/CD pipeline to automate code deployment to UAT and subsequent production release upon successful user acceptance tests",
        },
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
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x
      snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]"
      >
        {experiencePageData.map((item) => (
          <ExperienceCard
            key={item.id}
            id={item.id}
            companyImg={item.companyImg}
            company={item.company}
            workTitle={item.workTitle}
            techIconArray={item.techIconArray}
            startAndEndDate={item.startAndEndDate}
            summary={item.summary}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
