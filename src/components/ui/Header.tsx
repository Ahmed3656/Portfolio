'use client';

import React from 'react';
import { motion } from 'framer-motion';

type HeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
  animationDelay?: number;
};

export const Header = ({ title, subtitle, className = '', animationDelay = 0 }: HeaderProps) => (
  <motion.div
    initial={false}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: animationDelay }}
    className={`text-center mb-16 ${className}`}
  >
    <h2 className="text-5xl md:text-6xl font-bold mb-4">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fcfeff] via-[#c8cbd1] to-[#fcfeff]">
        {title}
      </span>
    </h2>
    {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
);
