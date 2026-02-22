'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Page() {
  const handleWhatsAppClick = (message) => {
    window.open(`https://wa.me/523221234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-bg text-brand-text font-sans">
        
        {/* HERO SECTION - CENTERED LAYOUT */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-brand-bg">
          <div className="container mx-auto max-w-[1180px] relative z-10 text-center">
            {/* Centered Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/images/hero/logotipo-nuevo1.webp"
                alt="Dr. Kombucha Logo"
                width={250}
                height={250}
                priority
                className="logo-img-centered"
              />
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-serif mb-4 tracking-tighter text-brand-text leading-none">
              Dr. Kombucha
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-10 font-bold text-brand-primary tracking-widest uppercase">
              SABOR ARTESANAL DEL PUERTO
            </p>

            {/* Hero Image - 3 Bottles */}
            <div className="flex justify-center mb-12">
              <Image
                src="/images/hero/hero.webp"
                alt="Dr. Kombucha - Tres botellas artesanales"
                width={800}
                height={600}
                priority
                className="w-full max-w-2xl h-auto drop-shadow-2xl"
              />
            </div>

            {/* CTA Button */}
            <button
              onClick={() => handleWhatsAppClick("Hola! Me gustaría hacer un pedido de Dr. Kombucha.")}
              className="px-12 py-5 bg-brand-primary text-white rounded-full font-bold text-xl hover:bg-brand-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 uppercase tracking-widest"
            >
              Pedir Ahora
            </button>
          </div>
        </section>

        {/* ¿QUÉ ES LA KOMBUCHA? SECTION */}
        <section className="py-32 bg-white" id="que-es">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-serif text-center mb-12 text-brand-primary">¿Qué es la kombucha?</h2>
            <div className="text-lg md:text-xl text-brand-text-muted leading-relaxed space-y-6">
              <p>
                Es una bebida fermentada a base de té y azúcar, transformados mediante un cultivo de levaduras y bacterias. El resultado es una bebida ligeramente ácida, refrescante y con un perfil de sabor equilibrado.
              </p>
              <p>
                La kombucha forma parte de una tradición de fermentación que prioriza el proceso, el tiempo y el cuidado del producto final.
              </p>
            </div>
          </div>
        </section>

        {/* CARACTERÍSTICAS SECTION - 3 COLUMN GRID */}
        <section className="py-32 bg-brand-bg-soft">
          <div className="section-container">
            <h2>Características</h2>
            <div className="benefits-grid">
              {[
                { 
                  title: "FERMENTACIÓN", 
                  desc: "Bebida obtenida mediante un proceso natural de fermentación controlada, que define su carácter y sabor." 
                },
                { 
                  title: "SABOR EQUILIBRADO", 
                  desc: "Perfil ligeramente ácido y refrescante, resultado del equilibrio entre té, azúcar y fermentación." 
                },
                { 
                  title: "INGREDIENTES SIMPLES", 
                  desc: "Elaborada con té, azúcar, agua y cultivo de fermentación. Sin procesos industriales agresivos." 
                },
                { 
                  title: "ALTERNATIVA A REFRESCOS", 
                  desc: "Una opción distinta frente a bebidas altamente azucaradas o artificiales." 
                },
                { 
                  title: "PROCESO ARTESANAL", 
                  desc: "Producción en pequeños lotes, cuidando cada etapa del proceso." 
                },
                { 
                  title: "FERMENTACIÓN ARTESANAL", 
                  desc: "Hecha para disfrutarse." 
                }
              ].map((item, i) => (
                <div key={i} className="benefit-card">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-10 shadow-sm border border-brand-accent/20 group-hover:scale-110 transition-transform mx-auto">
                    <div className="w-8 h-8 border-2 border-brand-cta rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    </div>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NUESTRA MISIÓN SECTION */}
        <section className="py-32 bg-white" id="mision">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-serif mb-12 text-brand-primary">Nuestra misión</h2>
            <div className="text-lg md:text-xl text-brand-text-muted leading-relaxed space-y-6">
              <p>
                Elaborar kombucha artesanal en Puerto Vallarta con un enfoque honesto y responsable, respetando el proceso de fermentación y priorizando la calidad del producto final.
              </p>
              <p>
                Buscamos ofrecer una bebida bien hecha, consistente y disfrutable, sin promesas exageradas ni discursos milagrosos.
              </p>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS SECTION - 3 COLUMN GRID */}
        <section className="py-32 bg-brand-bg-soft" id="testimonios">
          <div className="section-container">
            <h2>Lo que dicen quienes ya disfrutan Dr. Kombucha</h2>
            <p className="text-center text-lg text-brand-text-muted mb-20 max-w-3xl mx-auto">
              Nada habla mejor de nuestro producto que la experiencia real de quienes lo han probado. Nuestros clientes destacan el sabor, la frescura y el carácter artesanal de Dr. Kombucha.
            </p>
            <div className="testimonials-grid">
              {[
                {
                  name: "Ana G.",
                  text: "Me encanta el sabor y lo refrescante que es. Se nota que es un producto artesanal y bien cuidado."
                },
                {
                  name: "Luis M.",
                  text: "La kombucha tiene un perfil muy equilibrado, no es agresiva ni empalagosa. Se volvió parte de mi rutina."
                },
                {
                  name: "María R.",
                  text: "Excelente calidad y sabor auténtico. El proceso artesanal se nota en cada sorbo."
                }
              ].map((testi, i) => (
                <div key={i} className="testimonial-card">
                  <p className="text-xl mb-8 text-brand-text-muted leading-relaxed font-sans">{testi.text}</p>
                  <p className="font-sans font-bold text-brand-primary tracking-widest">— {testi.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES SECTION */}
        <section className="py-32 bg-white" id="faq">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-serif text-center mb-20 text-brand-primary">Preguntas frecuentes</h2>
            <div className="space-y-10">
              {[
                {
                  q: "¿Cuántas calorías tiene la kombucha?",
                  a: "Aproximadamente 30–40 calorías por porción de 250 ml, dependiendo del sabor y del grado de fermentación."
                },
                {
                  q: "¿Cómo puedo hacer un pedido?",
                  a: "Puedes hacer tu pedido directamente por WhatsApp y elegir tu paquete disponible."
                },
                {
                  q: "¿Cómo debo conservar la kombucha?",
                  a: "Al ser una bebida fermentada, debe mantenerse refrigerada para conservar mejor su sabor y características."
                },
                {
                  q: "¿En qué presentaciones viene?",
                  a: "Se vende en paquetes de seis botellas de 355 ml, con sabores a elegir."
                }
              ].map((faq, i) => (
                <div key={i} className="border-b border-brand-accent/10 pb-8">
                  <h3 className="text-2xl font-serif font-bold mb-4 text-brand-primary">{faq.q}</h3>
                  <p className="text-lg text-brand-text-muted leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL SECTION */}
        <section className="py-32 bg-brand-bg-soft text-center">
           <h2>¿Listo para probar kombucha artesanal?</h2>
           <p className="text-xl text-brand-text-muted mb-16 max-w-2xl mx-auto">
             Haz tu pedido directamente por WhatsApp. Es rápido y sencillo.
           </p>
           <button 
              onClick={() => handleWhatsAppClick("Hola! Quiero hacer mi pedido de Dr. Kombucha.")}
              className="cta-button"
            >
              Hacer Pedido
            </button>
        </section>

        <footer className="py-20 bg-brand-dark text-brand-bg/50 text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-2">Dr. Kombucha</p>
          <p className="text-xs tracking-[0.2em]">Kombucha artesanal, hecha con respeto por el proceso.</p>
          <p className="text-xs mt-4 opacity-40">© {new Date().getFullYear()} — Puerto Vallarta, México</p>
        </footer>
      </main>
    </>
  );
}
