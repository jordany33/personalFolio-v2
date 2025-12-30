// Personal Portfolio Configuration
// Customize this file to personalize your portfolio

export const config = {
  // Personal Information
  personal: {
    name: 'Your Name',
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    email: 'your.email@example.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    website: 'https://yourwebsite.com',
  },

  // Hero Section
  hero: {
    greeting: "Hey, I'm",
    name: 'Your Name',
    title: 'Software Engineer',
    subtitle: 'Building beautiful, performant, and user-centric digital experiences',
    cta: {
      primary: {
        text: 'View My Work',
        link: '#projects',
      },
      secondary: {
        text: 'Get In Touch',
        link: '#contact',
      },
    },
  },

  // About Section
  about: {
    title: 'About Me',
    description: [
      "I'm a passionate software engineer with a love for creating innovative solutions and beautiful user experiences.",
      "With expertise in modern web technologies, I specialize in building scalable applications that make a difference.",
      "When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the community.",
    ],
    image: '/images/profile.jpg', // Add your profile image
  },

  // Skills Section
  skills: {
    title: 'Skills & Technologies',
    subtitle: 'Technologies I work with',
    categories: [
      {
        name: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      },
      {
        name: 'Backend',
        skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      },
      {
        name: 'Tools & Others',
        skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Figma'],
      },
    ],
  },

  // Projects Section
  projects: {
    title: 'Featured Projects',
    subtitle: 'Some of my recent work',
    items: [
      {
        title: 'Project One',
        description: 'A modern web application built with React and Next.js, featuring real-time updates and a beautiful UI.',
        image: '/images/project1.jpg',
        tags: ['React', 'Next.js', 'TypeScript'],
        links: {
          live: 'https://project1.com',
          github: 'https://github.com/username/project1',
        },
      },
      {
        title: 'Project Two',
        description: 'An innovative mobile-first platform that solves real-world problems with cutting-edge technology.',
        image: '/images/project2.jpg',
        tags: ['React Native', 'Node.js', 'MongoDB'],
        links: {
          live: 'https://project2.com',
          github: 'https://github.com/username/project2',
        },
      },
      {
        title: 'Project Three',
        description: 'A full-stack application with advanced features, showcasing modern development practices.',
        image: '/images/project3.jpg',
        tags: ['Next.js', 'PostgreSQL', 'AWS'],
        links: {
          live: 'https://project3.com',
          github: 'https://github.com/username/project3',
        },
      },
    ],
  },

  // Contact Section
  contact: {
    title: 'Get In Touch',
    subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    email: 'your.email@example.com',
    social: {
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      twitter: 'https://twitter.com/yourusername',
    },
  },
}


