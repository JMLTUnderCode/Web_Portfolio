import React from 'react';
import { IoBookOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

const BASE_URL = import.meta.env.BASE_URL;

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
					<li className="skills-card">
						<div className="skills-card-logo">
							<img src={`${BASE_URL}assets/logo/logo-cpp.svg`} alt="C/C++ logo" width={64} height={64} />
						</div>
						<div className="skills-card-info">
							<h5 className="skills-card-title">C/C++</h5>
							<div className="skills-card-level">
								<span className="skills-card-level-label">Nivel:</span>
								<span className="skills-card-level-tag nivel-intermedio">Intermedio</span>
							</div>
						</div>
					</li>

					<li className="skills-card">
						<div className="skills-card-logo">
							<img src={`${BASE_URL}assets/logo/logo-python.svg`} alt="Python logo" width={64} height={64} />
						</div>
						<div className="skills-card-info">
							<h5 className="skills-card-title">Python</h5>
							<div className="skills-card-level">
								<span className="skills-card-level-label">Nivel:</span>
								<span className="skills-card-level-tag nivel-intermedio">Intermedio</span>
							</div>
						</div>
					</li>

					<li className="skills-card">
						<div className="skills-card-logo">
							<img src={`${BASE_URL}assets/logo/logo-html5.svg`} alt="HTML5 logo" width={64} height={64} />
						</div>
						<div className="skills-card-info">
							<h5 className="skills-card-title">HTML5</h5>
							<div className="skills-card-level">
								<span className="skills-card-level-label">Nivel:</span>
								<span className="skills-card-level-tag nivel-intermedio">Intermedio</span>
							</div>
						</div>
					</li>
					
					<li className="skills-card">
						<div className="skills-card-logo">
							<img src={`${BASE_URL}assets/logo/logo-css3.svg`} alt="CSS3 logo" width={64} height={64} />
						</div>
						<div className="skills-card-info">
							<h5 className="skills-card-title">CSS3</h5>
							<div className="skills-card-level">
								<span className="skills-card-level-label">Nivel:</span>
								<span className="skills-card-level-tag nivel-intermedio">Intermedio</span>
							</div>
						</div>
					</li>

					<li className="skills-card">
						<div className="skills-card-logo">
							<img src={`${BASE_URL}assets/logo/logo-javascript.svg`} alt="JavaScript logo" width={64} height={64} />
						</div>
						<div className="skills-card-info">
							<h5 className="skills-card-title">JavaScript</h5>
							<div className="skills-card-level">
								<span className="skills-card-level-label">Nivel:</span>
								<span className="skills-card-level-tag nivel-intermedio">Intermedio</span>
							</div>
						</div>
					</li>

					<li className="skills-card">
						<div className="skills-card-logo">
							<img src={`${BASE_URL}assets/logo/logo-typescript.svg`} alt="TypeScript logo" width={64} height={64} />
						</div>
						<div className="skills-card-info">
							<h5 className="skills-card-title">TypeScript</h5>
							<div className="skills-card-level">
								<span className="skills-card-level-label">Nivel:</span>
								<span className="skills-card-level-tag nivel-intermedio">Intermedio</span>
							</div>
						</div>
					</li>

					<li className="skills-card">
						<div className="skills-card-logo">
							<img src={`${BASE_URL}assets/logo/logo-react.svg`} alt="React logo" width={64} height={64} />
						</div>
						<div className="skills-card-info">
							<h5 className="skills-card-title">React</h5>
							<div className="skills-card-level">
								<span className="skills-card-level-label">Nivel:</span>
								<span className="skills-card-level-tag nivel-intermedio">Intermedio</span>
							</div>
						</div>
					</li>

					<li className="skills-card">
						<div className="skills-card-logo">
							<img src={`${BASE_URL}assets/logo/logo-django.svg`} alt="Django logo" width={64} height={64} />
						</div>
						<div className="skills-card-info">
							<h5 className="skills-card-title">Django</h5>
							<div className="skills-card-level">
								<span className="skills-card-level-label">Nivel:</span>
								<span className="skills-card-level-tag nivel-intermedio">Intermedio</span>
							</div>
						</div>
					</li>

					<li className="skills-card">
						<div className="skills-card-logo">
							<img src={`${BASE_URL}assets/logo/logo-mongodb.svg`} alt="MongoDB logo" width={64} height={64} />
						</div>
						<div className="skills-card-info">
							<h5 className="skills-card-title">MongoDB</h5>
							<div className="skills-card-level">
								<span className="skills-card-level-label">Nivel:</span>
								<span className="skills-card-level-tag nivel-intermedio">Intermedio</span>
							</div>
						</div>
					</li>

					<li className="skills-card">
						<div className="skills-card-logo">
							<img src={`${BASE_URL}assets/logo/logo-postgresql.svg`} alt="PostgreSQL logo" width={64} height={64} />
						</div>
						<div className="skills-card-info">
							<h5 className="skills-card-title">PostgreSQL</h5>
							<div className="skills-card-level">
								<span className="skills-card-level-label">Nivel:</span>
								<span className="skills-card-level-tag nivel-intermedio">Intermedio</span>
							</div>
						</div>
					</li>

					<li className="skills-card">
						<div className="skills-card-logo">
							<img src={`${BASE_URL}assets/logo/logo-mysql.svg`} alt="MySQL logo" width={64} height={64} />
						</div>
						<div className="skills-card-info">
							<h5 className="skills-card-title">MySQL</h5>
							<div className="skills-card-level">
								<span className="skills-card-level-label">Nivel:</span>
								<span className="skills-card-level-tag nivel-intermedio">Intermedio</span>
							</div>
						</div>
					</li>
				</ul>
			</section>
		</article>
	);
};

export default Resume;