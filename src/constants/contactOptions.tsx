import { IconMailFilled, IconBrandDiscordFilled, IconBrandX } from '@tabler/icons-react';

type ContactOption = {
  label: string
  value: string
  icon: React.ReactNode
}

export const contactOptions: ContactOption[] = [
  { label: "Email", value: "ahmedamr4f@gmail.com", icon: <IconMailFilled size={18} /> },
  { label: "X", value: "@Ahmed3656_", icon: <IconBrandX size={18} /> },
  { label: "Discord", value: "Ahmed3656", icon: <IconBrandDiscordFilled size={18} /> },
];
