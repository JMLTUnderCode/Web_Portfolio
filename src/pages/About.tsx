import React from 'react';
import { useLocation } from 'react-router-dom';
import { Description } from '../components/Description';
import { Services } from '../components/Services';

const About: React.FC = () => {
  const location = useLocation();
  const isActive = location.pathname === '/about';

  return (
    <article className={`pages about${isActive ? ' active' : ''}`} data-page="about">
      <Description />
      <Services />
    </article>
  );
};

export default About;