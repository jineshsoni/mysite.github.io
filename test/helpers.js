const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Jinesh Soni',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Jinesh Soni',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Jinesh Soni',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Jinesh Soni',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Jinesh Soni',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
