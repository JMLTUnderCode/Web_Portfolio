import React from 'react';
import { useLocation } from 'react-router-dom';

const About: React.FC = () => {
	const location = useLocation();
	const isActive = location.pathname === '/about';
	return (
		<article className={`about${isActive ? ' active' : ''}`} data-page="about">
			<header>
				<h2 className="h2 article-title">About me</h2>
			</header>
			<section className="about-text">
				<p>
					¡Hola! Soy un desarrollador apasionado por crear experiencias interactivas y soluciones 
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
							<img src="./src/assets/icons/icon-design.svg" alt="design icon" width="40" />
						</div>
						<div className="service-content-box">
							<h4 className="h4 service-item-title">Front development</h4>
							<p className="service-item-text">
								Descripcion
							</p>
						</div>
					</li>
					<li className="service-item">
						<div className="service-icon-box">
							<img src="./src/assets/icons/icon-dev.svg" alt="Web development icon" width="40" />
						</div>
						<div className="service-content-box">
							<h4 className="h4 service-item-title">Back development</h4>
							<p className="service-item-text">
								Descripcion
							</p>
						</div>
					</li>
					<li className="service-item">
						<div className="service-icon-box">
							<img src="./src/assets/icons/icon-app.svg" alt="mobile app icon" width="40" />
						</div>
						<div className="service-content-box">
							<h4 className="h4 service-item-title">Mobile development</h4>
							<p className="service-item-text">
								Descripcion
							</p>
						</div>
					</li>
					<li className="service-item">
						<div className="service-icon-box">
							<img src="./src/assets/icons/icon-photo.svg" alt="camera icon" width="40" />
						</div>
						<div className="service-content-box">
							<h4 className="h4 service-item-title">Data Base</h4>
							<p className="service-item-text">
								Descripcion
							</p>
						</div>
					</li>
					<li className="service-item">
						<div className="service-icon-box">
							<img src="" alt="" width="40" />
						</div>
						<div className="service-content-box">
							<h4 className="h4 service-item-title">GitHub Management</h4>
							<p className="service-item-text">
								Descripcion
							</p>
						</div>
					</li>
					<li className="service-item">
						<div className="service-icon-box">
							<img src="" alt="" width="40" />
						</div>
						<div className="service-content-box">
							<h4 className="h4 service-item-title">Code Forces</h4>
							<p className="service-item-text">
								Descripcion
							</p>
						</div>
					</li>
				</ul>
			</section>
		</article>
	);
};

export default About;