import React from 'react';
import './Navbar.css';

function Navbar({ toggleTheme, currentTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">[Tu Nombre/Empresa]</div>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="#hero" className="nav-link">Inicio</a></li>
        <li className="nav-item"><a href="#about" className="nav-link">Sobre Mí</a></li>
        <li className="nav-item"><a href="#experience" className="nav-link">Experiencia</a></li> {/* Nuevo enlace */}
        <li className="nav-item"><a href="#skills" className="nav-link">Habilidades</a></li>
        <li className="nav-item"><a href="#projects" className="nav-link">Proyectos</a></li>
        <li className="nav-item"><a href="#contact" className="nav-link">Contacto</a></li>
        <li className="nav-item">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {currentTheme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;