import React from 'react';

import { BackgroundGradient } from './ui/BackgroundGradient';
import { MeSwiper } from '@/components';
import { mySkills } from '@/constants';

const skills = mySkills.map((skill) =>
  <BackgroundGradient key={skill} className="center bg-black-100 rounded-full aspect-[1/1]" containerClassName="w-full lg:w-[80%] min-w-[150px]">{skill}</BackgroundGradient>);

export const Skills = () => {
  return (
    <div id="skills" className="flex flex-col w-[80%] m-auto mb-8 pb-8 rounded-2xl text-xl md:text-2xl font-medium bg-black-200">
      <h2 className="text-5xl text-center p-8">Skills</h2>
      <MeSwiper items={skills} />
    </div>
  )
}
