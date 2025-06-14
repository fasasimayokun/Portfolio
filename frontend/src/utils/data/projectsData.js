// src/data/projectsData.js

const projects = [
  {
    title: 'Animal World',
    image: '/images/frontendanimalkingdom.PNG', // Save a screenshot in public/images
    description:
      'A MERN stack application where users can discover facts about animals. Features include authentication, saving posts, and nested comments with voting.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'TailwindCSS'],
    github: 'https:/github.com/fasasimayokun/animal-world',
    live: 'https://animal-world-1.onrender.com/',
  },
  {
    title: 'Anime Reviews Website',
    image: '/images/frontpageanimeworld.PNG',
    description:
      'Built with Django and SQLite, this project allows users to post and review their favorite anime shows. Includes login/signup and user-friendly UI.',
    stack: ['Django', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/fasasimayokun/my-portfolio_project',
    live: '',
  },
  {
    title: 'Audio Lyrics',
    image: '/images/audio-transcribe.PNG',
    description:
      'A Django-based app that transcribes English audio to text using the AssemblyAI API. Helps users convert voice to readable format instantly.',
    stack: ['Python', 'Django', 'AssemblyAI', 'HTML', 'CSS'],
    github: 'https://github.com/fasasimayokun/Webstack---Portfolio-Project',
    live: '',
  },
];

export default projects;
