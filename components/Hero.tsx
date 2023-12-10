import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, The Name's Cameron H.", "Guy-who-loves-Next.js", "<ButLovesToCodeMore/>"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div>
      <span>{text}</span>
      <Cursor cursorColor="#F7AB0A" />
    </div>
  );
};

export default Hero;
