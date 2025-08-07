import React from 'react';
import { IoBookOutline, IoBriefcaseOutline, IoSparklesOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

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
		name: "Desarrollador Backend",
		start: "2023",
		end: "2023",
		description: "Descripcion",
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
			{ name: 'C/C++', logo: `${BASE_URL}assets/logo/logo-cpp.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
			{ name: 'Python', logo: `${BASE_URL}assets/logo/logo-python.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
			{ name: 'JavaScript', logo: `${BASE_URL}assets/logo/logo-javascript.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
			{ name: 'TypeScript', logo: `${BASE_URL}assets/logo/logo-typescript.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
			{ name: 'HTML5', logo: `${BASE_URL}assets/logo/logo-html5.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
			{ name: 'CSS3', logo: `${BASE_URL}assets/logo/logo-css3.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
		],
	},
	{
		category: 'Frameworks y Librerías',
		skills: [
			{ name: 'React', logo: `${BASE_URL}assets/logo/logo-react.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
			{ name: 'Django', logo: `${BASE_URL}assets/logo/logo-django.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
		],
	},
	{
		category: 'Bases de Datos',
		skills: [
			{ name: 'MongoDB', logo: `${BASE_URL}assets/logo/logo-mongodb.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
			{ name: 'PostgreSQL', logo: `${BASE_URL}assets/logo/logo-postgresql.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
			{ name: 'MySQL', logo: `${BASE_URL}assets/logo/logo-mysql.svg`, level: 'Intermedio', tagClass: 'nivel-intermedio' },
		],
	},
];

const Resume: React.FC = () => {
	const location = useLocation();
	const isActive = location.pathname === '/resume';
	return (
		<article className={`pages resume${isActive ? ' active' : ''}`} data-page="resume">
			<header>
				<h2 className="h2 article-title animate__animated animate__lightSpeedInRight">Resume</h2>
			</header>
			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<IoBookOutline />
					</div>
					<h3 className="h3">Education</h3>
				</div>
				<ol className="timeline-list">
					{educationList.map((item) => (
						<li className="timeline-item" key={item.name}>
							<h4 className="h4 timeline-item-title">{item.name}</h4>
							<span>{item.start} — {item.end}</span>
							<p className="timeline-text">{item.description}</p>
						</li>
					))}
				</ol>
			</section>

			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<IoBriefcaseOutline />
					</div>
					<h3 className="h3">Experience</h3>
				</div>

				<ol className="timeline-list">
					{experienceList.map((item) => (
						<li className="timeline-item" key={item.name}>
							<h4 className="h4 timeline-item-title">{item.name}</h4>
							<span>{item.start} — {item.end}</span>
							<p className="timeline-text">{item.description}</p>
						</li>
					))}
				</ol>
			</section>

			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<IoSparklesOutline />
					</div>
					<h3 className="h3">My Skills</h3>
				</div>

				<ol className="timeline-list">
					<section className="skill">
						{skillGroups.map((group) => (
					  		<div key={group.category}>
								<li className="timeline-item">
									<h4 className="h4 timeline-item-title">{group.category}</h4>
									<ul className="skills-list content-card">
							  			{group.skills.map((skill) => (
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