import FadeInUpOnScroll from '../components/animation/FadeInUpOnScroll';
import SlideInRightOnScroll from '../components/animation/SlideInRightOnScroll';

const BASE_URL = import.meta.env.BASE_URL;

type Service = {
	icon: string;
	alt: string;
	title: string;
	text: string;
};

const services: Service[] = [
	{
		icon: 'icon-software.svg',
		alt: 'Software development icon',
		title: 'Software Development',
		text: 'Desarrollo aplicaciones robustas y eficientes, aplicando buenas prácticas y metodologías ágiles para entregar soluciones de calidad que se adaptan a las necesidades del usuario.',
	},
	{
		icon: 'icon-dev.svg',
		alt: 'Web development icon',
		title: 'FullStack Development',
		text: 'Construyo proyectos completos, desde el frontend interactivo hasta el backend funcional, integrando bases de datos y APIs para crear experiencias web dinámicas y escalables.',
	},
	/*{
		icon: 'icon-mobile.svg',
		alt: 'Mobile app icon',
		title: 'Mobile Development',
		text: 'Diseño y desarrollo aplicaciones móviles intuitivas y funcionales, enfocadas en la experiencia del usuario y la optimización para diferentes dispositivos.',
	},*/
	{
		icon: 'icon-database.svg',
		alt: 'Database icon',
		title: 'Data Base',
		text: 'Administro y diseño bases de datos seguras y eficientes, garantizando la integridad de la información y el acceso rápido a los datos para aplicaciones y sistemas.',
	},
	{
		icon: 'icon-github.svg',
		alt: 'Github management icon',
		title: 'GitHub Management',
		text: 'Organizo y gestiono repositorios en GitHub, aplicando control de versiones, flujos de trabajo colaborativos y buenas prácticas para proyectos de desarrollo.',
	},
	{
		icon: 'icon-codeforces.svg',
		alt: 'Codeforces icon',
		title: 'CodeForces',
		text: 'Participo de vez en cuando en retos de programación y resolución de problemas algorítmicos, mejorando mis habilidades y aprendiendo nuevas técnicas constantemente.',
	},
];

export function Services() {
  return (
    <section className="service">
      <SlideInRightOnScroll>
        <h3 className="h3 service-title">What I'm doing</h3>
      </SlideInRightOnScroll>
      <ul className="service-list">
        {services.map((service) => (
          <FadeInUpOnScroll key={service.title}>
            <li className="service-item">
              <div className="service-icon-box">
                <img src={`${BASE_URL}assets/icons/${service.icon}`} alt={service.alt} />
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