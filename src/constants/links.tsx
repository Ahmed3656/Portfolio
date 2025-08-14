import React from 'react';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase2,
  IconFolderCode,
  IconHome,
  IconMail,
  IconMailSpark,
  IconTools,
} from '@tabler/icons-react';

export const links = [
  {
    title: 'Home',
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#home',
  },
  {
    title: 'Experience',
    icon: <IconBriefcase2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#',
  },
  {
    title: 'Skills',
    icon: <IconTools className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#skills',
  },
  {
    title: 'Projects',
    icon: <IconFolderCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#projects',
  },
  {
    title: 'Get in touch',
    icon: <IconMailSpark className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#get-in-touch',
  },
  {
    title: 'LinkedIn',
    icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: 'https://www.linkedin.com/in/ahmed-amr3656/',
  },
  {
    title: 'GitHub',
    icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: 'https://github.com/Ahmed3656',
  },
];

export const footerLinks = [
  {
    href: 'https://github.com/Ahmed3656',
    label: 'GitHub',
    icon: IconBrandGithub,
  },
  {
    href: 'https://linkedin.com/in/ahmed-amr3656/',
    label: 'LinkedIn',
    icon: IconBrandLinkedin,
  },
  {
    href: 'mailto:ahmedamr4f@gmail.com',
    label: 'Email',
    icon: IconMail,
  },
];
