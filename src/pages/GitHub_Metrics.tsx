import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { IoEyeOutline } from 'react-icons/io5';
import SlideInRightOnScroll from '../components/animation/SlideInRightOnScroll';
import FadeInUpOnScroll from '../components/animation/FadeInUpOnScroll';
import { Modal } from '../components/Modal';
// Uso de la animación de carga proviniente de LDRS.
import { Trefoil } from 'ldrs/react';
import 'ldrs/react/Trefoil.css';

import { METRICS } from '../data/metrics';

export function GitHub_Metrics() {
  const [modalUrl, setModalUrl] = React.useState<string | null>(null);
  const [isClosing, setIsClosing] = React.useState(false);
  const [imgLoaded, setImgLoaded] = React.useState(false);
  const location = useLocation();
  const isActive = location.pathname === '/github_metrics';
  const [loadedImages, setLoadedImages] = useState<{ [title: string]: boolean }>({});

  const handleOpenModal = (url: string) => {
    setModalUrl(url);
    setIsClosing(false);
    setImgLoaded(false);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalUrl(null);
      setIsClosing(false);
      setImgLoaded(false);
      document.body.style.overflow = '';
    }, 500); // Duración de ZoomOutDown
  };

  return (
    <article className={`pages github_metrics${isActive ? ' active' : ''}`} data-page="github_metrics">
      <header>
        <SlideInRightOnScroll>
          <h2 className="h2 article-title">Github Metrics</h2>
        </SlideInRightOnScroll>
      </header>
      <section className="projects">
        <ul className="project-list">
          {METRICS.map((metric) => (
            <FadeInUpOnScroll key={metric.title}>
              <li className="project-item active">
                <a
                  type="button"
                  className="metric-open-btn"
                  onClick={() => handleOpenModal(metric.url)}
                  title={`Ver ${metric.title}`}
                >
                  <h3 className="metric-title">{metric.title}</h3>
                  <figure className="project-img">
                      <div className="project-item-icon-box">
                        <IoEyeOutline />
                      </div>
                      {!loadedImages[metric.title] && (
                        <div className="metric-img-loader">
                          <Trefoil
                            size="50"
                            stroke="5"
                            strokeLength="0.15"
                            bgOpacity="0.1"
                            speed="1.4"
                            color="var(--vegas-gold)"
                          />
                        </div>
                      )}
                      <img
                        src={metric.img}
                        loading="lazy"
                        alt={metric.title}
                        className={`metric-img${loadedImages[metric.title] ? ' show' : ''}`}
                        onLoad={() => setLoadedImages(prev => ({ ...prev, [metric.title]: true }))}
                      />
                  </figure>
                </a>
              </li>
            </FadeInUpOnScroll>
          ))}
        </ul>
      </section>
      <Modal 
        modalUrl={modalUrl} 
        isClosing={isClosing} 
        imgLoaded={imgLoaded} 
        handleCloseModal={handleCloseModal} 
        setImgLoaded={setImgLoaded} 
      />
    </article>
  );
};