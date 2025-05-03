'use client'

import { useEffect } from 'react';

export const useScrollToSection = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();

      const id = href.substring(1);
      const targetElement = document.getElementById(id);

      if (targetElement) {
        const navbarOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    document.body.addEventListener('click', handleAnchorClick);

    return () => {
      document.body.removeEventListener('click', handleAnchorClick);
    };
  }, []);
};
