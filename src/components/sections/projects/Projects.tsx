'use client';

import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { motion } from 'framer-motion';

import { Header, MagicButton, ProjectsGrid } from '@/components';

type ProjectsProps = {
  priorityThreshold?: number;
  showViewAll?: boolean;
  viewAllHref?: string;
  viewAllText?: string;
};

export const Projects: React.FC<ProjectsProps> = ({ priorityThreshold = 2 }) => {
  return (
    <div id="projects" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-cross-neutral-300 dark:bg-cross-neutral-800 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header title="Featured Projects" subtitle="A showcase of my work and creative solutions" />
        <ProjectsGrid priorityThreshold={priorityThreshold} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <MagicButton
            title="View All Projects"
            href="https://github.com/Ahmed3656"
            icon={<FaGithub />}
            position="right"
            target="_blank"
          />
        </motion.div>
      </div>
    </div>
  );
};
