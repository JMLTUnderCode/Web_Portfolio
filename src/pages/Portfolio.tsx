import React, { useState } from 'react';
import { IoChevronDown, IoEyeOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

const BASE_URL = import.meta.env.BASE_URL;

type Project = {
	title: string;
	category: string;
	img: string;
	alt: string;
	url: string;
};

const projects: Project[] = [
	{ 
		title: 'Finance', 
		category: 'web development', 
		img: `${BASE_URL}assets/images/project-1.jpg`, 
		alt: 'finance', 
		url: '#'
	},
	{ 
		title: 'Orizon', 
		category: 'web development', 
		img: `${BASE_URL}assets/images/project-2.png`, 
		alt: 'orizon', 
		url: '#' 
	},
	{ 
		title: 'Fundo', 
		category: 'web design', 
		img: `${BASE_URL}assets/images/project-3.jpg`, 
		alt: 'fundo', 
		url: '#'
	},
	{ 
		title: 'Brawlhalla', 
		category: 'applications', 
		img: `${BASE_URL}assets/images/project-4.png`, 
		alt: 'brawlhalla', 
		url: '#'
	},
	{ 
		title: 'DSM.', 
		category: 'web design', 
		img: `${BASE_URL}assets/images/project-5.png`, 
		alt: 'dsm.', 
		url: '#'
	},
	{ 
		title: 'MetaSpark', 
		category: 'web design', 
		img: `${BASE_URL}assets/images/project-6.png`,  
		alt: 'metaspark', 
		url: '#' 
	},
	{ 
		title: 'Summary', 
		category: 'web development', 
		img: `${BASE_URL}assets/images/project-7.png`, 
		alt: 'summary', 
		url: '#' 
	},
	{ 
		title: 'Task Manager', 
		category: 'applications', 
		img: `${BASE_URL}assets/images/project-8.jpg`, 
		alt: 'task manager', 
		url: '#' 
	},
	{ 
		title: 'Arrival', 
		category: 'web development', 
		img: `${BASE_URL}assets/images/project-9.png`, 
		alt: 'arrival', 
		url: '#' 
	},
];

const categories = ['all', 'web design', 'applications', 'web development'];

const Portfolio: React.FC = () => {
	const location = useLocation();
	const isActive = location.pathname === '/portfolio';

	const [selectedCategory, setSelectedCategory] = useState('all');
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const filteredProjects =
		selectedCategory === 'all'
			? projects
			: projects.filter((p) => p.category === selectedCategory);

	return (
		<article className={`portfolio${isActive ? ' active' : ''}`} data-page="portfolio">
			<header>
				<h2 className="h2 article-title">Portfolio</h2>
			</header>

			<section className="projects">
				{/* Filtros para desktop */}
				<ul className="filter-list">
					{categories.map((cat) => (
						<li className="filter-item" key={cat}>
							<button
								className={selectedCategory === cat ? 'active' : ''}
								onClick={() => setSelectedCategory(cat)}
								data-filter-btn
							>
								{cat.charAt(0).toUpperCase() + cat.slice(1)}
							</button>
						</li>
					))}
				</ul>

				{/* Filtro select para mobile */}
				<div className="filter-select-box">
			  		<button
						className="filter-select"
						data-select
						onClick={() => setDropdownOpen((open) => !open)}
					>
						<div className="select-value" data-selecct-value>
						  	{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
						</div>
						<div className="select-icon">
						  	<IoChevronDown />
						</div>
		  			</button>
		  			{dropdownOpen && (
						<ul className="select-list">
							{categories.map((cat) => (
								<li className="select-item" key={cat}>
								  	<button
										data-select-item
										onClick={() => {
										  	setSelectedCategory(cat);
										  	setDropdownOpen(false);
										}}
								  	>
										{cat.charAt(0).toUpperCase() + cat.slice(1)}
								  	</button>
								</li>
							))}
						</ul>
		  			)}
				</div>

				{/* Lista de proyectos */}
				<ul className="project-list">
		  			{filteredProjects.map((project) => (
						<li
						  	className="project-item active"
						 	data-filter-item
						 	data-category={project.category}
						  	key={project.title}
						>
						  	<a href={project.url}>
								<figure className="project-img">
								  	<div className="project-item-icon-box">
										<IoEyeOutline />
								  	</div>
								  	<img src={project.img} alt={project.alt} loading="lazy" />
								</figure>
								<h3 className="project-title">{project.title}</h3>
								<p className="project-category">
								  	{project.category.charAt(0).toUpperCase() + project.category.slice(1)}
								</p>
						  	</a>
						</li>
		  			))}
				</ul>
	  		</section>
		</article>
  	);
};

export default Portfolio;