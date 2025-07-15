import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Flask', icon: 'fas fa-flask' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Ollama', icon: 'fas fa-brain' }, // Icono genérico para IA/Ollama
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Automatización', icon: 'fas fa-robot' },
    { name: 'Marketing Digital', icon: 'fas fa-bullhorn' },
    { name: 'Análisis de Datos', icon: 'fas fa-chart-line' },
  ];

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <h2 className={`animate-on-scroll ${inView ? 'is-visible' : ''}`}>Mis Habilidades y Tecnologías</h2>
      <p className={`animate-on-scroll ${inView ? 'is-visible' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className={`skills-grid animate-on-scroll ${inView ? 'is-visible' : ''}`}>
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <i className={skill.icon}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
