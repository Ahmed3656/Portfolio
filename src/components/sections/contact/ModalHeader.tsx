'use client';

import React from 'react';
import { IconX } from '@tabler/icons-react';
import { motion } from 'framer-motion';

import { IconButton } from '@/components';

type ModalHeaderProps = {
  title: string;
  onClose: () => void;
  className?: string;
};

export const ModalHeader = ({ title, onClose, className = '' }: ModalHeaderProps) => {
  return (
    <div className={`flex items-center justify-between border-b border-white/10 p-4 ${className}`}>
      <motion.h2
        className="text-xl font-bold text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {title}
      </motion.h2>

      <motion.div whileHover={{ rotate: 90 }} whileTap={{ scale: 0.9 }}>
        <IconButton onClick={onClose} className="text-white/70 hover:bg-white/10 hover:text-white">
          <IconX size={20} />
        </IconButton>
      </motion.div>
    </div>
  );
};
