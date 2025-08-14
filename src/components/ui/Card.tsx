import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { itemVariants } from '@/constants';

type CardProps = {
  children: ReactNode;
  title?: string;
  titleGradient?: string;
  hoverGradient?: string;
  className?: string;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  padding?: number;
  showHoverEffect?: boolean;
};

export const Card = ({
  children,
  title,
  titleGradient = 'from-purple-500 to-pink-500',
  hoverGradient = 'from-purple-500 to-pink-500',
  className = '',
  rounded = '3xl',
  padding = 8,
  showHoverEffect = true,
}: CardProps) => (
  <motion.div variants={itemVariants} className={`relative group ${className}`}>
    {showHoverEffect && (
      <div
        className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-${rounded} blur-xl`}
        style={{
          background: `linear-gradient(to right, ${hoverGradient.split(' ')[1]}, ${hoverGradient.split(' ')[3]})`,
        }}
      />
    )}

    <div
      className={`relative min-h-full bg-black-200/50 backdrop-blur-sm border border-white/10 rounded-${rounded} p-${padding} hover:border-white/20 transition-all duration-300`}
    >
      {title && (
        <h3 className={`text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${titleGradient}`}>
          {title}
        </h3>
      )}
      {children}
    </div>
  </motion.div>
);
