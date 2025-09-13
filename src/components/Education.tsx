import { IoBookOutline } from 'react-icons/io5';
import FadeInUpOnScroll from '../components/animation/FadeInUpOnScroll';
import SlideInRightOnScroll from '../components/animation/SlideInRightOnScroll';

import { EDUCATIONS } from '../data/educations';

export function Education() {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IoBookOutline />
        </div>
        <SlideInRightOnScroll>
          <h3 className="h3">Education</h3>
        </SlideInRightOnScroll>
      </div>
      <ol className="timeline-list">
        {EDUCATIONS.map((item) => (
          <FadeInUpOnScroll key={item.name}>
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