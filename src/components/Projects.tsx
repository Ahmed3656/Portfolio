import React from 'react';

import { FocusCards } from './ui/FocusCards';
import { cards } from '@/data';

const Projects = () => {
  return (
    <div>
      <FocusCards cards={cards} />
    </div>
  )
}

export default Projects