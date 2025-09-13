import { IoBriefcaseOutline } from 'react-icons/io5';
import FadeInUpOnScroll from '../components/animation/FadeInUpOnScroll';
import SlideInRightOnScroll from '../components/animation/SlideInRightOnScroll';

import type { Experience } from '../types.d';

const listOfExperiences: Experience[] = [
  {
    name: "Empire Keeway - Moto Candela",
    start: "2023",
    end: "2023",
    description: "Desarrollador Backend. Participé en el desarrollo de un sistema de gestión de inventario y ventas para la empresa, utilizando tecnologías como Django, Neon, Postgressql.",
  },
];

export function Experience() {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IoBriefcaseOutline />
        </div>
        <SlideInRightOnScroll>
          <h3 className="h3">Experience</h3>
        </SlideInRightOnScroll>
      </div>

      <ol className="timeline-list">
        {listOfExperiences.map((item) => (
          <FadeInUpOnScroll>
            <li className="timeline-item" key={item.name}>
              <h4 className="h4 timeline-item-title">{item.name}</h4>
              <span>{item.start} — {item.end}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          </FadeInUpOnScroll>
        ))}
      </ol>
    </section>
  )
};