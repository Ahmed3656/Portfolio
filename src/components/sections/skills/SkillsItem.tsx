import React from 'react';

import { Item } from '@/components';

type SkillsItemProps = {
  skill: string;
  delay: number;
};

export const SkillsItem = ({ skill, delay }: SkillsItemProps) => (
  <Item
    delay={delay}
    hoverGradient="from-purple-500 to-pink-500"
    rounded="2xl"
    padding="px-4 py-3"
    textAlign="center"
    hoverScale={1.05}
  >
    {skill}
  </Item>
);
