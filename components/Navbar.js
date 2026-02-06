'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', id: 'home' },
    { name: 'Beneficios', id: 'beneficios' },
    { name: 'Productos', id: 'productos' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contacto', id: 'contacto' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-brand-bg/95 backdrop-blur-md py-4 shadow-lg border-b border-brand-accent/10' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image 
            src="/images/hero/logotipo-nuevo1.png" 
            alt="Logo" 
            width={40} 
            height={40} 
            className={`transition-all duration-500 ${isScrolled ? 'scale-90' : 'scale-110'}`}
          />
          <span className={`text-xl font-bold tracking-tighter transition-colors duration-500 ${
            isScrolled ? 'text-brand-primary' : 'text-brand-primary'
          }`}>
            DR. KOMBUCHA
          </span>
        </div>
Update Navbar to match new classy style and brand colors
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              className="text-brand-text font-medium hover:text-brand-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-brand-primary text-brand-bg px-6 py-2 rounded-full font-bold hover:bg-brand-accent transition-all transform hover:scale-105 active:scale-95">
            Pedir Ahora
          </button>
        </div>

        {/* Mobile Menu Icon Placeholder */}
        <div className="md:hidden text-brand-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
