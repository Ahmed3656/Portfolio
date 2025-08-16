'use client';

import React from 'react';
import { tabVariants } from '@/variants';
import { motion } from 'framer-motion';

type TabNavigationProps = {
  activeTab: string;
  onTabChange: (tab: 'message' | 'connect') => void;
};

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="flex border-b border-white/10">
      <motion.button
        className={`flex-1 py-3 px-4 font-medium ${activeTab === 'message' ? 'text-white' : 'text-white/70'}`}
        onClick={() => onTabChange('message')}
        variants={tabVariants}
        animate={activeTab === 'message' ? 'active' : 'inactive'}
        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>
      <motion.button
        className={`flex-1 py-3 px-4 font-medium ${activeTab === 'connect' ? 'text-white' : 'text-white/70'}`}
        onClick={() => onTabChange('connect')}
        variants={tabVariants}
        animate={activeTab === 'connect' ? 'active' : 'inactive'}
        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
        whileTap={{ scale: 0.98 }}
      >
        Connect Directly
      </motion.button>
    </div>
  );
};
