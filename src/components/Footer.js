import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Andres Rey. Todos los derechos reservados.</p>
      <div className="social-links">
        {/* Puedes añadir iconos de redes sociales aquí */}
        <a href="https://www.linkedin.com/in/andresrey/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/CristianVrey" target="_blank" rel="noopener noreferrer">GitHub</a>
        {/* Más enlaces a redes sociales */}
      </div>
    </footer>
  );
}

export default Footer;