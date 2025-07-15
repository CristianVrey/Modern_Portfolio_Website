import React from 'react';
// import { useInView } from 'react-intersection-observer'; // Comentado temporalmente
import './Hero.css';

function Hero() {
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  return (
    <section id="hero" className="section hero-section" /* ref={ref} */>
      <h1>Innovación y Desarrollo Tecnológico</h1>
      <p>Transformando ideas en soluciones digitales de alto impacto.</p>
      <button>Explora Nuestros Servicios</button>
    </section>
  );
}

export default Hero;