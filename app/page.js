'use client';

import Image from 'next/image';
import './page.css';
import Navbar from '../components/Navbar';

export default function Page() {
  const handleWhatsAppClick = (text) => {
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/523221978144?text=${encodedText}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <main className="page">
        {/* HERO SECTION - REFINED & ELEGANT */}
        <section className="hero">
          <div className="hero-wrapper">
            <div className="hero-logo">
              <Image 
                src="/images/hero/logotipo-nuevo1.png" 
                alt="Dr. Kombucha Logo" 
                width={120} 
                height={120} 
                priority
              />
            </div>
            <h1 className="hero-title">DR. KOMBUCHA</h1>
            <p className="hero-subtitle">REMEDIO PROBIÓTICO</p>
            <p className="hero-tagline">
              Tu dosis diaria de bienestar. <br/>
              Sabor artesanal del Puerto.
            </p>
            
            <div className="hero-product">
              <picture>
                <source srcSet="/images/hero/hero.webp" type="image/webp" />
                <img 
                  src="/images/hero/hero.png" 
                  alt="Selección Especial Dr. Kombucha" 
                  className="product-img"
                />
              </picture>
            </div>

            <a 
              href="https://wa.me/523221978144?text=¡Hola! Estoy interesado en el paquete de introducción de Dr. Kombucha."
              className="cta-button-hero"
            >
              Pedir ahora
            </a>
          </div>
        </section>

        {/* WHAT IS KOMBUCHA SECTION */}
        <section className="kombucha-info">
          <div className="section-container">
            <h2>¿Qué es la Kombucha?</h2>
            <p className="info-text">
              Es una bebida fermentada de té, con un balance ligero y armónico entre acidez y dulzura, efervescente y cargada de beneficios para la salud.
            </p>
          </div>
        </section>

        {/* BENEFITS SECTION - CLEAN & ICON-FREE */}
        <section className="benefits" id="beneficios">
          <div className="section-container">
            <h2>Beneficios de tu Remedio</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>INMUNIDAD</h3>
                <p>Refuerza tus defensas naturales con probióticos y antioxidantes naturales.</p>
              </div>
              <div className="benefit-card">
                <h3>DIGESTIÓN</h3>
                <p>Equilibra tu flora intestinal, facilitando la absorción de nutrientes y vitalidad.</p>
              </div>
              <div className="benefit-card">
                <h3>ENERGÍA</h3>
                <p>Vitaminas del complejo B y minerales que aportan vitalidad a tu día.</p>
              </div>
              <div className="benefit-card">
                <h3>ANTIOXIDANTE</h3>
                <p>Protección celular contra el daño oxidativo y radicales libres.</p>
              </div>
              <div className="benefit-card">
                <h3>DESINTOXICACIÓN</h3>
                <p>Apoyo a la función hepática para una limpieza natural de tu organismo.</p>
              </div>
              <div className="benefit-card">
                <h3>BIENESTAR</h3>
                <p>Conexión directa entre la salud intestinal y la claridad mental.</p>
              </div>
            </div>
            <div className="benefits-cta">
              <a href="#" onClick={(e) => { e.preventDefault(); handleWhatsAppClick("Quiero conocer más sobre los beneficios de Dr. Kombucha"); }} className="cta-button">
                Pedir ahora
              </a>
            </div>
          </div>
        </section>

        {/* DOCTOR SECTION */}
        <section className="doctor-section">
          <div className="section-container">
            <div className="doctor-content">
              <div className="doctor-image">
                <Image src="/images/hero/scientist.png" alt="Rigor Científico" width={500} height={500} />
              </div>
              <div className="doctor-text">
                <h2>El Proceso del Dr.</h2>
                <p>
                  Utilizamos solo los mejores ingredientes locales y un proceso de fermentación artesanal riguroso para entregarte una bebida funcional, deliciosa y libre de químicos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FLAVORS SECTION */}
        <section className="flavors" id="sabores">
          <div className="section-container">
            <h2>Sabores del Puerto</h2>
            <div className="flavors-grid">
              <div className="flavor-card">
                <div className="flavor-image">
                  <Image src="/images/hero/natural.png" alt="Natural" width={300} height={400} />
                </div>
                <h3>Natural</h3>
                <p>Puro y auténtico</p>
              </div>
              <div className="flavor-card">
                <div className="flavor-image">
                  <Image src="/images/hero/granada.png" alt="Granada" width={300} height={400} />
                </div>
                <h3>Granada</h3>
                <p>Frutal y vibrante</p>
              </div>
              <div className="flavor-card">
                <div className="flavor-image">
                  <Image src="/images/hero/mango.png" alt="Mango" width={300} height={400} />
                </div>
                <h3>Mango & Coco</h3>
                <p>Tropical y refrescante</p>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIAL OFFER SECTION */}
        <section className="special-offer">
          <div className="section-container">
            <h2>Oferta de Introducción</h2>
            <div className="offer-content">
              <h3>Paquete de 6 Botellas</h3>
              <div className="price-info">
                <p className="regular-price">Regular: $300 MXN</p>
                <p className="special-price">$270 MXN</p>
                <p className="offer-description">Sabores a elegir (355 ml cada una)</p>
              </div>
              <a 
                href="https://wa.me/523221978144?text=Quiero el paquete de introducción a $270 MXN"
                className="cta-button"
              >
                Comprar Ahora
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer" id="contacto">
          <div className="footer-content">
            <Image src="/images/hero/logotipo-nuevo1.png" alt="Dr. Kombucha" width={80} height={80} className="footer-logo" />
            <h3>DR. KOMBUCHA</h3>
            <p>© 2026 Dr. Kombucha. Todos los derechos reservados.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
