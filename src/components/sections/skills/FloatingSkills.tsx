import React from 'react';
import { motion } from 'framer-motion';

import { mySkills } from '@/constants';

export const FloatingSkills = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.8, duration: 0.6 }}
    className="mt-16 relative h-20 overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black-100 via-transparent to-black-100 z-10" />
    <div className="flex absolute top-0 left-0 h-full items-center animate-floating-skills whitespace-nowrap">
      <div className="flex gap-4 pr-4">
        {mySkills.map((skill, index) => (
          <div
            key={`floating-${index}`}
            className="flex-shrink-0 px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
          >
            <span className="text-gray-400 text-sm">{skill}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-4 pr-4">
        {mySkills.map((skill, index) => (
          <div
            key={`floating-clone-${index}`}
            className="flex-shrink-0 px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
          >
            <span className="text-gray-400 text-sm">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);
