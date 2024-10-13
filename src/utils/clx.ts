import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const clx = (...args: ClassValue[]) => {
  return twMerge(clsx(...args));
};
