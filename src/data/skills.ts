import type { SkillGroup } from '../types.d';
import { BASE_URL } from '../constants';

export const SKILLS: SkillGroup[] = [
  {
    category: 'Lenguajes de Programación',
    skills: [
      { name: 'C++', logo: `${BASE_URL}assets/logo/logo-cpp.svg`, level: 'Alto', tagClass: 'nivel-alto' },
      { name: 'Python', logo: `${BASE_URL}assets/logo/logo-python.svg`, level: 'Alto', tagClass: 'nivel-alto' },
      { name: 'C', logo: `${BASE_URL}assets/logo/logo-c.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
      { name: 'Latex', logo: `${BASE_URL}assets/logo/logo-latex.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
      { name: 'HTML5', logo: `${BASE_URL}assets/logo/logo-html5.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
      { name: 'CSS3', logo: `${BASE_URL}assets/logo/logo-css3.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
      { name: 'php', logo: `${BASE_URL}assets/logo/logo-php.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
      { name: 'JavaScript', logo: `${BASE_URL}assets/logo/logo-javascript.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
      { name: 'TypeScript', logo: `${BASE_URL}assets/logo/logo-typescript.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
    ],
  },
  {
    category: 'Frameworks, Librerías y Herramientas',
    skills: [
      { name: 'Visual Studio Code', logo: `${BASE_URL}assets/logo/logo-vscode.svg`, level: 'Alto', tagClass: 'nivel-alto' },
      { name: 'Linux (Ubuntu)', logo: `${BASE_URL}assets/logo/logo-linux.svg`, level: 'Alto', tagClass: 'nivel-alto' },
      { name: 'GitHub', logo: `${BASE_URL}assets/logo/logo-github.svg`, level: 'Alto', tagClass: 'nivel-alto' },
      { name: 'Git', logo: `${BASE_URL}assets/logo/logo-git.svg`, level: 'Alto', tagClass: 'nivel-alto' },
      { name: 'GitHub Copilot', logo: `${BASE_URL}assets/logo/logo-copilot.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
      { name: 'Django', logo: `${BASE_URL}assets/logo/logo-django.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
      { name: 'Postman', logo: `${BASE_URL}assets/logo/logo-postman.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
      { name: 'React', logo: `${BASE_URL}assets/logo/logo-react.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
      { name: 'Node.js', logo: `${BASE_URL}assets/logo/logo-nodejs.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
      { name: 'Express.js', logo: `${BASE_URL}assets/logo/logo-expressjs.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
      { name: 'GitLab', logo: `${BASE_URL}assets/logo/logo-gitlab.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
      { name: 'Matplotlib', logo: `${BASE_URL}assets/logo/logo-matplotlib.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
      { name: 'NumPy', logo: `${BASE_URL}assets/logo/logo-numpy.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
      { name: 'Pandas', logo: `${BASE_URL}assets/logo/logo-pandas.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
    ],
  },
  {
    category: 'Servicios Web y Bases de Datos',
    skills: [
      { name: 'GitHub Pages', logo: `${BASE_URL}assets/logo/logo-githubpages.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
      { name: 'Neon', logo: `${BASE_URL}assets/logo/logo-neon.png`, level: 'Bajo', tagClass: 'nivel-bajo' },
      { name: 'MongoDB Atlas', logo: `${BASE_URL}assets/logo/logo-mongodbatlas.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
      { name: 'Render', logo: `${BASE_URL}assets/logo/logo-render.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
      { name: 'Vercel', logo: `${BASE_URL}assets/logo/logo-vercel.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
      { name: 'PostgreSQL', logo: `${BASE_URL}assets/logo/logo-postgresql.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
      { name: 'MySQL', logo: `${BASE_URL}assets/logo/logo-mysql.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
    ],
  },
];