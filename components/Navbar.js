'use client';
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <picture>
            <source srcSet="/images/hero/logotipo-nuevo1.webp" type="image/webp" />
            <img
              src="/images/hero/logotipo-nuevo1.png"
              alt="Dr. Kombucha"
              className="navbar-logo-img"
            />
          </picture>
          <span className="navbar-brand">DR. KOMBUCHA</span>
        </div>
        
        <ul className="navbar-links">
          <li>
            <button onClick={() => scrollToSection('beneficios')} className="navbar-link">
              Beneficios
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('sabores')} className="navbar-link">
              Sabores
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('testimonios')} className="navbar-link">
              Testimonios
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('faq')} className="navbar-link">
              FAQ
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contacto')} className="navbar-link">
              Contacto
            </button>
          </li>
        </ul>
        
        <a
          href="https://wa.me/523221978144?text=¡Hola!%20Estoy%20interesado%20en%20el%20paquete%20de%20introducción%20de%20Dr.%20Kombucha."
          className="navbar-cta"
        >
          Pedir Ahora
        </a>
      </div>
    </nav>
  );
}
