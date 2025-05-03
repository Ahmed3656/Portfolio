import React from 'react';

import {
  IconHome,
  IconTools,
  IconMailSpark,
  IconFolderCode,
  IconBriefcase2,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react';

export const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#home",
  },
  {
    title: "Experience",
    icon: (
      <IconBriefcase2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Projects",
    icon: (
      <IconFolderCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },
  {
    title: "Skills",
    icon: (
      <IconTools className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#skills",
  },
  {
    title: "Get in touch",
    icon: (
      <IconMailSpark className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/ahmed-amr3656/",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/Ahmed3656",
  },
];
