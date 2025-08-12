import React from 'react';
import { IoBookOutline, IoBriefcaseOutline, IoSparklesOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import FadeInUpOnScroll from '../components/animation/FadeInUpOnScroll';
import SlideInRightOnScroll from '../components/animation/SlideInRightOnScroll';

const BASE_URL = import.meta.env.BASE_URL;

type EducationAndExperienceItem = {
	name: string;
	start: string;
	end: string;
	description: string;
};

const educationList: EducationAndExperienceItem[] = [
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

const experienceList: EducationAndExperienceItem[] = [
	{
		name: "Empire Keeway - Moto Candela",
		start: "2023",
		end: "2023",
		description: "Desarrollador Backend. Participé en el desarrollo de un sistema de gestión de inventario y ventas para la empresa, utilizando tecnologías como Django, Neon, Postgressql.",
	},
];

type Skill = {
	name: string;
	logo: string;
	level: string;
	tagClass: string;
};

const skillGroups: { category: string; skills: Skill[] }[] = [
	{
		category: 'Lenguajes de Programación',
		skills: [
			{ name: 'C++', logo: `${BASE_URL}assets/logo/logo-cpp.svg`, level: 'Alto', tagClass: 'nivel-alto' },
			{ name: 'Python', logo: `${BASE_URL}assets/logo/logo-python.svg`, level: 'Alto', tagClass: 'nivel-alto' },
			{ name: 'C', logo: `${BASE_URL}assets/logo/logo-c.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
			{ name: 'Latex', logo: `${BASE_URL}assets/logo/logo-latex.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
			{ name: 'HTML5', logo: `${BASE_URL}assets/logo/logo-html5.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
			{ name: 'CSS3', logo: `${BASE_URL}assets/logo/logo-css3.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
			{ name: 'php', logo: `${BASE_URL}assets/logo/logo-php.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
			{ name: 'JavaScript', logo: `${BASE_URL}assets/logo/logo-javascript.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
			{ name: 'TypeScript', logo: `${BASE_URL}assets/logo/logo-typescript.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
		],
	},
	{
		category: 'Frameworks, Librerías y Herramientas',
		skills: [
			{ name: 'Visual Studio Code', logo: `${BASE_URL}assets/logo/logo-vscode.svg`, level: 'Alto', tagClass: 'nivel-alto' },
			{ name: 'Linux (Ubuntu)', logo: `${BASE_URL}assets/logo/logo-linux.svg`, level: 'Alto', tagClass: 'nivel-alto' },
			{ name: 'GitHub', logo: `${BASE_URL}assets/logo/logo-github.svg`, level: 'Alto', tagClass: 'nivel-alto' },
			{ name: 'Git', logo: `${BASE_URL}assets/logo/logo-git.svg`, level: 'Alto', tagClass: 'nivel-alto' },
			{ name: 'GitHub Copilot', logo: `${BASE_URL}assets/logo/logo-copilot.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
			{ name: 'Django', logo: `${BASE_URL}assets/logo/logo-django.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
			{ name: 'Postman', logo: `${BASE_URL}assets/logo/logo-postman.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
			{ name: 'React', logo: `${BASE_URL}assets/logo/logo-react.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
			{ name: 'Node.js', logo: `${BASE_URL}assets/logo/logo-nodejs.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
			{ name: 'Express.js', logo: `${BASE_URL}assets/logo/logo-expressjs.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
			{ name: 'GitLab', logo: `${BASE_URL}assets/logo/logo-gitlab.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
			{ name: 'Matplotlib', logo: `${BASE_URL}assets/logo/logo-matplotlib.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
			{ name: 'NumPy', logo: `${BASE_URL}assets/logo/logo-numpy.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
			{ name: 'Pandas', logo: `${BASE_URL}assets/logo/logo-pandas.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
		],
	},
	{
		category: 'Servicios Web y Bases de Datos',
		skills: [
			{ name: 'GitHub Pages', logo: `${BASE_URL}assets/logo/logo-githubpages.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
			{ name: 'Neon', logo: `${BASE_URL}assets/logo/logo-neon.png`, level: 'Bajo', tagClass: 'nivel-bajo' },
			{ name: 'MongoDB Atlas', logo: `${BASE_URL}assets/logo/logo-mongodbatlas.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
			{ name: 'Render', logo: `${BASE_URL}assets/logo/logo-render.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
			{ name: 'Vercel', logo: `${BASE_URL}assets/logo/logo-vercel.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
			{ name: 'PostgreSQL', logo: `${BASE_URL}assets/logo/logo-postgresql.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
			{ name: 'MySQL', logo: `${BASE_URL}assets/logo/logo-mysql.svg`, level: 'Bajo', tagClass: 'nivel-bajo' },
		],
	},
];

const Resume: React.FC = () => {
	const location = useLocation();
	const isActive = location.pathname === '/resume';
	return (
		<article className={`pages resume${isActive ? ' active' : ''}`} data-page="resume">
			<header>
				<SlideInRightOnScroll>
					<h2 className="h2 article-title">Resume</h2>
				</SlideInRightOnScroll>
			</header>
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
					{educationList.map((item) => (
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

			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<IoBriefcaseOutline />
					</div>
					<SlideInRightOnScroll>
						<h3 className="h3">Experience</h3>
					</SlideInRightOnScroll>
				</div>

				<ol className="timeline-list">
					{experienceList.map((item) => (
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
						{skillGroups.map((group) => (
					  		<div key={group.category}>
								<li className="timeline-item">
									<h4 className="h4 timeline-item-title">{group.category}</h4>
									<ul className="skills-list content-card">
							  			{group.skills.map((skill) => (
											<FadeInUpOnScroll>
												<li className="skills-card" key={skill.name}>
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
		</article>
	);
};

export default Resume;