'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

import { FloatingDock } from '@/components';
import { links } from '@/constants';

export function FloatingNavbar({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [mouseAtTop, setMouseAtTop] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const topAreaHeight = 75;
      const middleAreaWidthPercent = 30;
      const middleAreaStartX = (window.innerWidth * ((100 - middleAreaWidthPercent) / 2)) / 100;
      const middleAreaEndX = (window.innerWidth * ((100 + middleAreaWidthPercent) / 2)) / 100;

      const isInTopArea = e.clientY <= topAreaHeight;
      const isInMiddleArea = e.clientX >= middleAreaStartX && e.clientX <= middleAreaEndX;

      setMouseAtTop(isInTopArea && isInMiddleArea);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05 || mouseAtTop) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  useEffect(() => {
    if (mouseAtTop) {
      setVisible(true);
    }
  }, [mouseAtTop]);

  const rem = [1, 2, 3];
  const linksSm = links.filter((_, idx) => !rem.includes(idx));

  return (
    <motion.div
      className={'fixed top-10 w-full center z-50'}
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className={className}>
        <FloatingDock items={links} className="hidden md:flex" />
        <FloatingDock items={linksSm} className="flex md:hidden" />
      </div>
    </motion.div>
  );
}
