"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Experience = {
  id: number;
  companyImg: string;
  workTitle: string;
  company: string;
  techIconArray: TechIconItem[];
  startAndEndDate: string;
  summary: SummaryItem[];
};

type TechIconItem = {
  id: number;
  path: string;
  description: string;
};

type SummaryItem = {
  id: number;
  content: string;
};

const ExperienceCard = ({
  companyImg,
  workTitle,
  company,
  techIconArray,
  startAndEndDate,
  summary,
}: Experience) => {
  return (
    <article className="border border-[#F7AB0A] flex flex-col rounded-lg items-center space-y-2 md:space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-4 md:p-6 lg:p10 hover:opacity-100 opacity-40 transition-opacity duration-200">
      <motion.img
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover xl:h-[200px] xl:w-[200px] object-center"
        src={companyImg}
        alt="Company IMG"
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-lg md:text-2xl lg:text-4xl font-light">{workTitle}</h4>
        <p className="font-bold text-lg md:text-xl lg:text-2xl mt-1">{company}</p>
        <div className="flex space-x-2 my-2">
          {techIconArray.map((item) => (
            <React.Fragment key={item.id}>
              <Image
                className="h-10 w-10 rounded-full bg-white"
                src={item.path}
                width={200}
                height={200}
                alt={item.description}
                title={item.description}
              />
            </React.Fragment>
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">{startAndEndDate}</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {summary.map((item) => (
            <React.Fragment key={item.id}>
              <li className="text-sm">{item.content}</li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
