import { IoBriefcaseOutline } from 'react-icons/io5';
import FadeInUpOnScroll from '../components/animation/FadeInUpOnScroll';
import SlideInRightOnScroll from '../components/animation/SlideInRightOnScroll';

import { EXPERIENCES } from '../data/experiences';

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
        {EXPERIENCES.map((item) => (
          <FadeInUpOnScroll key={item.name}>
            <li className="timeline-item">
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