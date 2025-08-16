'use client';

import React from 'react';

import { Header } from '@/components';
import { experiences } from '@/constants';

import { ExperienceCard } from './ExperienceCard';
import { Timeline } from './Timeline';

export const Experience = () => {
  const [selectedExp, setSelectedExp] = React.useState(0);

  return (
    <div id="experience" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-10 animate-blob"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header title="Work Experience" subtitle="My professional journey and the impact I've made" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Timeline experiences={experiences} selectedIndex={selectedExp} onSelect={setSelectedExp} />

          <ExperienceCard experience={experiences[selectedExp]} selectedIndex={selectedExp} />
        </div>
      </div>
    </div>
  );
};
