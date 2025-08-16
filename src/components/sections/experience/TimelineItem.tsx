import React from 'react';
import { ExperienceItem } from '@/types';
import { motion, Variants } from 'framer-motion';

import { clx } from '@/utils';

type TimelineItemProps = {
  experience: ExperienceItem;
  index: number;
  isSelected: boolean;
  onClick: () => void;
  variants: Variants;
};

export const TimelineItem: React.FC<TimelineItemProps> = ({ experience, isSelected, onClick, variants }) => (
  <motion.div
    variants={variants}
    onClick={onClick}
    className={clx(
      'relative pl-20 cursor-pointer group transition-all duration-300',
      isSelected ? 'opacity-100' : 'opacity-60 hover:opacity-80',
    )}
  >
    {/* Timeline Dot */}
    <div
      className={clx(
        'absolute left-8 -translate-x-1/2 top-1 w-4 aspect-square rounded-full border-2 transition-all duration-300',
        isSelected
          ? 'bg-blue-500 border-transparent scale-125'
          : 'bg-black-100 border-gray-600 group-hover:border-[#fcfeff]',
      )}
    >
      {isSelected && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100 to-[#fcfeff] animate-ping"></div>
      )}
    </div>

    {/* Timeline Content */}
    <div className="space-y-1">
      <h3
        className={clx(
          'font-semibold text-lg transition-colors duration-300',
          isSelected ? 'text-white' : 'text-gray-400 group-hover:text-gray-300',
        )}
      >
        {experience.title}
      </h3>
      <p className="text-sm text-gray-500">{experience.company}</p>
      <p className="text-xs text-gray-600">{experience.duration}</p>
    </div>
  </motion.div>
);
