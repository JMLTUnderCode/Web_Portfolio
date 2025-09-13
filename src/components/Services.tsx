import FadeInUpOnScroll from '../components/animation/FadeInUpOnScroll';
import SlideInRightOnScroll from '../components/animation/SlideInRightOnScroll';

import { SERVICES } from '../data/services';

export function Services() {
  return (
    <section className="service">
      <SlideInRightOnScroll>
        <h3 className="h3 service-title">What I'm doing</h3>
      </SlideInRightOnScroll>
      <ul className="service-list">
        {SERVICES.map((service) => (
          <FadeInUpOnScroll key={service.title}>
            <li className="service-item">
              <div className="service-icon-box">
                <img src={service.icon} alt={service.alt} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.text}</p>
              </div>
            </li>
          </FadeInUpOnScroll>
        ))}
      </ul>
    </section>
  );
};