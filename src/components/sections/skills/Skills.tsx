'use client';

import React from 'react';

import { FloatingSkills, Header, SkillsGrid } from '@/components';

export const Skills = () => {
  return (
    <div id="skills" className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header title="Skills & Expertise" subtitle="Technologies and tools I work with to bring ideas to life" />
        <SkillsGrid />
        <FloatingSkills />
      </div>
    </div>
  );
};
