import React from 'react';
import { NavLink } from 'react-router-dom';

type Pages = {
	url: string;
	name: string;
};

const pages: Pages[] = [
	{ 
		url: 'about',
		name: 'About'
	},
	{ 
		url: 'resume',
		name: 'Resume'
	},
	{
		url: 'github_metrics',
		name: 'Github Metrics'
	},
	{ 
		url: 'projects',
		name: 'Projects'
	},
];

const Navbar: React.FC = () => (
	<nav className="navbar">
		<ul className="navbar-list">
			{pages.map((page) => (
				<li key={page.url} className="navbar-item">
					<NavLink
						to={`/${page.url}`}
						className={({ isActive }) =>
							`navbar-link${isActive ? ' active' : ''}`
						}
					>
						{page.name.charAt(0).toUpperCase() + page.name.slice(1)}
					</NavLink>
				</li>
			))}
		</ul>
	</nav>
);

export default Navbar;