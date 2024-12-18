'use client'

import { useState } from "react";

import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import { FloatingDock } from "./ui/FloatingDock";
import {
  IconHome,
  IconTools,
  IconMailSpark,
  IconFolderCode,
  IconBriefcase2,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Projects",
    icon: (
      <IconFolderCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Experience",
    icon: (
      <IconBriefcase2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Skills",
    icon: (
      <IconTools className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
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
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/Ahmed3656",
  },
];

export function FloatingNavbar({ className }: { className?: string; }) {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
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

  const rem = [1, 2, 3];
  const linksSm = links.filter((_, idx)=> !rem.includes(idx));

  return (
    <motion.div
      className={"fixed top-10 w-full center z-50"}
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className={className}>
        <FloatingDock
          items={links}
          className="hidden md:flex"
        />
        <FloatingDock
          items={linksSm}
          className="flex md:hidden"
        />
      </div>
    </motion.div>
  );
}