import React from 'react';
import { IoChevronDown } from 'react-icons/io5';
import Avatar3D from './animation/Avatar3D';

import { SocialMenu } from './SocialMenu';
import { ContactMenu } from './ContactMenu';

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
        <SocialMenu />
        <ContactMenu />
      </div>
    </aside>
  );
};

export default Header;