'use client';

import React from 'react';

import { FloatingSkills, Header, SkillsGrid } from '@/components';

export const Skills = () => {
  return (
    <div id="skills" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 -right-4 w-72 h-72 bg-yellow-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-20 w-72 h-72 bg-purple rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header title="Skills & Expertise" subtitle="Technologies and tools I work with to bring ideas to life" />
        <SkillsGrid />
        <FloatingSkills />
      </div>
    </div>
  );
};
