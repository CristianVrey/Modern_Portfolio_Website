import React, { useState, useEffect } from 'react';
import './Global.css';
import './App.css';

// Importar componentes de sección
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience'; // Importar el componente Experience
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light'); // 'light' o 'dark'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <Hero />
      <About />
      <Experience /> {/* Añadir el componente Experience aquí */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;