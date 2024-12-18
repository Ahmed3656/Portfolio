import React from "react";

import TypeWriter from "./ui/TypeWriter";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { HeroHighlight } from "./ui/HeroHighlight";

import { FaLocationArrow } from "react-icons/fa6";
import { pos } from "@/data";

const Hero = () => {
  return (
    <div className="pb-20 overflow-hidden">
      <HeroHighlight containerClassName="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] center">
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100">
              Innovative solutions for modern challenges.
            </p>

            <TextGenerateEffect
              words="Empowering Your Vision Through Modern Web Technologies"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-left md:tracking-wider my-4 text-sm md:text-lg lg:text-2xl rounded-[.25rem]">
              Hi! I&apos;m Ahmed, a <TypeWriter textContent={pos} className="whitespace-nowrap" />
            </p>

            <a href="#about">
              <MagicButton
                title="Check out my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
};

export default Hero;