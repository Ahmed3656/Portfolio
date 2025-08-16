'use client';

import React, { useEffect, useRef, useState } from 'react';
import { modalVariants } from '@/variants';
import { AnimatePresence, motion } from 'framer-motion';

import { ConnectOptions, MessageForm, ModalHeader, TabNavigation } from '@/components';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [activeTab, setActiveTab] = useState<'message' | 'connect'>('message');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-black-100 border border-white/10 shadow-xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-purple/20 blur-3xl" />
              <div className="absolute -right-20 bottom-0 h-40 w-40 rounded-full bg-blue-100/20 blur-3xl" />
            </div>

            <div className="relative z-10">
              <ModalHeader title="Let's Connect" onClose={onClose} />
              <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

              <div className="p-4">
                <AnimatePresence mode="wait">
                  {activeTab === 'message' ? (
                    <MessageForm key="message-form" onClose={onClose} />
                  ) : (
                    <ConnectOptions key="connect-options" />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
