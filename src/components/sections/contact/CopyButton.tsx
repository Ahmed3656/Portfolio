'use client';

import React, { useState } from 'react';
import { sparkleVariants } from '@/variants';
import { IconCheck, IconCopy, IconSparkles } from '@tabler/icons-react';
import { motion } from 'framer-motion';

import { IconButton } from '@/components';

type CopyButtonProps = {
  textToCopy: string;
  isCopied: boolean;
  onCopy: () => void;
};

export const CopyButton = ({ textToCopy, isCopied, onCopy }: CopyButtonProps) => {
  const [sparklePosition, setSparklePosition] = useState({ x: 0, y: 0 });
  const [showSparkle, setShowSparkle] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    onCopy();

    const x = Math.random() * 100 - 50;
    const y = Math.random() * 100 - 50;
    setSparklePosition({ x, y });
    setShowSparkle(true);

    setTimeout(() => {
      setShowSparkle(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <IconButton onClick={handleCopy} className="text-white/70 hover:bg-white/10 hover:text-white">
          {isCopied ? <IconCheck size={18} className="text-green-400" /> : <IconCopy size={18} />}
        </IconButton>
      </motion.div>

      {showSparkle && isCopied && (
        <motion.div
          className="absolute"
          style={{
            x: sparklePosition.x,
            y: sparklePosition.y,
            pointerEvents: 'none',
          }}
          variants={sparkleVariants}
          initial="hidden"
          animate="visible"
        >
          <IconSparkles className="text-yellow-300" size={24} />
        </motion.div>
      )}
    </div>
  );
};
