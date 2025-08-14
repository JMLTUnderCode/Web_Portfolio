import React, { useState } from 'react';
import { IoChevronDown, IoEyeOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import SlideInRightOnScroll from '../components/animation/SlideInRightOnScroll';

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
		title: 'Portfolio Web', 
		category: 'web development', 
		img: `${BASE_URL}assets/images/projects/project-web-portfolio.png`, 
		alt: 'portfolio web', 
		url: 'https://jmltundercode.github.io/Web_Portfolio/#/about'
	},
];

const categories = ['all', 'web development'];

const Portfolio: React.FC = () => {
	const location = useLocation();
	const isActive = location.pathname === '/projects';

	const [selectedCategory, setSelectedCategory] = useState('all');
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const filteredProjects =
		selectedCategory === 'all'
			? projects
			: projects.filter((p) => p.category === selectedCategory);

	return (
		<article className={`pages projects${isActive ? ' active' : ''}`} data-page="projects">
			<header>
				<SlideInRightOnScroll>
					<h2 className="h2 article-title">Projects</h2>
				</SlideInRightOnScroll>
			</header>

			<section className="projects">
				
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