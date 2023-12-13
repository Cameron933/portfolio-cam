import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article>
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
        alt="Picture of the author"
      />
    </article>
  );
};

export default ExperienceCard;
