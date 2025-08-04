import React from 'react';
import { IoChevronDown, IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline, IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5';
import Avatar3D from './Avatar3D';

//const BASE_URL = import.meta.env.BASE_URL;

const Header: React.FC = () => (
	<aside className="sidebar" data-sidebar>
		<div className="sidebar-info">
			<figure className="avatar-box">
				<Avatar3D />
			</figure>
			<div className="info-content">
				<h1 className="name" title="Junior M. Lara T.">Junior M. Lara T.</h1>
				<p className="title">Web/Software developer</p>
			</div>
			<button className="info_more-btn" data-sidebar-btn>
				<span>Show Contacts</span>
				<IoChevronDown />
			</button>
		</div>
		<div className="sidebar-info_more">
			<div className="separator"></div>
			<ul className="social-list">
				<li className="social-item">
					<a
						href="https://www.linkedin.com/in/jmltundercode"
						className="social-link"
						target="_blank"
						rel="noopener noreferrer"
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

export default Header;