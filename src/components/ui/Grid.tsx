import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { containerVariants } from '@/constants';

type GridProps = {
  children: ReactNode;
  columns?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: number;
  className?: string;
};

export const Grid = ({ children, columns = { default: 1, md: 3 }, gap = 8, className = '' }: GridProps) => {
  const getGridClasses = () => {
    const { default: def, sm, md, lg, xl } = columns;
    let classes = 'grid';

    if (gap === 4) classes += ' gap-4';
    else if (gap === 6) classes += ' gap-6';
    else if (gap === 8) classes += ' gap-8';
    else classes += ` gap-${gap}`;

    if (def === 1) classes += ' grid-cols-1';
    else if (def === 2) classes += ' grid-cols-2';
    else if (def === 3) classes += ' grid-cols-3';
    else if (def === 4) classes += ' grid-cols-4';

    if (sm === 1) classes += ' sm:grid-cols-1';
    else if (sm === 2) classes += ' sm:grid-cols-2';
    else if (sm === 3) classes += ' sm:grid-cols-3';
    else if (sm === 4) classes += ' sm:grid-cols-4';

    if (md === 1) classes += ' md:grid-cols-1';
    else if (md === 2) classes += ' md:grid-cols-2';
    else if (md === 3) classes += ' md:grid-cols-3';
    else if (md === 4) classes += ' md:grid-cols-4';

    if (lg === 1) classes += ' lg:grid-cols-1';
    else if (lg === 2) classes += ' lg:grid-cols-2';
    else if (lg === 3) classes += ' lg:grid-cols-3';
    else if (lg === 4) classes += ' lg:grid-cols-4';

    if (xl === 1) classes += ' xl:grid-cols-1';
    else if (xl === 2) classes += ' xl:grid-cols-2';
    else if (xl === 3) classes += ' xl:grid-cols-3';
    else if (xl === 4) classes += ' xl:grid-cols-4';

    return classes;
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`${getGridClasses()} ${className}`}
    >
      {children}
    </motion.div>
  );
};
