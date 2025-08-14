import React from 'react';

import { Grid, SkillsItem } from '@/components';
import { Card } from '@/components/ui/Card';

type SkillsCategory = {
  name: string;
  skills: string[];
};

type SkillsCardProps = {
  category: SkillsCategory;
  index: number;
};

export const SkillsCard = ({ category, index }: SkillsCardProps) => (
  <Card title={category.name} titleGradient="from-cyan-400 to-blue-500" rounded="2xl" padding={8}>
    <Grid columns={{ default: 2 }} gap={4}>
      {category.skills.map((skill, skillIndex) => (
        <SkillsItem key={skill} skill={skill} delay={index * 0.1 + skillIndex * 0.05} />
      ))}
    </Grid>
  </Card>
);
