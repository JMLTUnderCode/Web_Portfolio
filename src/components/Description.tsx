import FadeInUpOnScroll from '../components/animation/FadeInUpOnScroll';
import SlideInRightOnScroll from '../components/animation/SlideInRightOnScroll';

import { ABOUTME } from '../data/aboutme';

export function Description() {
  return (
    <>
      <header>
        <SlideInRightOnScroll>
          <h2 className="h2 article-title">About me</h2>
        </SlideInRightOnScroll>
      </header>
      
      <section className="about-text">
        {ABOUTME.map((text, idx) => (
          <FadeInUpOnScroll key={idx}>
            <p key={idx}>{text}</p>
          </FadeInUpOnScroll>
        ))}
      </section>
    </>
  )
}