'use client';

import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Card, Item } from '@/components';
import { Project } from '@/constants/projects';
import { clx } from '@/utils';

type ProjectCardProps = {
  project: Project;
  index: number;
  isLarge: boolean;
  hoveredIndex: number | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  gridClasses?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isLarge,
  hoveredIndex,
  onMouseEnter,
  onMouseLeave,
  gridClasses,
}) => {
  const isHovered = hoveredIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={clx(
        'relative rounded-2xl group cursor-pointer',
        gridClasses || (isLarge ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'),
      )}
    >
      <Card
        className="w-full h-full overflow-hidden rounded-2xl"
        padding={0}
        hoverGradient={
          index % 3 === 0
            ? 'from-blue-500 to-cyan-500'
            : index % 3 === 1
              ? 'from-purple-500 to-pink-500'
              : 'from-orange-500 to-red-500'
        }
      >
        {/* Project Image */}
        <div className="absolute inset-0">
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
          />
          {/* Base gradient overlay */}
          <div className="absolute -inset-[1px] bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

          {/* Hover gradient overlay - full coverage */}
          <div
            className={clx(
              'absolute inset-0 bg-gradient-to-br transition-opacity duration-500 rounded-2xl',
              index % 3 === 0
                ? 'from-blue-500/20 to-cyan-500/20'
                : index % 3 === 1
                  ? 'from-purple-500/20 to-pink-500/20'
                  : 'from-gray-700/10 via-slate-500/15 to-gray-800/10',
              isHovered ? 'opacity-100' : 'opacity-0',
            )}
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
          {/* Header */}
          <div className="flex justify-between items-start">
            {/* Project Title */}
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-xl flex-1"
              style={{
                textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.7)',
              }}
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>

            {/* Preview Button */}
            <motion.button
              className="group/btn relative flex-shrink-0"
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button background with glassmorphism */}
              <div className="absolute inset-0 w-11 h-11 bg-white/10 backdrop-blur-md rounded-full border border-[#aaaaaa] transition-all duration-300 group-hover/btn:bg-white/20 group-hover/btn:border-white/40" />

              {/* Icon container */}
              <div className="relative w-11 h-11 flex items-center justify-center text-white transition-all duration-300 group-hover/btn:text-white">
                <FaExternalLinkAlt
                  className="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-12 group-hover/btn:scale-110"
                  style={{
                    filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))',
                  }}
                />
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 w-11 h-11 rounded-full bg-white/20 scale-0 group-hover/btn:scale-100 transition-transform duration-300 blur-md" />
            </motion.button>
          </div>

          <div>
            {/* Project Description */}
            <motion.p
              className="text-gray-300 text-sm md:text-base mb-4 line-clamp-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 10,
              }}
              transition={{ duration: 0.3 }}
            >
              {project.description || 'An innovative solution crafted with modern technologies'}
            </motion.p>

            {/* Tech Stack Tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.tech.map((tech, techIndex) => (
                <Item
                  key={tech}
                  delay={techIndex * 0.05}
                  hoverGradient="from-white/20 to-white/10"
                  padding="px-3 py-1"
                  rounded="2xl"
                  className="text-xs"
                  showHoverEffect={false}
                  hoverScale={1.02}
                >
                  {tech}
                </Item>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white group/link"
              animate={{
                x: isHovered ? 0 : -10,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <span className="text-sm font-medium">View Project</span>
              <svg
                className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Shimmer Effect */}
        <motion.div className="absolute inset-0 rounded-2xl -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent z-30 pointer-events-none" />
      </Card>
    </motion.div>
  );
};
