import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <h2 className={`animate-on-scroll ${inView ? 'is-visible' : ''}`}>Hablemos de tu Próximo Proyecto</h2>
      <p className={`animate-on-scroll ${inView ? 'is-visible' : ''}`}>¿Tienes una idea innovadora o necesitas optimizar tus operaciones? ¡Estoy listo para ayudarte a construir el futuro!</p>
      <form className={`contact-form animate-on-scroll ${inView ? 'is-visible' : ''}`} action="https://formspree.io/f/your-formspree-id" method="POST">
        <input type="text" name="name" placeholder="Tu Nombre" required />
        <input type="email" name="email" placeholder="Tu Email" required />
        <textarea name="message" placeholder="Tu Mensaje" required></textarea>
        <button type="submit">Enviar Mensaje</button>
      </form>
    </section>
  );
}

export default Contact;