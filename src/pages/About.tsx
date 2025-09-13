import React from 'react';
import { useLocation } from 'react-router-dom';
import FadeInUpOnScroll from '../components/animation/FadeInUpOnScroll';
import SlideInRightOnScroll from '../components/animation/SlideInRightOnScroll';
import { Services } from '../components/Services';

const aboutParagraphs = [
  `Soy un desarrollador apasionado por crear experiencias interactivas y soluciones digitales bien pensadas. Mi experiencia abarca desde C, C++, Python y JavaScript, hasta tecnologías web como HTML, CSS y PHP, además de bases de datos como PostgreSQL y MySQL. También he explorado herramientas de inteligencia artificial como ChatGPT y Copilot para potenciar mi flujo de trabajo.`,
  `Me encanta trabajar en proyectos que abarcan el desarrollo de juegos, la creación de páginas web dinámicas y hasta clones de aplicaciones populares como Twitter, YouTube y Tinder. Mi objetivo a largo plazo es convertirme en un desarrollador fullstack y, eventualmente, profundizar en el desarrollo de videojuegos y aplicaciones móviles.`,
  `Soy meticuloso en mi código: me preocupo por mantenerlo bien documentado y organizado, siempre buscando maneras de optimizar y mejorar las soluciones que encuentro. Si bien me gusta liderar proyectos, también disfruto cuando los demás aportan sus ideas y habilidades. Valoro el trabajo en equipo y creo que la colaboración y la comunicación son clave para lograr los mejores resultados.`,
  `Fuera del código, me atraen las teorías científicas y el sci-fi. También disfruto desafíos físicos y mentales que me mantengan enfocado y motivado en diferentes contextos. ¡Siempre estoy listo para aprender y enfrentar nuevos retos!`,
];

const About: React.FC = () => {
  const location = useLocation();
  const isActive = location.pathname === '/about';

  return (
    <article className={`pages about${isActive ? ' active' : ''}`} data-page="about">
      <header>
        <SlideInRightOnScroll>
          <h2 className="h2 article-title">About me</h2>
        </SlideInRightOnScroll>
      </header>
      <FadeInUpOnScroll>
        <section className="about-text">
          {aboutParagraphs.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </section>
      </FadeInUpOnScroll>
      <Services />
    </article>
  );
};

export default About;