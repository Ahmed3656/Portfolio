import { ExperienceItem } from '@/types';

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: 'Software Developer, Intern',
    company: 'IST Networks',
    location: 'Cairo, Egypt',
    duration: 'Sep 2025 - Present',
    description:
      'Contributing to both Web and App Development teams within a leading Customer Experience (CX) tech company, delivering scalable and integrated solutions.',
    responsibilities: [
      'Worked in the Web Development team using React and ASP.NET (MVC architecture) within a monorepo structure',
      'Tested and validated APIs using Postman',
      'Deployed web modules via GitHub Pages',
      'Collaborated with the App Development team leveraging Spring Boot for backend services and Cisco Call Studio for IVR integrations',
      'Engaged in end-to-end SDLC phases under both Waterfall and Agile methodologies',
      'Managed tasks and workflow using Trello',
      'Developed presentation skills and deepened understanding of SDLC, Waterfall, and Agile frameworks',
    ],
    skills: ['React', 'ASP.NET (MVC)', 'Spring Boot', 'Cisco Call Studio (IVR)', 'API testing (Postman)', 'SDLC'],
    tools: ['VS Code', 'Visual Studio', 'GitHub Pages', 'Postman', 'Trello'],
  },
  {
    id: 2,
    title: 'Full Stack Engineer, Intern',
    company: 'T.E.C Tawreed',
    location: 'Cairo, Egypt',
    duration: 'Sep 2024 – Oct 2024',
    description:
      'Contributed to T.E.C Tawreed’s B2B e-procurement platform, building production-grade features with a strong focus on clean architecture, validation, and team workflows.',
    responsibilities: [
      'Applied OOP and single-responsibility principles across both backend classes and frontend components for maintainable and scalable code',
      'Learned and actively worked with ESLint, Prettier, and Husky to maintain a clean and consistent codebase',
      'Created initial UI sketches in Figma and implemented responsive frontends with Next.js and TypeScript',
      'Validated user inputs on the frontend using Yup and ensured data integrity at the backend level',
      'Used TypeORM to work with PostgreSQL entities and updated database models as needed',
      'Validated backend environment files (.env) and static configuration files to ensure correctness and security',
      'Collaborated with the team through Git/GitHub, practicing proper branching, commits, and pull requests',
    ],
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'TypeORM',
      'OOP',
      'Component Architecture',
      'Yup',
      'API Design',
      'Git/GitHub',
    ],
    tools: ['Cursor', 'Postman', 'DBeaver', 'Figma', 'shadcn/ui', 'ESLint', 'Prettier', 'Husky'],
  },
  {
    id: 3,
    title: 'Full Stack Developer, Intern',
    company: 'Neuronitex',
    location: 'Remote',
    duration: 'Aug 2024 - Sep 2024',
    description:
      'Developed real-world web applications using the MERN stack while contributing to both front-end and back-end systems.',
    responsibilities: [
      'Built RESTful APIs with Express.js',
      'Implemented WebSocket communication using Socket.io',
      'Managed front-end and back-end logic',
      'Optimized user authentication and responsive design',
    ],
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io'],
    tools: ['VS Code', 'Postman', 'MongoDB Atlas', 'Git', 'Vercel'],
  },
];
