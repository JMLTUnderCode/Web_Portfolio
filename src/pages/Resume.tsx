import { useLocation } from 'react-router-dom';
import SlideInRightOnScroll from '../components/animation/SlideInRightOnScroll';

import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skill';

export function Resume() {
  const location = useLocation();
  const isActive = location.pathname === '/resume';
  return (
    <article className={`pages resume${isActive ? ' active' : ''}`} data-page="resume">
      <header>
        <SlideInRightOnScroll>
          <h2 className="h2 article-title">Resume</h2>
        </SlideInRightOnScroll>
      </header>
      <Education />
      <Experience />
      <Skills />
    </article>
  );
};