'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { clx } from '@/utils';

// Example experience data structure - replace with your actual data from constants
const experiences = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Tech Company',
    location: 'San Francisco, CA',
    duration: 'Jan 2023 - Present',
    description:
      'Leading frontend development initiatives and mentoring junior developers in modern React patterns and best practices.',
    responsibilities: [
      'Architected and implemented scalable React applications',
      'Improved application performance by 40%',
      'Led a team of 5 developers',
    ],
    skills: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
    tools: ['VS Code', 'Figma', 'Jira', 'Git'],
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'StartUp Inc',
    location: 'Remote',
    duration: 'Jun 2021 - Dec 2022',
    description:
      'Developed and maintained multiple web applications using modern JavaScript frameworks and cloud technologies.',
    responsibilities: [
      'Built RESTful APIs using Node.js and Express',
      'Implemented CI/CD pipelines',
      'Designed database schemas',
    ],
    skills: ['Node.js', 'React', 'MongoDB', 'AWS'],
    tools: ['Docker', 'Jenkins', 'Postman', 'GitHub'],
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'Digital Agency',
    location: 'New York, NY',
    duration: 'Jan 2020 - May 2021',
    description:
      'Collaborated with design and backend teams to create responsive web applications and interactive user interfaces.',
    responsibilities: [
      'Developed responsive websites',
      'Collaborated with UX/UI designers',
      'Participated in code reviews',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    tools: ['Webpack', 'Sass', 'Adobe XD', 'Slack'],
  },
];

export const Experience = () => {
  const [selectedExp, setSelectedExp] = React.useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div id="experience" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Work Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I&quot;ve made
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline Navigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

              {/* Timeline Items */}
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    onClick={() => setSelectedExp(index)}
                    className={clx(
                      'relative pl-20 cursor-pointer group transition-all duration-300',
                      selectedExp === index ? 'opacity-100' : 'opacity-60 hover:opacity-80',
                    )}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={clx(
                        'absolute left-6 w-4 h-4 rounded-full border-2 transition-all duration-300',
                        selectedExp === index
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-transparent scale-125 shadow-lg shadow-purple-500/50'
                          : 'bg-black-100 border-gray-600 group-hover:border-purple-500',
                      )}
                    >
                      {selectedExp === index && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-ping"></div>
                      )}
                    </div>

                    {/* Timeline Content */}
                    <div className="space-y-1">
                      <h3
                        className={clx(
                          'font-semibold text-lg transition-colors duration-300',
                          selectedExp === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-300',
                        )}
                      >
                        {exp.title}
                      </h3>
                      <p className="text-sm text-gray-500">{exp.company}</p>
                      <p className="text-xs text-gray-600">{exp.duration}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Details */}
          <motion.div
            key={selectedExp}
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
                    <h3 className="text-3xl font-bold text-white mb-2 sm:mb-0">{experiences[selectedExp].title}</h3>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm text-gray-300 border border-white/10">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {experiences[selectedExp].duration}
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
                      {experiences[selectedExp].company}
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
                      {experiences[selectedExp].location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{experiences[selectedExp].description}</p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {experiences[selectedExp].responsibilities.map((resp, index) => (
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
                      {experiences[selectedExp].skills.map((skill) => (
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
                      {experiences[selectedExp].tools.map((tool) => (
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
        </div>
      </div>
    </div>
  );
};
