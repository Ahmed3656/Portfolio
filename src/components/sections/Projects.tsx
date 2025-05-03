import React from 'react';

import { FocusCards } from '@/components';
import { projects } from '@/constants';

export const Projects = () => {
  return (
    <div id="projects">
      <FocusCards cards={projects} />
    </div>
  )
}
