import { IoBookOutline } from 'react-icons/io5';
import FadeInUpOnScroll from '../components/animation/FadeInUpOnScroll';
import SlideInRightOnScroll from '../components/animation/SlideInRightOnScroll';

import type { Education } from '../types.d';

const listOfEducations: Education[] = [
  {
    name: "Universidad Simón Bolívar",
    start: "2017",
    end: "Present",
    description: "Estudiante de Ingeniería en Computación. Aprendiendo y creciendo en el campo de la programación multidiciplinaria. Lider de muchos proyectos y miembro activo de la comunidad estudiantil.",
  },
  {
    name: "Programa de Igualdad de Oportunidades (PIO) en la USB",
    start: "2016",
    end: "2017",
    description: "Programa de nivelación a estudiantes de 5th año de bachillerato. Participé como estudiante donde adquirí una base muy sólida para el ámbito universitario.",
  },
  {
    name: "Unidad Educativa Nacional Teresa de Bolívar",
    start: "2010",
    end: "2017",
    description: "Parte de mi adolescencia hasta sacar el bachillerato. Un lugar donde aprendí mucho.",
  },
  {
    name: "Unidad Educativa Estadal Juan German Roscio",
    start: "2002",
    end: "2010",
    description: "Parte de mi infancia hasta 4th grado. Un ambiente de estudio muy agradable.",
  },
];

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
        {listOfEducations.map((item) => (
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