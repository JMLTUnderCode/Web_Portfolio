import React from 'react';
import { NavLink } from 'react-router-dom';

const pages = ['about', 'resume', 'portfolio'];

const Navbar: React.FC = () => (
	<nav className="navbar">
		<ul className="navbar-list">
			{pages.map(page => (
				<li key={page} className="navbar-item">
					<NavLink
						to={`/${page}`}
						className={({ isActive }) =>
							`navbar-link${isActive ? ' active' : ''}`
						}
					>
						{page.charAt(0).toUpperCase() + page.slice(1)}
					</NavLink>
				</li>
			))}
		</ul>
	</nav>
);

export default Navbar;