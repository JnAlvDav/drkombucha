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
        
        {/* HERO SECTION - TWO COLUMN LAYOUT */}
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-brand-bg">
          <div className="container mx-auto max-w-[1180px] relative z-10">
            {/* Two-column grid: Text left, Image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column: Text Content */}
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-4">
                  Hecho en Puerto Vallarta
                </p>
                <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 tracking-tighter text-brand-text leading-none">
                  Kombucha que sabe a lo que es.
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-brand-text-muted leading-relaxed">
                  Dr. Kombucha es una bebida fermentada de producción local — sin atajos, sin sabores artificiales, sin exageraciones. Solo té, fermentación y carácter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleWhatsAppClick("Hola! Me gustaría hacer un pedido de Dr. Kombucha.")}
                    className="px-10 py-4 bg-brand-primary text-white rounded-full font-bold text-lg hover:bg-brand-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 uppercase tracking-widest"
                  >
                    Pedir Ahora
                  </button>
                  <a
                    href="#sabores"
                    className="px-10 py-4 border-2 border-brand-primary text-brand-primary rounded-full font-bold text-lg hover:bg-brand-primary hover:text-white transition-all duration-300 uppercase tracking-widest text-center"
                  >
                    Ver Sabores
                  </a>
                </div>
              </div>

              {/* Right Column: Product Image */}
              <div className="flex justify-center items-center">
                <div className="relative w-full max-w-md">
                  <Image
                    src="/images/hero/natural.webp"
                    alt="Dr. Kombucha Natural"
                    width={600}
                    height={800}
                    priority
                    className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ¿QUÉ ES LA KOMBUCHA? SECTION */}
        <section className="py-32 bg-white" id="que-es">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-serif text-center mb-6 text-brand-primary">¿Qué es la kombucha?</h2>
            <p className="text-lg font-semibold text-brand-accent mb-12 uppercase tracking-widest">Fermentación con propósito</p>
            <div className="text-lg md:text-xl text-brand-text-muted leading-relaxed space-y-6 text-left">
              <p>
                La kombucha es una bebida fermentada elaborada a partir de té endulzado que se transforma mediante un cultivo vivo de levaduras y bacterias. El resultado: una bebida ligeramente ácida, efervescente y con un perfil de sabor complejo que ningún refresco industrial puede replicar.
              </p>
              <p>
                No es una moda. Es una tradición centenaria que prioriza el proceso, el tiempo y el respeto por los ingredientes. En Dr. Kombucha la producimos en pequeños lotes aquí en Puerto Vallarta, cuidando cada etapa desde el primer sorbo hasta el último.
              </p>
            </div>
          </div>
        </section>

        {/* SABORES SECTION */}
        <section className="py-32 bg-brand-bg-soft" id="sabores">
          <div className="section-container">
            <h2>Nuestros sabores</h2>
            <p className="text-center text-lg text-brand-text-muted mb-16 max-w-2xl mx-auto">
              Tres perfiles distintos, todos con el mismo compromiso artesanal. Elige el tuyo o arma tu paquete a la medida.
            </p>
            <div className="benefits-grid">
              {[
                {
                  src: "/images/hero/natural.webp",
                  alt: "Dr. Kombucha Natural",
                  name: "Natural",
                  desc: "La base. Té negro fermentado en su expresión más pura — ácido, ligeramente dulce y refrescante. El favorito de quienes buscan el sabor clásico de la kombucha sin distracciones."
                },
                {
                  src: "/images/hero/granada.webp",
                  alt: "Dr. Kombucha Granada",
                  name: "Granada",
                  desc: "Fruta roja de temporada en perfecta armonía con la acidez de la fermentación. Un perfil vibrante, con cuerpo y un final ligeramente astringente que lo hace único."
                },
                {
                  src: "/images/hero/mango.webp",
                  alt: "Dr. Kombucha Mango",
                  name: "Mango",
                  desc: "El sabor del trópico en formato fermentado. Dulce por naturaleza, equilibrado por la fermentación — un guiño a Puerto Vallarta en cada botella."
                }
              ].map((flavor) => (
                <div key={flavor.name} className="flavor-card text-center">
                  <div className="flex justify-center mb-8">
                    <Image
                      src={flavor.src}
                      alt={flavor.alt}
                      width={200}
                      height={280}
                      className="h-56 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-brand-primary">{flavor.name}</h3>
                  <p className="text-brand-text-muted leading-relaxed">{flavor.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <button
                onClick={() => handleWhatsAppClick("Hola! Me gustaría pedir un paquete de Dr. Kombucha. ¿Cuáles sabores tienen disponibles?")}
                className="cta-button"
              >
                Armar mi Paquete
              </button>
            </div>
          </div>
        </section>

        {/* POR QUÉ DR. KOMBUCHA SECTION */}
        <section className="py-32 bg-white" id="beneficios">
          <div className="section-container">
            <h2>Por qué Dr. Kombucha</h2>
            <p className="text-center text-lg text-brand-text-muted mb-16 max-w-2xl mx-auto">
              No hacemos promesas milagrosas. Lo que sí hacemos es kombucha honesta, bien elaborada y consistente.
            </p>
            <div className="benefits-grid">
              {[
                { 
                  title: "FERMENTACIÓN REAL", 
                  desc: "Cada botella pasa por un proceso de fermentación controlada. Sin atajos, sin concentrados, sin sabores artificiales." 
                },
                { 
                  title: "SABOR EQUILIBRADO", 
                  desc: "Ni demasiado ácida ni empalagosa. El equilibrio entre té, azúcar y fermentación define nuestro perfil de sabor." 
                },
                { 
                  title: "INGREDIENTES SIMPLES", 
                  desc: "Té, azúcar, agua y cultivo de fermentación. La lista corta de ingredientes no es minimalismo — es honestidad." 
                },
                { 
                  title: "PRODUCCIÓN LOCAL", 
                  desc: "Hecha en Puerto Vallarta, en pequeños lotes. Eso nos permite cuidar cada etapa y mantener la consistencia del producto." 
                },
                { 
                  title: "ALTERNATIVA REAL", 
                  desc: "Más interesante que el agua, más honesta que el refresco. Una opción de verdad para quienes buscan algo distinto." 
                },
                { 
                  title: "SIN EXAGERACIONES", 
                  desc: "No la vendemos como cura ni superalimento. Es una bebida fermentada bien hecha — eso ya es suficiente." 
                }
              ].map((item) => (
                <div key={item.title} className="benefit-card">
                  <div className="w-16 h-16 bg-brand-bg-soft rounded-full flex items-center justify-center mb-8 shadow-sm border border-brand-accent/20 mx-auto">
                    <div className="w-6 h-6 border-2 border-brand-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
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
        <section className="py-32 bg-brand-bg-soft" id="nosotros">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-brand-primary">Somos Dr. Kombucha</h2>
            <p className="text-lg font-semibold text-brand-accent mb-12 uppercase tracking-widest">Puerto Vallarta, México</p>
            <div className="text-lg md:text-xl text-brand-text-muted leading-relaxed space-y-6">
              <p>
                Empezamos porque queríamos kombucha de verdad — bien hecha, local y sin los precios de importación. Lo que encontramos fue un proceso que vale la pena compartir.
              </p>
              <p>
                Producimos en pequeños lotes con atención al detalle: el té correcto, el tiempo de fermentación justo, los sabores que acompañan sin dominar. Sin fórmulas secretas, sin ingredientes misteriosos — solo un proceso cuidado y un producto en el que confiamos.
              </p>
              <p>
                Nuestra meta es simple: que cada botella de Dr. Kombucha sea exactamente lo que promete.
              </p>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS SECTION - 3 COLUMN GRID */}
        <section className="py-32 bg-white" id="testimonios">
          <div className="section-container">
            <h2>Lo que dice quien la prueba</h2>
            <p className="text-center text-lg text-brand-text-muted mb-20 max-w-3xl mx-auto">
              Sin guiones ni reseñas patrocinadas. Solo lo que nuestros clientes nos dicen cuando repiten el pedido.
            </p>
            <div className="testimonials-grid">
              {[
                {
                  name: "Ana G.",
                  text: "Pensé que iba a ser como todas las kombuchas del super — demasiado dulce o demasiado ácida. Esta tiene un punto justo que no esperaba."
                },
                {
                  name: "Luis M.",
                  text: "La de mango me conquistó. Se nota el sabor real de la fruta, no esa cosa artificial. Se volvió parte de mi rutina de lunes."
                },
                {
                  name: "María R.",
                  text: "Me gusta saber que la hacen aquí en Vallarta. Aparte de eso, la granada es probablemente mi bebida favorita del año."
                }
              ].map((testi) => (
                <div key={testi.name} className="testimonial-card">
                  <p className="text-xl mb-8 text-brand-text-muted leading-relaxed font-sans">&ldquo;{testi.text}&rdquo;</p>
                  <p className="font-sans font-bold text-brand-primary tracking-widest">— {testi.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES SECTION */}
        <section className="py-32 bg-brand-bg-soft" id="faq">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-serif text-center mb-20 text-brand-primary">Preguntas frecuentes</h2>
            <div className="space-y-10">
              {[
                {
                  q: "¿Cómo puedo hacer un pedido?",
                  a: "Por WhatsApp, directamente. Escríbenos, dinos qué sabores quieres y coordinamos la entrega. Sin formularios, sin esperas."
                },
                {
                  q: "¿En qué presentaciones viene?",
                  a: "Se vende en paquetes de seis botellas de 355 ml. Puedes elegir todos de un mismo sabor o combinar los tres según tu preferencia."
                },
                {
                  q: "¿Cómo debo conservar la kombucha?",
                  a: "Siempre refrigerada. Al ser una bebida viva y fermentada, el frío mantiene su sabor y efervescencia en el mejor punto."
                },
                {
                  q: "¿Cuántas calorías tiene?",
                  a: "Aproximadamente 30–40 calorías por porción de 355 ml, dependiendo del sabor. Significativamente menos que cualquier refresco convencional."
                },
                {
                  q: "¿Hacen entregas a domicilio?",
                  a: "Sí, dentro de Puerto Vallarta. Contáctanos por WhatsApp para coordinar los detalles según tu zona."
                }
              ].map((faq) => (
                <div key={faq.q} className="border-b border-brand-accent/10 pb-8">
                  <h3 className="text-2xl font-serif font-bold mb-4 text-brand-primary">{faq.q}</h3>
                  <p className="text-lg text-brand-text-muted leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL SECTION */}
        <section className="py-32 bg-brand-primary text-center" id="contacto">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-white mb-6">¿Listo para tu primer paquete?</h2>
            <p className="text-xl text-white/70 mb-16 max-w-2xl mx-auto">
              Escríbenos por WhatsApp, elige tus sabores y recibe tu Dr. Kombucha en Puerto Vallarta. Sin complicaciones.
            </p>
            <button 
              onClick={() => handleWhatsAppClick("Hola! Quiero hacer mi pedido de Dr. Kombucha. ¿Cuáles sabores tienen disponibles?")}
              className="px-12 py-5 bg-white text-brand-primary rounded-full font-bold text-xl hover:bg-brand-bg-soft transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 uppercase tracking-widest"
            >
              Pedir por WhatsApp
            </button>
          </div>
        </section>

        <footer className="py-20 bg-brand-dark text-brand-bg/50 text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-2">Dr. Kombucha</p>
          <p className="text-xs tracking-[0.2em]">Kombucha artesanal, hecha en Puerto Vallarta con respeto por el proceso.</p>
          <p className="text-xs mt-4 opacity-40">© {new Date().getFullYear()} — Puerto Vallarta, México</p>
        </footer>
      </main>
    </>
  );
}
