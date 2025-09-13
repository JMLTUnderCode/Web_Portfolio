import { IoEyeOutline } from 'react-icons/io5';
import { BASE_URL, CATEGORIES } from '../constants';
import type { Project } from '../types.d';

const listOfProjects: Project[] = [
  { 
    title: 'Portfolio Web', 
    category: CATEGORIES.WEB_DEVELOPMENT, 
    img: `${BASE_URL}assets/images/projects/project-web-portfolio.png`, 
    alt: 'portfolio web', 
    url: 'https://jmltundercode.github.io/Web_Portfolio/#/about'
  },
];

export function ProjectsList({category}: {category: string}) {
  const filteredProjects =
    category === CATEGORIES.ALL
      ? listOfProjects
      : listOfProjects.filter((p) => p.category === category);

  return (
    <ul className="project-list">
      {filteredProjects.map((project) => (
        <li
          className="project-item active"
          data-filter-item
          data-category={project.category}
          key={project.title}
        >
          <a href={project.url}>
            <figure className="project-img">
              <div className="project-item-icon-box">
                <IoEyeOutline />
              </div>
              <img src={project.img} alt={project.alt} loading="lazy" />
            </figure>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-category">
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
};