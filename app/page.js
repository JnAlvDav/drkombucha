'use client';

import Image from 'next/image';
import './page.css';

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-logo">
            <img
              src="/images/hero/logotipo-nuevo1.png"
              alt="Dr. Kombucha Logo"
              className="logo-img"
            />
          </div>
          <h1 className="hero-title">DR. KOMBUCHA</h1>
          <p className="hero-subtitle">Remedio probiótico artesanal supervisado con rigor científico</p>
          <div className="hero-product">
            <Image
              src="/images/hero/hero.png"
              alt="Selección Especial Dr. Kombucha"
              width={400}
              height={500}
              priority
              className="product-img"
            />
          </div>
          <a
            href="https://wa.me/523221978144?text=Hola%20Dr.%20Kombucha,%20me%20interesa%20el%20pack%20de%20introducci%C3%B3n."
            className="cta-button-hero"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </section>
      <section className="benefits">
        <div className="section-container">
          <h2>Fundamentos de Salud</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Refuerzo Inmunológico</h3>
              <p>La fermentación controlada potencia los compuestos antioxidantes naturales del té para fortalecer tus defensas.</p>
            </div>
            <div className="benefit-card">
              <h3>Optimización Digestiva</h3>
              <p>Los microorganismos vivos y las enzimas orgánicas favorecen el equilibrio sistémico de la flora intestinal.</p>
            </div>
            <div className="benefit-card">
              <h3>Energía Metabólica</h3>
              <p>Aporta vitaminas del complejo B y minerales esenciales mediante una extracción natural sin aditivos químicos.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="doctor-section">
        <div className="process-container">
          <div className="process-image">
            <Image
              src="/images/hero/scientist.png"
              alt="Proceso de supervisión Dr. Kombucha"
              width={500}
              height={500}
              className="rounded-image"
            />
          </div>
          <div className="process-text">
            <h2>Precisión Médica en cada Botella</h2>
            <p>Como especialista en imagenología clínica entiendo que los detalles invisibles son los más importantes para la salud. Dr. Kombucha nace del compromiso de aplicar ese mismo rigor analítico al proceso de fermentación artesanal en Puerto Vallarta.</p>
            <p className="highlight">Nuestro método asegura una densidad probiótica óptima y un perfil bioquímico equilibrado para el consumo diario.</p>
          </div>
        </div>
      </section>
      <section className="flavors">
        <div className="section-container">
          <h2>Sabores del Puerto</h2>
          <div className="flavors-grid">
            <div className="flavor-card">
              <div className="flavor-image">
                <Image src="/images/hero/granada.png" alt="Granada" width={300} height={400} />
              </div>
              <h3>Granada</h3>
              <p>Una infusión frutal con notas refrescantes y un alto potencial antioxidante.</p>
            </div>
            <div className="flavor-card">
              <div className="flavor-image">
                <Image src="/images/hero/mango.png" alt="Mango y Coco" width={300} height={400} />
              </div>
              <h3>Mango y Coco</h3>
              <p>La combinación tropical clásica del puerto con un balance de dulzor moderado.</p>
            </div>
            <div className="flavor-card">
              <div className="flavor-image">
                <Image src="/images/hero/natural.png" alt="Natural" width={300} height={400} />
              </div>
              <h3>Original Natural</h3>
              <p>El perfil más puro de nuestra kombucha diseñado para quienes buscan la esencia del fermento.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <img src="/images/hero/logotipo-nuevo1.png" alt="Dr. Kombucha" className="footer-logo" />
          <p>Kombucha de Grado Artesanal Profesional</p>
          <p>Puerto Vallarta Jalisco México</p>
          <div className="footer-cta">
            <a href="https://wa.me/523221978144" className="cta-small">Contacto Directo</a>
          </div>
          <p className="copyright">© 2026 Dr. Kombucha Derechos Reservados</p>
        </div>
      </footer>
    </main>
  );
}
