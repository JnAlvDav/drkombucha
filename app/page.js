'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Page() {
  const handleWhatsAppClick = (message) => {
    window.open(`https://wa.me/523221978144?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-bg text-brand-text font-sans">
        
        {/* HERO SECTION - CENTERED */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-brand-bg text-center" id="home">
          <div className="container mx-auto max-w-[1180px] relative z-10 flex flex-col items-center">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/images/hero/logotipo-nuevo1.webp"
                alt="Dr Kombucha logotipo"
                width={250}
                height={250}
                priority
                className="mx-auto"
              />
            </div>
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-serif font-black mb-4 tracking-tighter text-brand-text leading-none">
              Dr Kombucha
            </h1>
            {/* Subtitle */}
            <p className="text-2xl md:text-3xl mb-10 font-bold text-brand-primary tracking-wide">
              Sabor Artesanal del Puerto
            </p>
            {/* Hero image: 3 bottles */}
            <div className="mb-12 w-full max-w-lg">
              <Image
                src="/images/hero/hero.webp"
                alt="Dr Kombucha - tres botellas de kombucha artesanal: Granada, Natural y Mango"
                width={600}
                height={400}
                priority
                className="w-full h-auto drop-shadow-2xl mx-auto"
              />
            </div>
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleWhatsAppClick("Hola! Me gustaría hacer un pedido de Dr. Kombucha.")}
                className="px-12 py-5 bg-brand-primary text-white rounded-full font-bold text-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 uppercase tracking-widest"
              >
                Pedir por WhatsApp
              </button>
              <a
                href="#sabores"
                className="px-12 py-5 border-2 border-brand-primary text-brand-primary rounded-full font-bold text-xl hover:bg-brand-primary hover:text-white transition-all duration-300 uppercase tracking-widest text-center"
              >
                Ver Sabores
              </a>
            </div>
          </div>
        </section>

        {/* SABORES SECTION */}
        <section className="py-32 bg-white" id="sabores">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 text-brand-primary">Nuestros Sabores</h2>
            <div className="benefits-grid">
              {[
                {
                  title: "GRANADA",
                  desc: "Kombucha con notas afrutadas de granada. Ligero, refrescante y con carácter.",
                  img: "/images/hero/granada.webp",
                  imgAlt: "Botella Dr Kombucha sabor Granada"
                },
                {
                  title: "NATURAL",
                  desc: "La kombucha en su expresión más pura. Sabor equilibrado, ligeramente ácido.",
                  img: "/images/hero/natural.webp",
                  imgAlt: "Botella Dr Kombucha sabor Natural"
                },
                {
                  title: "MANGO",
                  desc: "Kombucha con mango de la región. Tropical, dulce y refrescante.",
                  img: "/images/hero/mango.webp",
                  imgAlt: "Botella Dr Kombucha sabor Mango"
                }
              ].map((item, i) => (
                <div key={i} className="benefit-card">
                  <Image
                    src={item.img}
                    alt={item.imgAlt}
                    width={200}
                    height={280}
                    className="mx-auto mb-6 h-48 w-auto object-contain drop-shadow-md"
                  />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CÓMO PEDIR SECTION */}
        <section className="py-32 bg-brand-bg-soft" id="como-pedir">
          <div className="section-container">
            <h2>Cómo Pedir</h2>
            <div className="benefits-grid">
              {[
                {
                  step: "01",
                  title: "Elige tus Sabores",
                  desc: "Selecciona tu combinación de sabores para tu six-pack: Granada, Natural o Mango. Cada paquete incluye 6 botellas de 355 ml."
                },
                {
                  step: "02",
                  title: "Envía tu WhatsApp",
                  desc: "Escríbenos directamente por WhatsApp con tu pedido. Te confirmamos disponibilidad y coordinamos la entrega."
                },
                {
                  step: "03",
                  title: "Recoge o pide mensajería",
                  desc: "Recoge en un punto acordado en Puerto Vallarta, o coordinamos envío por Uber o Rappi."
                }
              ].map((item, i) => (
                <div key={i} className="benefit-card">
                  <div className="step-number">{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <button
                onClick={() => handleWhatsAppClick("Hola! Me gustaría hacer un pedido de Dr. Kombucha.")}
                className="cta-button"
              >
                Pedir por WhatsApp
              </button>
            </div>
          </div>
        </section>

        {/* CARACTERÍSTICAS SECTION - 3 COLUMN GRID */}
        <section className="py-32 bg-white" id="caracteristicas">
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
                  title: "PRODUCCIÓN LOCAL", 
                  desc: "Elaborada en Puerto Vallarta, Jalisco. De aquí para ti." 
                }
              ].map((item, i) => (
                <div key={i} className="benefit-card">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-10 shadow-sm border border-brand-primary/20 mx-auto">
                    <div className="w-8 h-8 border-2 border-brand-primary rounded-full flex items-center justify-center">
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

        {/* TESTIMONIOS SECTION - 3 COLUMN GRID */}
        <section className="py-32 bg-brand-bg-soft" id="testimonios">
          <div className="section-container">
            <h2>Lo que dicen quienes ya disfrutan Dr Kombucha</h2>
            <p className="text-center text-lg text-brand-text-muted mb-20 max-w-3xl mx-auto">
              Nuestros clientes destacan el sabor, la frescura y el carácter artesanal de Dr Kombucha.
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
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-20 text-brand-primary">Preguntas frecuentes</h2>
            <div className="space-y-10">
              {[
                {
                  q: "¿Cuánto cuesta el six-pack?",
                  a: "$330 MXN el six-pack (6 botellas de 355 ml), lo que equivale a $55 MXN por botella. Puedes combinar sabores al gusto."
                },
                {
                  q: "¿Qué sabores tienen disponibles?",
                  a: "Contamos con tres sabores: Granada, Natural y Mango. Puedes armar tu six-pack con la combinación que prefieras."
                },
                {
                  q: "¿Cómo recibo mi pedido?",
                  a: "Puedes recoger tu pedido en un punto acordado en Puerto Vallarta, o coordinar el envío a domicilio a través de Uber o Rappi."
                },
                {
                  q: "¿Cómo debo conservar la kombucha?",
                  a: "Debe mantenerse refrigerada en todo momento para conservar su sabor y características. No la dejes a temperatura ambiente por tiempo prolongado."
                },
                {
                  q: "¿Cómo puedo hacer un pedido?",
                  a: "Escríbenos directamente por WhatsApp. Te respondemos a la brevedad para confirmar tu pedido y coordinar la entrega."
                },
                {
                  q: "¿Hay alguna consideración especial por ser un producto fermentado?",
                  a: "La kombucha es una bebida fermentada que puede contener trazas de alcohol. No se recomienda su consumo en mujeres embarazadas, personas inmunocomprometidas o menores de edad sin supervisión médica."
                }
              ].map((faq, i) => (
                <div key={i} className="border-b border-brand-primary/10 pb-8">
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
              Pedir por WhatsApp
            </button>
        </section>

        <footer className="py-20 bg-brand-dark text-brand-bg/50 text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-2">Dr Kombucha</p>
          <p className="text-xs tracking-[0.2em]">Sabor Artesanal del Puerto — Puerto Vallarta, Jalisco.</p>
          <p className="text-xs mt-4 opacity-40">© {new Date().getFullYear()} — Puerto Vallarta, México</p>
        </footer>
      </main>
    </>
  );
}
