import React from 'react';
import { useLocation } from 'react-router-dom';
import FadeInUpOnScroll from '../components/FadeInUpOnScroll';
import SlideInRightOnScroll from '../components/SlideInRightOnScroll';

const BASE_URL = import.meta.env.BASE_URL;

// Ajusta el type Service a un objeto, no a una tupla
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
	{
		icon: 'icon-mobile.svg',
		alt: 'Mobile app icon',
		title: 'Mobile Development',
		text: 'Diseño y desarrollo aplicaciones móviles intuitivas y funcionales, enfocadas en la experiencia del usuario y la optimización para diferentes dispositivos.',
	},
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

const aboutParagraphs = [
	`Soy un desarrollador apasionado por crear experiencias interactivas y soluciones digitales bien pensadas. Mi experiencia abarca desde C, C++, Python y JavaScript, hasta tecnologías web como HTML, CSS y PHP, además de bases de datos como PostgreSQL y MySQL. También he explorado herramientas de inteligencia artificial como ChatGPT y Copilot para potenciar mi flujo de trabajo.`,
	`Me encanta trabajar en proyectos que abarcan el desarrollo de juegos, la creación de páginas web dinámicas y hasta clones de aplicaciones populares como Twitter y YouTube. Mi objetivo a largo plazo es convertirme en un desarrollador fullstack y, eventualmente, profundizar en el desarrollo de videojuegos.`,
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
		</article>
	);
};

export default About;