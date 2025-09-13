import { useLocation } from 'react-router-dom';
import SlideInRightOnScroll from '../components/animation/SlideInRightOnScroll';
import { FilterProjects } from '../components/FilterProjects';

export function Projects() {
  const location = useLocation();
  const isActive = location.pathname === '/projects';

  return (
    <article className={`pages projects${isActive ? ' active' : ''}`} data-page="projects">
      <header>
        <SlideInRightOnScroll>
          <h2 className="h2 article-title">Projects</h2>
        </SlideInRightOnScroll>
      </header>

      <section className="projects">
        <FilterProjects />
      </section>
    </article>
  );
};