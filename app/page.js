'use client';

import Image from 'next/image';
import './page.css';

export default function Page() {
  return (
    <main className="page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="tagline">SABOR ARTESANAL DEL PUERTO</div>
          <h1>Dr. Kombucha</h1>
          <p className="subtitle">Kombucha artesanal elaborada en Puerto Vallarta, Jalisco, México.</p>
          <p className="description">Un remedio probiótico que sienta bien.</p>
          <a href="https://wa.me/523221978144?text=Hola%20Dr.%20Kombucha,%20me%20interesa%20el%20pack%20de%20introducci%C3%B3n." className="cta-button">
            Ver Pack de Introducción
          </a>
        </div>
        <div className="hero-image">
          <Image
            src="/images/hero/scientist.png"
            alt="Dr. Kombucha - Científico"
            width={500}
            height={600}
            priority
            className="hero-img"
          />
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="benefits">
        <h2>Beneficios</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Apoyo a tus defensas naturales</h3>
            <p>Elaborada a partir de fermentación con probióticos y compuestos con potencial antioxidante.</p>
          </div>
          <div className="benefit-card">
            <h3>Mejora de la digestión</h3>
            <p>Contiene microorganismos y enzimas derivados de la fermentación que favorecen la salud digestiva.</p>
          </div>
          <div className="benefit-card">
            <h3>Protección antioxidante</h3>
            <p>Los ácidos orgánicos y polifenoles originados del té favorecen la actividad antioxidante.</p>
          </div>
          <div className="benefit-card">
            <h3>Sensación de energía</h3>
            <p>A base de té, aporta vitaminas del complejo B y minerales presentes en la materia prima.</p>
          </div>
          <div className="benefit-card">
            <h3>Apoyo a depuración</h3>
            <p>Ácidos orgánicos y antioxidantes favorecen procesos naturales de depuración del organismo.</p>
          </div>
        </div>
      </section>

      {/* SABORES */}
      <section className="flavors">
        <h2>Sabores del Puerto</h2>
        
        <div className="flavors-grid">
          <div className="flavor-card">
            <div className="flavor-image">
              <Image
                src="/images/hero/granada.png"
                alt="Granada"
                width={400}
                height={500}
              />
            </div>
            <div className="flavor-content">
              <h3>Granada</h3>
              <p>Notas frutales ligeras con toque fresco y color característico.</p>
            </div>
          </div>

          <div className="flavor-card">
            <div className="flavor-image">
              <Image
                src="/images/hero/mango.png"
                alt="Mango"
                width={400}
                height={500}
              />
            </div>
            <div className="flavor-content">
              <h3>Mango</h3>
              <p>Sabor tropical del puerto, con dulzor moderado y final refrescante.</p>
            </div>
          </div>

          <div className="flavor-card">
            <div className="flavor-image">
              <Image
                src="/images/hero/natural.png"
                alt="Natural"
                width={400}
                height={500}
              />
            </div>
            <div className="flavor-content">
              <h3>Natural</h3>
              <p>Perfil limpio y ácido-suave, ideal para quienes prueban kombucha por primera vez.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PACK INTRO */}
      <section className="pack-intro">
        <h2>Pack de Introducción</h2>
        <div className="pack-content">
          <div className="pack-image">
            <Image
              src="/images/hero/hero.png"
              alt="Pack de 3 Botellas"
              width={600}
              height={500}
            />
          </div>
          <div className="pack-info">
            <p>Selección de 3 sabores para conocer el perfil completo.</p>
            <a href="https://wa.me/523221978144" className="cta-button">
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="testimonials">
        <h2>Opiniones</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"Refrescante y ligera, diferente a un refresco industrial."</p>
            <p className="author">— Cliente local</p>
          </div>
          <div className="testimonial-card">
            <p>"Perfecto para el calor del puerto, sin ser empalagosa."</p>
            <p className="author">— Consumidor frecuente</p>
          </div>
          <div className="testimonial-card">
            <p>"Se nota el cuidado y la atención al detalle."</p>
            <p className="author">— Recomendación</p>
          </div>
        </div>
      </section>
    </main>
  );
}