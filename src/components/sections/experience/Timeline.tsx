import React from 'react';
import { ExperienceItem } from '@/types';
import { containerVariants, timelineItemVariants } from '@/variants';
import { motion } from 'framer-motion';

import { TimelineItem } from '@/components';

type TimelineProps = {
  experiences: ExperienceItem[];
  selectedIndex: number;
  onSelect: (index: number) => void;
};

export const Timeline: React.FC<TimelineProps> = ({ experiences, selectedIndex, onSelect }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="lg:col-span-1"
  >
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-8 -translate-x-1/2 top-1 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-500 to-transparent"></div>

      {/* Timeline Items */}
      <div className="space-y-20">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={exp.id}
            experience={exp}
            index={index}
            isSelected={selectedIndex === index}
            onClick={() => onSelect(index)}
            variants={timelineItemVariants}
          />
        ))}
      </div>
    </div>
  </motion.div>
);
