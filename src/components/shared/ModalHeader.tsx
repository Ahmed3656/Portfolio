'use client';

import React from 'react';
import { IconX } from '@tabler/icons-react';
import { motion } from 'framer-motion';

type ModalHeaderProps = {
  title: string;
  onClose: () => void;
};

export const ModalHeader = ({ title, onClose }: ModalHeaderProps) => {
  return (
    <div className="flex items-center justify-between border-b border-white/10 p-4">
      <motion.h2
        className="text-xl font-bold text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {title}
      </motion.h2>
      <motion.button
        onClick={onClose}
        className="rounded-full p-1 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
        whileHover={{ rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <IconX size={20} />
      </motion.button>
    </div>
  );
};
