import React from 'react';

type Props = {
  title: string;
  href: string;
  icon: React.ReactNode;
  position: string;
  target?: string;
};

export const MagicButton = ({ title, href, icon, position, target = '_self' }: Props) => {
  return (
    <a
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-full p-[2px]"
      href={href}
      target={target}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full gap-2 bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </a>
  );
};
