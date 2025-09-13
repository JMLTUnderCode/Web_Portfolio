import type { Service } from '../types.d';
import { BASE_URL } from '../constants';

export const SERVICES: Service[] = [
  {
    icon: `${BASE_URL}assets/icons/icon-software.svg`,
    alt: 'Software development icon',
    title: 'Software Development',
    text: 'Desarrollo aplicaciones robustas y eficientes, aplicando buenas prácticas y metodologías ágiles para entregar soluciones de calidad que se adaptan a las necesidades del usuario.',
  },
  {
    icon: `${BASE_URL}assets/icons/icon-dev.svg`,
    alt: 'Web development icon',
    title: 'FullStack Development',
    text: 'Construyo proyectos completos, desde el frontend interactivo hasta el backend funcional, integrando bases de datos y APIs para crear experiencias web dinámicas y escalables.',
  },
  /*{
    icon: `${BASE_URL}assets/icons/icon-mobile.svg`,
    alt: 'Mobile app icon',
    title: 'Mobile Development',
    text: 'Diseño y desarrollo aplicaciones móviles intuitivas y funcionales, enfocadas en la experiencia del usuario y la optimización para diferentes dispositivos.',
  },*/
  {
    icon: `${BASE_URL}assets/icons/icon-database.svg`,
    alt: 'Database icon',
    title: 'Data Base',
    text: 'Administro y diseño bases de datos seguras y eficientes, garantizando la integridad de la información y el acceso rápido a los datos para aplicaciones y sistemas.',
  },
  {
    icon: `${BASE_URL}assets/icons/icon-github.svg`,
    alt: 'Github management icon',
    title: 'GitHub Management',
    text: 'Organizo y gestiono repositorios en GitHub, aplicando control de versiones, flujos de trabajo colaborativos y buenas prácticas para proyectos de desarrollo.',
  },
  {
    icon: `${BASE_URL}assets/icons/icon-codeforces.svg`,
    alt: 'Codeforces icon',
    title: 'CodeForces',
    text: 'Participo de vez en cuando en retos de programación y resolución de problemas algorítmicos, mejorando mis habilidades y aprendiendo nuevas técnicas constantemente.',
  },
];