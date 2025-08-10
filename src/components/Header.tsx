import React, { useRef } from 'react';
import {
	IoChevronDown,
	IoMailOutline,
	IoPhonePortraitOutline,
	IoCalendarOutline,
	IoLocationOutline,
	IoLogoFacebook,
	IoLogoLinkedin,
	IoLogoInstagram,
	IoLogoGithub
} from 'react-icons/io5';
import CodeforcesIcon from '../assets/CordeforcesIcon';
import Avatar3D from './animation/Avatar3D';

const SOCIALS = [
	{
		href: "https://github.com/JMLTUnderCode",
		icon: <IoLogoGithub />,
		title: "GitHub Profile"
	},
	{
		href: "https://codeforces.com/profile/JMLTUnderCode",
		icon: <CodeforcesIcon width={24} />,
		title: "Codeforces Profile"
	},
	{
		href: "https://www.linkedin.com/in/jmltundercode",
		icon: <IoLogoLinkedin />,
		title: "LinkedIn Profile"
	},
	{
		href: "https://www.facebook.com/juniormiguel.lara",
		icon: <IoLogoFacebook />,
		title: "Facebook Profile"
	},
	{
		href: "https://www.instagram.com/juniormlts",
		icon: <IoLogoInstagram />,
		title: "Instagram Profile"
	}
];

const CONTACTS = [
	{
		icon: <IoMailOutline />,
		title: "Email",
		value: <a href="mailto:juniormiguel08062@gmail.com" className="contact-link">juniormiguel08062@gmail.com</a>
	},
	{
		icon: <IoPhonePortraitOutline />,
		title: "Phone",
		value: <a href="tel:+584120247180" className="contact-link">+58 (412) 024-7180</a>
	},
	{
		icon: <IoCalendarOutline />,
		title: "Birthday",
		value: <time dateTime="1999-06-08">June 08, 1999</time>
	},
	{
		icon: <IoLocationOutline />,
		title: "Location",
		value: <address>Charallave, Miranda, Venezuela</address>
	}
];

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
					{SOCIALS.map((social, _) => (
						<li className="social-item" key={social.title}>
							<a
								href={social.href}
								className="social-link"
								target="_blank"
								rel="noopener noreferrer"
								title={social.title}
							>
								{social.icon}
							</a>
						</li>
					))}
				</ul>
				<ul className="contacts-list">
					{CONTACTS.map((contact, _) => (
						<li className="contact-item" key={contact.title}>
							<div className="icon-box">{contact.icon}</div>
							<div className="contact-info">
								<p className="contact-title">{contact.title}</p>
								{contact.value}
							</div>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default Header;