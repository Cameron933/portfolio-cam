"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex ">
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
        className="w-32 h-32 rounded-full object-cover xl:h-[200px] xl:w-[200px] object-top"
        src="/Cam_selfie.jpg"
        alt=""
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">Full-stack developer</h4>
        <p className="font-bold text-2xl mt-1">Cameron Huang</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483cla8174556463-500x500.png"
            width={200}
            height={200}
            alt=""
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="/Cam_selfie.jpg"
            width={200}
            height={200}
            alt=""
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="/Cam_selfie.jpg"
            width={200}
            height={200}
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Start work... -Ended</p>

        <ul>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
