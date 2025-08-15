export type Project = {
  title: string;
  src: string;
  url: string;
  description: string;
  tech: string[];
  priority?: number;
};

export const projects: Project[] = [
  {
    title: 'Primecraft',
    src: '/images/project16.png',
    url: 'https://www.npmjs.com/package/primecraft',
    description:
      'An open-source npm package in TypeScript for generating large, cryptographically strong primes with probabilistic primality testing (Miller-Rabin), safe prime support, and RSA-compatible outputs, optimized for high entropy cryptography.',
    tech: ['TypeScript', 'Node.js', 'npm', 'Cryptography', 'Parallelism', 'Prime Generation'],
    priority: 2,
  },
  {
    title: 'Clipie',
    src: '/images/project15.png',
    url: 'https://github.com/clipiexyz',
    description:
      'Created a social media platform using Next.js and Node.js, powered by GraphQL for optimized data delivery. The project adhered to OOP principles, ensuring modularity, scalability, and easy maintenance.',
    tech: ['Next.js', 'Node.js', 'GraphQL', 'PostgreSQL', 'OOP'],
    priority: 1,
  },
  {
    title: 'Portfolio',
    src: '/images/project11.png',
    url: 'https://github.com/Ahmed3656/Portfolio',
    description:
      'Personal portfolio built with Next.js, showcasing projects with modern web design and user experience optimization.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    priority: 1,
  },
  {
    title: 'Word Frequency Counter',
    src: '/images/project13.png',
    url: '#',
    description:
      'Built a C++ tool leveraging hash maps for efficient word counting, trie data structures for autocomplete, and a Qt GUI for real-time interaction.',
    tech: ['C++', 'Qt', 'Data Structures', 'Desktop Application'],
    priority: 1,
  },
  {
    title: 'FOS',
    src: '/images/project14.png',
    url: 'https://github.com/Ahmedd-Wahdan/OS',
    description:
      'Contributed to building a UNIX-like operating system in C, implementing key components such as memory management, system calls, page fault handling, and concurrency mechanisms. Ranked 3rd among 140+ teams.',
    tech: ['C', 'Unix', 'System Programming', 'Concurrency', 'Fault Handling'],
    priority: 2,
  },
  {
    title: 'Chill Chronicles',
    src: '/images/project9.png',
    url: 'https://github.com/Ahmed3656/Chill-chronicles',
    description:
      'Full CRUD blog site developed using MERN stack, including user authentication, custom REST APIs, and responsive front-end design.',
    tech: ['MERN', 'Authentication', 'REST API'],
    priority: 1,
  },
  {
    title: 'Map Routing',
    src: '/images/project3.png',
    url: 'https://github.com/Ahmedd-Wahdan/Map_routing',
    description:
      'Developed a C# Windows Forms application collaboratively using the .NET framework, integrating the A* algorithm and super nodes for efficient pathfinding. Features interactive map visualization and dynamic query cycling. Achieved the fastest results among all implementations, placing 1st.',
    tech: ['C#', '.NET', 'WinForms', 'Data Structures'],
    priority: 2,
  },
  {
    title: 'Facebook Management System',
    src: '/images/project12.png',
    url: 'https://github.com/titoo04/FB-project',
    description:
      'Designed and implemented in Java using OOP principles to simplify social media management tasks with modular architecture.',
    tech: ['Java', 'OOP', 'System Design'],
    priority: 1,
  },
  {
    title: 'Gemini Clone',
    src: '/images/project8.png',
    url: 'https://gemini-clone-blond.vercel.app/',
    description:
      'A React.js project inspired by Gemini, featuring AI-generated responses using Google Gemini’s API. The sleek design and chill vibe are crafted using pure HTML and CSS, offering a smooth and engaging user experience.',
    tech: ['React.js', 'AI Integration', 'CSS'],
    priority: 1,
  },
  {
    title: 'iChat',
    src: '/images/project10.png',
    url: 'https://github.com/Ahmed3656/iChat',
    description:
      'Real-time chat application built with the MERN stack, utilizing the WebSocket protocol for instant messaging and custom RESTful APIs for efficient data management.',
    tech: ['MERN', 'WebSocket', 'REST API'],
    priority: 2,
  },
  {
    title: 'Laptop Zone',
    src: '/images/project7.png',
    url: 'https://laptop-zone-website.vercel.app/',
    description:
      'React-based e-commerce site, leveraging Bootstrap for effortless navigation and a user-friendly interface.',
    tech: ['React.js', 'Bootstrap', 'E-commerce'],
    priority: 1,
  },
  {
    title: 'To Do List',
    src: '/images/project6.png',
    url: 'https://ahmed3656.github.io/To-Do-List/',
    description: 'React.js-powered to-do list, simplifying your productivity journey.',
    tech: ['React.js'],
    priority: 1,
  },
  {
    title: 'Elite Kicks',
    src: '/images/project4.png',
    url: 'https://ahmed3656.github.io/EliteKicks/index.html',
    description:
      'JavaScript-based e-commerce platform, crafted with Bootstrap, delivering an intuitive user interface and smooth navigation for an enjoyable shopping experience.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    priority: 1,
  },
  {
    title: 'Tech Squad',
    src: '/images/project2.png',
    url: 'https://ahmed3656.github.io/Tech-Squad/',
    description:
      'Static website built with HTML5 and CSS3, featuring a clean layout and responsive design fundamentals.',
    tech: ['HTML', 'CSS', 'HTML5', 'CSS3'],
    priority: 1,
  },
  {
    title: 'Gamer Spot',
    src: '/images/project1.png',
    url: 'https://ahmed3656.github.io/Gamer-Spot/',
    description:
      'A simple gaming-themed landing page developed using HTML and CSS, focusing on clear structure and visual appeal.',
    tech: ['HTML', 'CSS'],
    priority: 1,
  },
];
