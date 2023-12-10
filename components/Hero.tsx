"use client";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgorundCircles from "./BackgorundCircles";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, The Name's Cameron H.", "Guy-who-loves-Next.js", "<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgorundCircles />
      <Image
        className="relative rounded-full object-cover mx-auto h-32 w-32"
        src="/Cam_selfie.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
};

export default Hero;
