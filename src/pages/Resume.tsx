import React from 'react';
import { IoBookOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

//const BASE_URL = import.meta.env.BASE_URL;

const Resume: React.FC = () => {
	const location = useLocation();
	const isActive = location.pathname === '/resume';
	return (
		<article className={`resume${isActive ? ' active' : ''}`} data-page="resume">
			<header>
				<h2 className="h2 article-title">Resume</h2>
			</header>
			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<IoBookOutline />
					</div>
					<h3 className="h3">Education</h3>
				</div>
				<ol className="timeline-list">
					<li className="timeline-item">
						<h4 className="h4 timeline-item-title">Universidad Simón Bolívar</h4>
						<span>2017 — Present</span>
						<p className="timeline-text">
							Descripcion
						</p>
					</li>

					<li className="timeline-item">
						<h4 className="h4 timeline-item-title">Unidad Educativa Nacional Teresa de Bolívar</h4>
						<span>2010 — 2017</span>
						<p className="timeline-text">
							Descripcion
						</p>
					</li>

					<li className="timeline-item">
						<h4 className="h4 timeline-item-title">Unidad Educativa Estadal Juan German Roscio</h4>
						<span>2002 — 2010</span>
						<p className="timeline-text">
							Descripcion
						</p>
					</li>
				</ol>
			</section>

			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<IoBookOutline />
					</div>
					<h3 className="h3">Experience</h3>
				</div>

				<ol className="timeline-list">
					<li className="timeline-item">
						<h4 className="h4 timeline-item-title">Desarrollador Backend</h4>
						<span>2023 — 2023</span>
						<p className="timeline-text">
							Descripcion
						</p>
					</li>

				</ol>
			</section>

			<section className="skill">
				<h3 className="h3 skills-title">My skills</h3>
				<ul className="skills-list content-card">
					<li className="skills-item">
						<div className="title-wrapper">
							<h5 className="h5">C/C++</h5>
							<data value="80">80%</data>
						</div>
						<div className="skill-progress-bg">
							<div className="skill-progress-fill" style={{ width: '80%' }}></div>
						</div>
					</li>

					<li className="skills-item">
						<div className="title-wrapper">
							<h5 className="h5">Python</h5>
							<data value="70">70%</data>
						</div>
						<div className="skill-progress-bg">
							<div className="skill-progress-fill" style={{ width: '70%' }}></div>
						</div>
					</li>

					<li className="skills-item">
						<div className="title-wrapper">
							<h5 className="h5">Django</h5>
							<data value="90">90%</data>
						</div>
						<div className="skill-progress-bg">
							<div className="skill-progress-fill" style={{ width: '90%' }}></div>
						</div>
					</li>

					<li className="skills-item">
						<div className="title-wrapper">
							<h5 className="h5">Mongo DB</h5>
							<data value="50">50%</data>
						</div>
						<div className="skill-progress-bg">
							<div className="skill-progress-fill" style={{ width: '50%' }}></div>
						</div>
					</li>

					<li className="skills-item">
						<div className="title-wrapper">
							<h5 className="h5">HTML</h5>
							<data value="50">50%</data>
						</div>
						<div className="skill-progress-bg">
							<div className="skill-progress-fill" style={{ width: '50%' }}></div>
						</div>
					</li>

					<li className="skills-item">
						<div className="title-wrapper">
							<h5 className="h5">CSS</h5>
							<data value="50">50%</data>
						</div>
						<div className="skill-progress-bg">
							<div className="skill-progress-fill" style={{ width: '50%' }}></div>
						</div>
					</li>

					<li className="skills-item">
						<div className="title-wrapper">
							<h5 className="h5">JavaScript</h5>
							<data value="50">50%</data>
						</div>
						<div className="skill-progress-bg">
							<div className="skill-progress-fill" style={{ width: '50%' }}></div>
						</div>
					</li>

					<li className="skills-item">
						<div className="title-wrapper">
							<h5 className="h5">TypeScript</h5>
							<data value="50">50%</data>
						</div>
						<div className="skill-progress-bg">
							<div className="skill-progress-fill" style={{ width: '50%' }}></div>
						</div>
					</li>

					<li className="skills-item">
						<div className="title-wrapper">
							<h5 className="h5">React</h5>
							<data value="50">50%</data>
						</div>
						<div className="skill-progress-bg">
							<div className="skill-progress-fill" style={{ width: '50%' }}></div>
						</div>
					</li>
				</ul>
			</section>
		</article>
	);
};

export default Resume;