import React from 'react';

import { Grid, SkillsCard } from '@/components';
import { skillCategories } from '@/constants';

export const SkillsGrid = () => (
  <Grid columns={{ default: 1, md: 3 }} gap={8}>
    {skillCategories.map((category, index) => (
      <SkillsCard key={category.name} category={category} index={index} />
    ))}
  </Grid>
);
