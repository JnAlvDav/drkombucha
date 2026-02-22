'use client';
import Image from 'next/image';
import './page.css';

export default function Page() {
  const handleWhatsAppClick = (text) => {
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/523221978144?text=${encodedText}`, '_blank');
  };

  return (
    <main className="page">
      {/* HERO SECTION - CENTERED LAYOUT */}
      <section className="hero">
        <div className="hero-wrapper-centered">
          <div className="hero-logo-centered">
            <picture>
              <source srcSet="/images/hero/logotipo-nuevo1.webp" type="image/webp" />
              <img
                src="/images/hero/logotipo-nuevo1.png"
                alt="Dr. Kombucha Logo"
                className="logo-img-centered"
              />
            </picture>
          </div>
          <h1 className="hero-title-centered">DR. KOMBUCHA</h1>
          <p className="hero-subtitle-centered">SABOR ARTESANAL DEL PUERTO</p>
          <p className="hero-tagline-centered">Tu dosis diaria de bienestar. Sabor artesanal del Puerto.</p>
          
          <div className="hero-product-centered">
            <picture>
              <source srcSet="/images/hero/hero.webp" type="image/webp" />
              <img
                src="/images/hero/hero.png"
                alt="Selección Especial Dr. Kombucha"
                className="product-img-centered shadow-3xl"
              />
            </picture>
          </div>
          
          <a
            href="https://wa.me/523221978144?text=¡Hola!%20Estoy%20interesado%20en%20el%20paquete%20de%20introducción%20de%20Dr.%20Kombucha."
            className="cta-button-hero-centered"
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

      {/* BENEFITS SECTION - 6 CATEGORIES FOR SYMMETRY (3x2) */}
      <section className="benefits">
        <div className="section-container">
          <div className="benefits-grid-symmetric">
            <div className="benefit-card">
              <h3>🛡️ INMUNIDAD</h3>
              <p>Ayuda a reforzar tus defensas naturales para un sistema inmunológico más fuerte, gracias a su aporte de probióticos y antioxidantes.</p>
            </div>
            <div className="benefit-card">
              <h3>🔄 MEJORA DIGESTIÓN</h3>
              <p>Sus probióticos y enzimas equilibran tu flora intestinal, facilitando la digestión y la absorción de nutrientes.</p>
            </div>
            <div className="benefit-card">
              <h3>⚡ ENERGÍA</h3>
              <p>Contribuye a una mayor vitalidad y bienestar general, aportando vitaminas del complejo B y minerales.</p>
            </div>
            <div className="benefit-card">
              <h3>🌿 ANTIOXIDANTE</h3>
              <p>Los ácidos orgánicos y polifenoles presentes protegen tus células del daño oxidativo causado por radicales libres.</p>
            </div>
            <div className="benefit-card">
              <h3>💪 DESINTOXICACIÓN</h3>
              <p>Ayuda a procesar y eliminar radicales libres, apoyando la función hepática y la eliminación de toxinas.</p>
            </div>
            <div className="benefit-card">
              <h3>🧘 BIENESTAR MENTAL</h3>
              <p>La salud intestinal influye en la claridad mental. Nuestra kombucha apoya el eje intestino-cerebro naturalmente.</p>
            </div>
          </div>
          <div className="benefits-cta">
            <a href="#" onClick={(e) => { e.preventDefault(); handleWhatsAppClick("Quiero conocer más sobre los beneficios de Dr. Kombucha"); }} className="cta-button">
              Pedir ahora
            </a>
          </div>
        </div>
      </section>

      {/* DOCTOR SECTION - 50/50 LAYOUT */}
      <section className="doctor-section-balanced">
        <div className="section-container balanced-grid">
          <div className="doctor-image-container">
            <picture>
              <source srcSet="/images/hero/scientist.webp" type="image/webp" />
              <img
                src="/images/hero/scientist.png"
                alt="Dr. Kombucha - Rigor Científico"
                className="balanced-image shadow-xl"
              />
            </picture>
          </div>
          <div className="doctor-text-balanced">
            <h2>Dr. Kombucha</h2>
            <p>
              Escogió el proceso de fermentación más saludable y los mejores ingredientes locales para obtener una bebida funcional deliciosa, con cero químicos y elaborada artesanalmente.
            </p>
          </div>
        </div>
      </section>

      {/* FLAVORS SECTION */}
      <section className="flavors">
        <div className="section-container">
          <h2>Descubre tu sabor favorito</h2>
          <div className="flavors-grid">
            <div className="flavor-card">
              <div className="flavor-image">
                <Image src="/images/hero/natural.png" alt="Natural" width={300} height={400} />
              </div>
              <h3>Natural</h3>
              <p>Sabor puro y auténtico</p>
            </div>
            <div className="flavor-card">
              <div className="flavor-image">
                <Image src="/images/hero/granada.png" alt="Granada" width={300} height={400} />
              </div>
              <h3>Granada</h3>
              <p>Frutal y refrescante</p>
            </div>
            <div className="flavor-card">
              <div className="flavor-image">
                <Image src="/images/hero/mango.png" alt="Mango" width={300} height={400} />
              </div>
              <h3>Mango</h3>
              <p>Tropical y delicioso</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - 3 COLUMNS */}
      <section className="testimonials">
        <div className="section-container">
          <h2>Lo que dicen nuestros clientes</h2>
          <div className="testimonials-grid-symmetric">
            <div className="testimonial-card">
              <p className="testimonial-text">"Desde que tomé Dr Kombucha, siento que mi digestión ha mejorado notablemente."</p>
              <p className="testimonial-author">– Ana G.</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"La frescura y el sabor auténtico artesanal son únicos. Me encanta sentir que cuido mi cuerpo."</p>
              <p className="testimonial-author">– Luis M.</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"Excelente alternativa saludable. Se nota el rigor científico detrás del producto."</p>
              <p className="testimonial-author">– Roberto S.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA & FOOTER */}
      <section className="final-cta">
        <div className="section-container">
          <h2>¿Listo para probar kombucha artesanal del Puerto?</h2>
          <a href="#" onClick={(e) => { e.preventDefault(); handleWhatsAppClick("¡Hola! Estoy interesado en el paquete de introducción de Dr. Kombucha."); }} className="cta-button-final">
            ¡CLICK PARA CHATEAR!
          </a>
        </div>
      </section>
      
      <footer className="footer">
        <div className="footer-content-centered">
          <img src="/images/hero/logotipo-nuevo1.png" alt="Dr. Kombucha" className="footer-logo-centered" />
          <h3>DR. KOMBUCHA</h3>
          <p>© 2025 Dr. Kombucha. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
