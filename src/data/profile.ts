// All site content lives here.

export type ProjectCategory = 'Frontend' | 'Backend' | 'Full stack';
export type ProjectIcon = 'web' | 'api' | 'data' | 'terminal';

export type Project = {
  title: string;
  summary: string;
  details: string;
  highlights: string[];
  category: ProjectCategory;
  icon: ProjectIcon;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
};

export type SkillGroup = { category: string; items: string[] };
export type Stat = { label: string; value: number; suffix?: string };
export type Job = { role: string; company: string; period: string; points: string[] };

export const profile = {
  name: 'Brian Urbina',
  initials: 'BU',
  // Rotated by the typewriter effect in the hero.
  roles: ['Technical Team Lead', 'Java & Full-stack Developer', 'DevOps-minded Engineer', 'Problem Solver'],
  tagline:
    'Team lead with 15 years of enterprise software experience at Accenture Federal Services, building, running and improving federal web platforms.',
  location: 'Webb City, Missouri',
  email: 'brian.urbina@outlook.com',
  github: 'https://github.com/melosaiyan',
  linkedin: 'https://www.linkedin.com/in/brian-urbina-91519a66/',
};

export const stats: Stat[] = [
  { label: 'Years building software', value: 15, suffix: '+' },
  { label: 'Roles held at one employer', value: 6 },
  { label: 'Developers led at peak', value: 7 },
  { label: 'Languages worked in', value: 8 },
];

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'C / C++', 'Groovy', 'Bash / Korn shell', 'SQL', 'Haskell'],
  },
  {
    category: 'Backend & Frameworks',
    items: ['Node.js', 'Spring', 'Struts', 'Grails', 'Hibernate', 'JUnit', 'Maven', 'ANT', 'REST APIs'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Linux / Unix', 'JBoss', 'Apache', 'Infrastructure automation'],
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML & CSS', 'JavaScript', 'jQuery', 'Responsive design', 'Material UI'],
  },
  {
    category: 'Leadership',
    items: [
      'Agile / Scrum',
      'JIRA',
      'Change management',
      'Release & deployment readiness',
      'Client communication',
      'Mentoring',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Real-time Notification App',
    summary: 'A Socket.io notification system that pushes messages to logged-in users, backed by a SQL database.',
    details:
      'Started from a public Socket.io tutorial, then extended it on my own branches: a SQL Server module, push notifications to specific logged-in users, and work toward proper session management.',
    highlights: [
      'WebSocket-based real-time messaging',
      'SQL Server integration on a dedicated branch',
      'Targeted notifications to individual users',
    ],
    category: 'Backend',
    icon: 'api',
    tags: ['Node.js', 'Socket.io', 'SQL Server', 'MySQL'],
    repoUrl: 'https://github.com/melosaiyan/socket-io-notification-working',
  },
  {
    title: 'Angular MEAN Stack CRUD',
    summary: 'A full-stack CRUD app on the MEAN stack, with MongoDB running in Docker.',
    details:
      'Built while learning Angular and the MEAN stack from a tutorial. MongoDB runs in a Docker container, Express and Node serve the API, and Angular Material provides the UI.',
    highlights: ['Angular + Angular Material front end', 'Express / Node REST API', 'MongoDB containerized with Docker'],
    category: 'Full stack',
    icon: 'web',
    tags: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Docker'],
    repoUrl: 'https://github.com/melosaiyan/angular_meanstack_local',
  },
  {
    title: 'Personal Site (React)',
    summary: 'An earlier React personal site, bootstrapped with Create React App.',
    details:
      'My first React site, published through GitHub Pages. This portfolio is its successor, rebuilt with Vite, TypeScript and Material UI.',
    highlights: ['React single-page app', 'Deployed on GitHub Pages'],
    category: 'Frontend',
    icon: 'terminal',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    repoUrl: 'https://github.com/melosaiyan/melosaiyan.github.io',
  },
];

export const experience: Job[] = [
  {
    role: 'O&M Team Lead',
    company: 'Accenture Federal Services',
    period: 'Mar 2023 - Present',
    points: [
      'Direct day-to-day operations by delegating and tracking JIRA work across a multi-disciplinary development team.',
      'Partner with test teams to triage defects and prioritize bug fixes by impact, risk and release readiness.',
      'Coordinate pre-deployment readiness: ticket validation, stakeholder notifications, technical reviews and go/no-go checkpoints.',
      'Oversee scheduled maintenance windows across development, infrastructure and support teams to minimize downtime.',
      'Built automated backend scripts for system health checks and operational metrics.',
      'Author and shepherd Change Requests through the full approval lifecycle for application and infrastructure updates.',
    ],
  },
  {
    role: 'Senior Developer',
    company: 'Accenture Federal Services',
    period: 'Jul 2018 - Feb 2023',
    points: [
      'Delivered software enhancements in JIRA, contributing to Agile sprint goals and user story requirements.',
      'Built and maintained solutions in containerized environments with modern orchestration and deployment patterns.',
      'Diagnosed and resolved issues across Linux servers, Jenkins build pipelines and Kubernetes clusters with platform and DevOps teams.',
    ],
  },
  {
    role: 'Enhancements Development Lead',
    company: 'Accenture Federal Services',
    period: 'Sep 2017 - Jul 2018',
    points: [
      'Oversaw project code development and assigned tasks to developers.',
      'Led client discussions to define requirements and scheduled client requests into the application.',
      'Developed responsive design templates and a backend application that updates them from the content management system.',
      'Organized application deployment through change management.',
    ],
  },
  {
    role: 'Java Development Lead',
    company: 'Accenture Federal Services',
    period: 'Nov 2015 - Aug 2017',
    points: [
      'Led a team of seven Java developers, delegating bug and enhancement work.',
      'Managed production investigations and communicated resolutions to the client.',
      'Gave clients task timelines based on team workload and ran proactive production-improvement meetings.',
      "Mentored developers in technical and interpersonal skills.",
    ],
  },
  {
    role: 'Senior Java Developer',
    company: 'Accenture Federal Services',
    period: 'Jan 2013 - Nov 2015',
    points: [
      'Fixed bugs in site applications and the content management system.',
      'Provided production support for deployments, OS patches and incidents.',
      'Built and deployed applications for QA and production releases; assistant team lead for a team of six.',
    ],
  },
  {
    role: 'Java Development Analyst',
    company: 'Accenture Federal Services',
    period: 'Sep 2011 - Jan 2013',
    points: [
      'Developed a government search engine while maintaining high security standards for the client.',
      'Configured multiple Google Search Appliances to refine search results.',
      'Tested and debugged new applications ahead of release dates.',
    ],
  },
  {
    role: 'BS, Computer Science',
    company: 'University of Texas at Austin',
    period: '2011',
    points: ['Bachelor of Science in Computer Science.'],
  },
];
