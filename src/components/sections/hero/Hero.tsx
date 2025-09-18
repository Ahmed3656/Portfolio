import React from 'react';
import { FaLocationArrow } from 'react-icons/fa6';

import { HeroHighlight, MagicButton, TextGenerateEffect, TypeWriter } from '@/components';
import { pos } from '@/constants';

export const Hero = () => {
  return (
    <div id="home" className="overflow-hidden">
      <HeroHighlight containerClassName="h-screen w-full dark:bg-black-100 bg-white center">
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100">
              Software Engineer & System Architecture Enthusiast.
            </p>

            <TextGenerateEffect
              words="Developing Scalable Web Solutions with Modern Technologies"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-left md:tracking-wider my-4 text-sm md:text-lg lg:text-2xl rounded-[.25rem]">
              Hi! I&apos;m Ahmed, a <TypeWriter textContent={pos} className="whitespace-nowrap" />
            </p>

            <MagicButton title="Check out my work" href="#projects" icon={<FaLocationArrow />} position="right" />
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
};
