'use client';

import React, { useEffect, useState } from 'react';

type Props = {
  textContent: string[];
  className?: string;
};

export const TypeWriter = ({ textContent, className }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (!isClient) return;

    const dynamicText = document.getElementById('dynamic-text');
    let textIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textContent[textIndex].length) {
        if (dynamicText) {
          dynamicText.textContent = textContent[textIndex].substring(0, charIndex + 1);
        }
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 1400);
      }
    }

    function erase() {
      if (charIndex >= 0) {
        if (dynamicText) {
          dynamicText.textContent = textContent[textIndex].substring(0, charIndex);
        }
        charIndex--;
        setTimeout(erase, 50);
      } else {
        textIndex = (textIndex + 1) % textContent.length;
        setTimeout(type, 500);
      }
    }

    setTimeout(type, 2000);
  }, [isClient]);

  return <span id="dynamic-text" className={className}></span>;
};
