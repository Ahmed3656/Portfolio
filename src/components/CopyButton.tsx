'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconCopy, IconCheck, IconSparkles } from '@tabler/icons-react';

interface CopyButtonProps {
  textToCopy: string
  isCopied: boolean
  onCopy: () => void
}

export const CopyButton = ({ textToCopy, isCopied, onCopy }: CopyButtonProps) => {
  const [sparklePosition, setSparklePosition] = useState({ x: 0, y: 0 })
  const [showSparkle, setShowSparkle] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
    onCopy()

    const x = Math.random() * 100 - 50
    const y = Math.random() * 100 - 50
    setSparklePosition({ x, y })
    setShowSparkle(true)

    setTimeout(() => {
      setShowSparkle(false)
    }, 2000)
  }

  const sparkleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.2, 0.8, 1],
      opacity: [0, 1, 1, 0],
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.button
      onClick={handleCopy}
      className="relative rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isCopied ? <IconCheck size={18} className="text-green-400" /> : <IconCopy size={18} />}

      {showSparkle && isCopied && (
        <motion.div
          className="absolute"
          style={{
            x: sparklePosition.x,
            y: sparklePosition.y,
            pointerEvents: "none",
          }}
          variants={sparkleVariants}
          initial="hidden"
          animate="visible"
        >
          <IconSparkles className="text-yellow-300" size={24} />
        </motion.div>
      )}
    </motion.button>
  )
}
