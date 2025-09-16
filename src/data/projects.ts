import { BASE_URL, CATEGORIES } from '../constants';
import type { Project } from '../types.d';

export const PROJECTS: Project[] = [
  { 
    title: 'Portfolio Web', 
    category: CATEGORIES.WEB_DEVELOPMENT, 
    img: `${BASE_URL}assets/images/projects/project-web-portfolio.png`, 
    alt: 'portfolio web', 
    url: 'https://jmltundercode.github.io/Web_Portfolio/#/about'
  },
  {
    title: 'React',
    category: CATEGORIES.YOUTUBE_COURSE,
    img: `${BASE_URL}assets/images/projects/project-reactCourse-midudev.png`,
    alt: 'react course',
    url: 'https://github.com/JMLTUnderCode/React_Course',
  },
];