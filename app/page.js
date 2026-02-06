
'use client';

import React from 'react';
import Navbar from '../components/Navbar';

export default function Page() {
  const handleWhatsAppClick = (message) => {
    window.open(`https://wa.me/523221234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-bg text-brand-text font-sans">
        
        {/* HERO SECTION - RETRO COASTAL ELEGANCE */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-7xl md:text-[10rem] font-serif font-bold mb-6 tracking-tighter text-brand-primary leading-none">
              Dr. Kombucha
            </h1>
            <p className="text-2xl md:text-4xl mb-12 font-light text-brand-cta tracking-[0.4em] uppercase">
              Remedio Probiótico
            </p>
            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-xl md:text-2xl text-brand-text-muted leading-relaxed font-serif italic">
                "Ciencia artesanal fermentada a la orilla del mar."
              </p>
            </div>
            <button 
              onClick={() => handleWhatsAppClick("Hola! Me gustaría pedir una Kombucha.")}
              className="px-12 py-5 bg-brand-primary text-brand-bg rounded-full font-bold text-xl hover:bg-brand-cta transition-all duration-300 shadow-2xl uppercase tracking-widest"
            >
              Pedir Ahora
            </button>
          </div>
          
          {/* Decorative element for coastal vibe */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-bg-soft to-transparent opacity-50"></div>
        </section>

        {/* BENEFITS SECTION - CLEAN & SPACED */}
        <section className="py-32 bg-brand-bg-soft" id="beneficios">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-serif text-center mb-24 text-brand-dark">Beneficios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              {[
                { title: "INMUNIDAD", desc: "Refuerza tus defensas naturales con probióticos y antioxidantes naturales." },
                { title: "DIGESTIÓN", desc: "Equilibra tu flora intestinal, facilitando la absorción de nutrientes y vitalidad." },
                { title: "ENERGÍA", desc: "Vitaminas del complejo B y minerales que aportan vitalidad a tu día." }
              ].map((benefit, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-10 shadow-sm border border-brand-accent/20 group-hover:scale-110 transition-transform">
                    {/* Classy Geometric Icon */}
                    <div className="w-8 h-8 border-2 border-brand-cta rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-6 text-brand-primary tracking-widest uppercase">{benefit.title}</h3>
                  <p className="text-brand-text-muted leading-relaxed text-lg max-w-xs">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO SECTION - CLASSY ASYMMETRY */}
        <section className="py-32 bg-white" id="proceso">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-brand-accent/20 rounded-2xl"></div>
                <div className="w-full aspect-[3/4] bg-brand-bg-soft rounded-xl overflow-hidden shadow-2xl relative z-10 flex items-center justify-center">
                  <span className="font-serif italic text-brand-accent">Cosecha Artesanal</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-brand-cta font-bold tracking-widest uppercase mb-4 block">Fermentación Controlada</span>
              <h2 className="text-5xl md:text-8xl font-serif font-bold mb-10 text-brand-primary leading-tight">Ciencia & Sabor</h2>
              <p className="text-2xl leading-relaxed text-brand-text/80 mb-12 font-light">
                No es solo kombucha, es ciencia aplicada. Cada lote es supervisado para asegurar la densidad probiótica que tu cuerpo merece.
              </p>
              <div className="flex items-center gap-6">
                <div className="w-20 h-[1px] bg-brand-cta"></div>
                <p className="uppercase tracking-[0.5em] font-bold text-sm text-brand-cta">Hecho en Puerto Vallarta</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-32 bg-brand-bg text-center">
           <h2 className="text-4xl md:text-7xl font-serif mb-16 text-brand-primary">¿Listo para tu dosis?</h2>
           <button 
              onClick={() => handleWhatsAppClick("Hola! Quiero empezar mi tratamiento con Dr. Kombucha.")}
              className="px-16 py-8 bg-brand-cta text-white rounded-full font-bold text-2xl hover:bg-brand-primary transition-all shadow-2xl uppercase tracking-widest"
            >
              Contactar al Doctor
            </button>
        </section>

        <footer className="py-20 bg-brand-dark text-brand-bg/40 text-center text-xs tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} — Dr. Kombucha — Pureza Fermentada
        </footer>
      </main>
    </>
  );
}
