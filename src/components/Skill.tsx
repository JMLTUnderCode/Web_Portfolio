import { IoSparklesOutline } from 'react-icons/io5';
import FadeInUpOnScroll from '../components/animation/FadeInUpOnScroll';
import SlideInRightOnScroll from '../components/animation/SlideInRightOnScroll';

import { SKILLS } from '../data/skills';

export function Skills() {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IoSparklesOutline />
        </div>
        <SlideInRightOnScroll>
          <h3 className="h3">My Skills</h3>
        </SlideInRightOnScroll>
      </div>

      <ol className="timeline-list">
        <section className="skill">
          {SKILLS.map((group) => (
              <div key={group.category}>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">{group.category}</h4>
                <ul className="skills-list content-card">
                    {group.skills.map((skill) => (
                    <FadeInUpOnScroll key={skill.name}>
                      <li className="skills-card">
                          <div className="skills-card-logo">
                          <img src={skill.logo} alt={`${skill.name} logo`} width={64} height={64} />
                          </div>
                          <div className="skills-card-info">
                              <h5 className="skills-card-title">{skill.name}</h5>
                              <div className="skills-card-level">
                              <span className="skills-card-level-label">Nivel:</span>
                              <span className={`skills-card-level-tag ${skill.tagClass}`}>{skill.level}</span>
                          </div>
                          </div>
                      </li>
                    </FadeInUpOnScroll>
                    ))}
                </ul>
              </li>
              </div>
          ))}
         </section>
      </ol>
    </section>
  )
};