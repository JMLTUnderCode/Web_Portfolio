import React from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = import.meta.env.BASE_URL;

const About: React.FC = () => {
	const location = useLocation();
	const isActive = location.pathname === '/about';
	return (
		<article className={`about${isActive ? ' active' : ''}`} data-page="about">
			<header>
				<h2 className="h2 article-title animate__animated animate__lightSpeedInRight">About me</h2>
			</header>
			<section className="about-text">
				<p>
					Soy un desarrollador apasionado por crear experiencias interactivas y soluciones 
					digitales bien pensadas. Mi experiencia abarca desde C, C++, Python y JavaScript, hasta 
					tecnologías web como HTML, CSS y PHP, además de bases de datos como PostgreSQL y MySQL. 
					También he explorado herramientas de inteligencia artificial como ChatGPT y Copilot para 
					potenciar mi flujo de trabajo.
				</p>
				<p>
					Me encanta trabajar en proyectos que abarcan el desarrollo de juegos, la creación de 
					páginas web dinámicas y hasta clones de aplicaciones populares como Twitter y YouTube. 
					Mi objetivo a largo plazo es convertirme en un desarrollador fullstack y, eventualmente, 
					profundizar en el desarrollo de videojuegos.
		  		</p>
				<p>
					Soy meticuloso en mi código: me preocupo por mantenerlo bien documentado y organizado, 
					siempre buscando maneras de optimizar y mejorar las soluciones que encuentro. Si bien 
					me gusta liderar proyectos, también disfruto cuando los demás aportan sus ideas y 
					habilidades. Valoro el trabajo en equipo y creo que la colaboración y la comunicación 
					son clave para lograr los mejores resultados.
				</p>
				<p>
					Fuera del código, me atraen las teorías científicas y el sci-fi. También disfruto 
					desafíos físicos y mentales que me mantengan enfocado y motivado en diferentes contextos. 
					¡Siempre estoy listo para aprender y enfrentar nuevos retos!
				</p>
			</section>
			<section className="service">
				<h3 className="h3 service-title">What I'm doing</h3>
				<ul className="service-list">
					<li className="service-item">
						<div className="service-icon-box">	
							<img src={`${BASE_URL}assets/icons/icon-software.svg`} alt="Software development icon" />
						</div>
						<div className="service-content-box">
							<h4 className="h4 service-item-title">Software Development</h4>
							<p className="service-item-text">
								Desarrollo aplicaciones robustas y eficientes, aplicando buenas prácticas y metodologías ágiles para entregar soluciones de calidad que se adaptan a las necesidades del usuario.
							</p>
						</div>
					</li>
					<li className="service-item">
						<div className="service-icon-box">
							<img src={`${BASE_URL}assets/icons/icon-dev.svg`} alt="Web development icon" />
						</div>
						<div className="service-content-box">
							<h4 className="h4 service-item-title">FullStack Development</h4>
							<p className="service-item-text">
								Construyo proyectos completos, desde el frontend interactivo hasta el backend funcional, integrando bases de datos y APIs para crear experiencias web dinámicas y escalables.
							</p>
						</div>
					</li>
					<li className="service-item">
						<div className="service-icon-box">
							<img src={`${BASE_URL}assets/icons/icon-mobile.svg`} alt="Mobile app icon" />
						</div>
						<div className="service-content-box">
							<h4 className="h4 service-item-title">Mobile Development</h4>
							<p className="service-item-text">
								Diseño y desarrollo aplicaciones móviles intuitivas y funcionales, enfocadas en la experiencia del usuario y la optimización para diferentes dispositivos.
							</p>
						</div>
					</li>
					<li className="service-item">
						<div className="service-icon-box">
							<img src={`${BASE_URL}assets/icons/icon-database.svg`} alt="Database icon" />
						</div>
						<div className="service-content-box">
							<h4 className="h4 service-item-title">Data Base</h4>
							<p className="service-item-text">
								Administro y diseño bases de datos seguras y eficientes, garantizando la integridad de la información y el acceso rápido a los datos para aplicaciones y sistemas.
							</p>
						</div>
					</li>
					<li className="service-item">
						<div className="service-icon-box">
							<img src={`${BASE_URL}assets/icons/icon-github.svg`} alt="Github management icon" />
						</div>
						<div className="service-content-box">
							<h4 className="h4 service-item-title">GitHub Management</h4>
							<p className="service-item-text">
								Organizo y gestiono repositorios en GitHub, aplicando control de versiones, flujos de trabajo colaborativos y buenas prácticas para proyectos de desarrollo.
							</p>
						</div>
					</li>
					<li className="service-item">
						<div className="service-icon-box">
							<img src={`${BASE_URL}assets/icons/icon-codeforces.svg`} alt="Codeforces icon" />
						</div>
						<div className="service-content-box">
							<h4 className="h4 service-item-title">CodeForces</h4>
							<p className="service-item-text">
								Participo de vez en cuando en retos de programación y resolución de problemas algorítmicos, mejorando mis habilidades y aprendiendo nuevas técnicas constantemente.
							</p>
						</div>
					</li>
				</ul>
			</section>
		</article>
	);
};

export default About;