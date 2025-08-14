'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { ContactModal } from '@/components';
import { footerLinks } from '@/constants';

export const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <footer id="get-in-touch" className="relative w-full border-t border-white/10 overflow-hidden bg-black-100 mt-8">
      <div className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-full w-full bg-black-100" style={{ backgroundSize: '100% 100%' }} />
        </div>

        <div className="absolute left-0 top-0 h-[20rem] w-[20rem] animate-third opacity-10">
          <div className="absolute inset-0 rounded-full bg-purple blur-3xl" />
        </div>
        <div className="absolute right-0 bottom-0 h-[15rem] w-[15rem] animate-fourth opacity-10">
          <div className="absolute inset-0 rounded-full bg-blue-100 blur-3xl" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-4 max-w-xs">
            <div className="relative overflow-hidden">
              <motion.h2
                className="text-xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Ahmed Amr
              </motion.h2>
            </div>
            <motion.p
              className="text-sm text-white-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Creating digital experiences with passion and precision.
            </motion.p>
            <div className="flex space-x-4">
              {footerLinks.map(({ href, icon: Icon, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="relative group text-white-100 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  rel="noreferrer"
                >
                  <div className="absolute inset-0 from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-4 max-w-xs">
            <motion.h3
              className="text-sm font-semibold uppercase tracking-wider text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.h3>
            <motion.p
              className="text-sm text-white-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Have a project in mind? Let&apos;s collaborate and create something amazing together.
            </motion.p>

            <motion.button
              onClick={() => setIsContactModalOpen(true)}
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
              className="relative inline-flex items-center rounded-[0.5rem] border border-white/20 bg-black-100 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-white/5 transition-colors overflow-hidden group"
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              {buttonHovered && (
                <>
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-white"
                      initial={{
                        x: 0,
                        y: 0,
                        opacity: 0.7,
                      }}
                      animate={{
                        x: Math.random() * 100 - 50,
                        y: Math.random() * 100 - 50,
                        opacity: 0,
                        scale: Math.random() * 2 + 1,
                      }}
                      transition={{
                        duration: Math.random() * 0.8 + 0.5,
                        ease: 'easeOut',
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </>
              )}

              <motion.span
                animate={buttonHovered ? { y: [-1, 1, -1] } : { y: 0 }}
                transition={
                  buttonHovered
                    ? {
                        y: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: 'easeInOut' },
                      }
                    : {}
                }
              >
                Get in touch
              </motion.span>
            </motion.button>
          </div>
        </div>

        <motion.div
          className="mt-12 border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-white-100">&copy; {new Date().getFullYear()} Ahmed Amr. All rights reserved.</p>
          </div>
        </motion.div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </footer>
  );
};
