import React, { useRef } from 'react';
import { IoChevronDown, IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline, IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5';
import CodeforcesIcon from '../../public/assets/icons/CordeforcesIcon';
import Avatar3D from './Avatar3D';

//const BASE_URL = import.meta.env.BASE_URL;

const Header: React.FC = () => {
	const sidebarRef = useRef<HTMLElement>(null);

	const handleSidebarToggle = () => {
		if (sidebarRef.current) {
			sidebarRef.current.classList.toggle('active');
		}
	};
	return (
		<aside className="sidebar" data-sidebar ref={sidebarRef}>
			<div className="sidebar-info">
				<figure className="avatar-box">
					<Avatar3D />
				</figure>
				<div className="info-content">
					<h1 className="name" title="Junior M. Lara T.">Junior M. Lara T.</h1>
					<p className="title">FullStack and Software Developer</p>
				</div>
				<button className="info_more-btn" data-sidebar-btn onClick={handleSidebarToggle}>
					<span>Show Contacts</span>
					<IoChevronDown />
				</button>
			</div>
			<div className="sidebar-info_more">
				<div className="separator"></div>
				<ul className="social-list">
					<li className="social-item">
						<a
							href="https://github.com/JMLTUnderCode"
							className="social-link"
							target="_blank"
							rel="noopener noreferrer"
							title="GitHub Profile"
						>
							<IoLogoGithub />
						</a>
					</li>
					<li className="social-item">
						<a
							href="https://codeforces.com/profile/JMLTUnderCode"
							className="social-link"
							target="_blank"
							rel="noopener noreferrer"
							title="Codeforces Profile"
						>
							<CodeforcesIcon width={24} />
						</a>
					</li>
					<li className="social-item">
						<a
							href="https://www.linkedin.com/in/jmltundercode"
							className="social-link"
							target="_blank"
							rel="noopener noreferrer"
							title="LinkedIn Profile"
						>
							<IoLogoLinkedin />
						</a>
					</li>
					<li className="social-item">
						<a
							href="https://www.facebook.com/juniormiguel.lara"
							className="social-link"
							target="_blank"
							rel="noopener noreferrer"
							title="Facebook Profile"
						>
							<IoLogoFacebook />
						</a>
					</li>
					<li className="social-item">
						<a
							href="https://www.instagram.com/juniormlts"
							className="social-link"
							target="_blank"
							rel="noopener noreferrer"
							title="Instagram Profile"
						>
							<IoLogoInstagram />
						</a>
					</li>
				</ul>
				<ul className="contacts-list">
					<li className="contact-item">
						<div className="icon-box">
							<IoMailOutline />
						</div>
						<div className="contact-info">
							<p className="contact-title">Email</p>
							<a href="mailto:juniormiguel08062@gmail.com" className="contact-link">juniormiguel08062@gmail.com</a>
						</div>
					</li>
					<li className="contact-item">
						<div className="icon-box">
							<IoPhonePortraitOutline />
						</div>
						<div className="contact-info">
							<p className="contact-title">Phone</p>
							<a href="tel:+584120247180" className="contact-link">+58 (412) 024-7180</a>
						</div>
					</li>
					<li className="contact-item">
						<div className="icon-box">
							<IoCalendarOutline />
						</div>
						<div className="contact-info">
							<p className="contact-title">Birthday</p>
							<time dateTime="1999-06-08">June 08, 1999</time>
						</div>
					</li>
					<li className="contact-item">
						<div className="icon-box">
							<IoLocationOutline />
						</div>
						<div className="contact-info">
							<p className="contact-title">Location</p>
							<address>Charallave, Miranda, Venezuela</address>
						</div>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Header;