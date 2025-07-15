import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Desarrollador Full-Stack',
      company: 'Tech Solutions Inc.',
      years: 'Enero 2022 - Presente',
      description: 'Liderazgo en el desarrollo de aplicaciones web escalables utilizando Python (Flask) y React. Implementación de APIs RESTful y bases de datos NoSQL. Optimización de rendimiento y despliegue en entornos Docker.'
    },
    {
      title: 'Especialista en Automatización de IA',
      company: 'Innovate AI Lab',
      years: 'Julio 2020 - Diciembre 2021',
      description: 'Diseño e implementación de flujos de trabajo automatizados con n8n y modelos de lenguaje grandes (LLMs) para marketing y ventas. Creación de agentes de IA para generación de contenido y calificación de leads.'
    },
    {
      title: 'Consultor de Marketing Digital',
      company: 'Growth Strategies Agency',
      years: 'Marzo 2018 - Junio 2020',
      description: 'Desarrollo y ejecución de estrategias de marketing digital, incluyendo SEO, SEM y gestión de redes sociales. Análisis de datos para optimización de campañas y mejora del ROI.'
    },
  ];

  return (
    <section id="experience" className="section experience-section" ref={ref}>
      <h2 className={`animate-on-scroll ${inView ? 'is-visible' : ''}`}>Mi Experiencia Profesional</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className={`timeline-item animate-on-scroll ${inView ? 'is-visible' : ''}`} key={index}>
            <h3>{exp.title}</h3>
            <h4>{exp.company} | {exp.years}</h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
