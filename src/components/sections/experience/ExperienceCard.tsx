import React from 'react';
import { ExperienceItem } from '@/types';
import { motion } from 'framer-motion';

type ExperienceCardProps = {
  experience: ExperienceItem;
  selectedIndex: number;
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, selectedIndex }) => (
  <motion.div
    key={selectedIndex}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="lg:col-span-2"
  >
    <div className="relative group">
      {/* Gradient Border Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>

      {/* Card Content */}
      <div className="relative bg-black-200/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h3 className="text-3xl font-bold text-white mb-2 sm:mb-0">{experience.title}</h3>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm text-gray-300 border border-white/10">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {experience.duration}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-gray-400">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              {experience.company}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {experience.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">{experience.description}</p>

        {/* Responsibilities */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-white mb-3">Key Achievements</h4>
          <ul className="space-y-2">
            {experience.responsibilities.map((resp, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 text-gray-400"
              >
                <svg
                  className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{resp}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Skills & Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Skills */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Technical Skills</h4>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg text-sm text-gray-300 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Tools & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {experience.tools.map((tool) => (
                <motion.span
                  key={tool}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg text-sm text-gray-300 border border-white/10 hover:border-orange-500/50 transition-all duration-300"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);
