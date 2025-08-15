'use client';

import React from 'react';

import { ProjectCard } from '@/components';
import { Project, projects } from '@/constants';

type ProjectsGridProps = {
  priorityThreshold?: number;
};

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ priorityThreshold = 2 }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const isLargeProject = (project: Project): boolean => {
    // Show as large if priority is above threshold or if it's the first few projects
    return project.priority !== undefined && project.priority >= priorityThreshold;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          index={index}
          isLarge={isLargeProject(project)}
          hoveredIndex={hoveredIndex}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
};
