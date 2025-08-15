import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ItemProps = {
  children: ReactNode;
  delay?: number;
  hoverGradient?: string;
  className?: string;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  padding?: string;
  showHoverEffect?: boolean;
  hoverScale?: number;
  textAlign?: 'left' | 'center' | 'right';
};

export const Item = ({
  children,
  delay = 0,
  hoverGradient = 'from-purple-500 to-pink-500',
  className = '',
  rounded = '2xl',
  padding = 'px-4 py-3',
  showHoverEffect = true,
  hoverScale = 1.05,
  textAlign = 'center',
}: ItemProps) => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{
      delay,
      type: 'spring',
      stiffness: 200,
      damping: 15,
    }}
    whileHover={{ scale: hoverScale }}
    className={`relative group/item ${className}`}
  >
    {showHoverEffect && (
      <div
        className={`absolute inset-0 bg-gradient-to-r ${hoverGradient} rounded-${rounded} opacity-0 group-hover/item:opacity-20 transition-opacity duration-300 blur-md`}
      />
    )}
    <div
      className={`relative bg-black-100/80 backdrop-blur-sm border border-white/5 rounded-${rounded} ${padding} text-${textAlign} hover:border-white/20 transition-all duration-300`}
    >
      <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">{children}</span>
    </div>
  </motion.div>
);
