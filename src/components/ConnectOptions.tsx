'use client';

import type React from 'react';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CopyButton } from '@/components';
import { contactOptions } from '@/constants';

export const ConnectOptions = () => {
  const [copiedOption, setCopiedOption] = useState<string | null>(null)

  const handleCopy = (label: string) => {
    setCopiedOption(label)
    setTimeout(() => {
      setCopiedOption(null)
    }, 2000)
  }

  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <p className="text-sm text-white/80 mb-4">Choose your preferred way to connect with me directly:</p>

      {contactOptions.map((option, index) => (
        <motion.div
          key={option.label}
          className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.1 },
          }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">{option.icon}</div>
              <div>
                <p className="text-sm font-medium text-white">{option.label}</p>
                <p className="text-xs text-white/70">{option.value}</p>
              </div>
            </div>

            <CopyButton
              textToCopy={option.value}
              isCopied={copiedOption === option.label}
              onCopy={() => handleCopy(option.label)}
            />
          </div>
        </motion.div>
      ))}

      <motion.div
        className="mt-6 text-center text-sm text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Looking forward to connecting with you!
      </motion.div>
    </motion.div>
  )
}
