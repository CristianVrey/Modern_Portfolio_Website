import React from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import './Projects.css';

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <h2 className={`animate-on-scroll ${inView ? 'is-visible' : ''}`}>Proyectos Destacados</h2>
      <Slider {...settings} className={`animate-on-scroll ${inView ? 'is-visible' : ''}`}>
        <div className="project-item">
          <img src="https://picsum.photos/id/237/300/200" alt="Proyecto de Automatización" />
          <h3>Automatización Inteligente</h3>
          <p>Desarrollo de flujos de trabajo automatizados con IA para optimizar procesos empresariales. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="project-item">
          <img src="https://picsum.photos/id/238/300/200" alt="Proyecto de Desarrollo Web" />
          <h3>Plataformas Web Interactivas</h3>
          <p>Creación de aplicaciones web modernas y responsivas con React y Flask. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="project-item">
          <img src="https://picsum.photos/id/239/300/200" alt="Proyecto de Marketing Digital" />
          <h3>Estrategias de Marketing Digital</h3>
          <p>Implementación de soluciones de marketing digital basadas en datos y análisis de tendencias. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
        <div className="project-item">
          <img src="https://picsum.photos/id/240/300/200" alt="Proyecto de Consultoría" />
          <h3>Consultoría Tecnológica</h3>
          <p>Asesoramiento experto para la transformación digital y la adopción de nuevas tecnologías. Lorem ipsum dolor sit amet.</p>
        </div>
      </Slider>
    </section>
  );
}

export default Projects;