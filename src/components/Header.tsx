import React from 'react';
import { IoChevronDown } from 'react-icons/io5';
import Avatar3D from './animation/Avatar3D';

import { SOCIALS } from '../data/socials';
import { CONTACTS } from '../data/contacts';

const Header: React.FC = () => {
  const sidebarRef = React.useRef<HTMLElement>(null);

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
          {SOCIALS.map((social) => (
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
          {CONTACTS.map((contact) => (
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