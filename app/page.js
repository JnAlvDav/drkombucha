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

      {/* HERO */}
      <section className="hero">
        <div className="section-container">
          <div className="hero-wrapper-centered">
            <div className="hero-logo-centered">
              <Image
                src="/images/logo-drkombucha.png"
                alt="Dr Kombucha"
                className="logo-img-centered"
                width={250}
                height={250}
              />
            </div>
            <h1 className="hero-title-centered">Dr Kombucha</h1>
            <p className="hero-subtitle-centered">Remedio Probiótico</p>
            <p className="hero-tagline-centered">Kombucha artesanal embotellada en Puerto Vallarta.</p>
            <p className="hero-tagline-centered">Refrescante, ligera y hecha con ingredientes naturales.</p>
            <div className="hero-product-centered">
              <Image
                src="/images/botellas-drkombucha.png"
                alt="Botellas de Dr Kombucha"
                className="product-img-centered shadow-3xl"
                width={800}
                height={600}
              />
            </div>
            <button
              className="cta-button-hero-centered"
              onClick={() => handleWhatsAppClick('Hola, quiero ordenar Dr Kombucha')}
            >
              Ordenar por WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* QUÉ ES DR KOMBUCHA */}
      <section className="kombucha-info">
        <div className="section-container">
          <h2>Qué es Dr Kombucha</h2>
          <div className="info-text">
            <p>Dr Kombucha es kombucha auténtica: té fermentado con cultivos vivos que transforman el té en una bebida refrescante con un equilibrio natural entre frescura y acidez.</p>
            <p>Cada lote se prepara en pequeños volúmenes y con fermentación controlada para lograr un sabor limpio y consistente.</p>
            <p>No es un refresco industrial.</p>
            <p>Es kombucha real.</p>
          </div>
        </div>
      </section>

      {/* SABORES */}
      <section className="flavors">
        <div className="section-container">
          <h2>Sabores</h2>
          <div className="flavors-grid">
            <article className="flavor-card">
              <div className="flavor-image">
                <Image src="/images/sabor-natural.png" alt="Dr Kombucha Natural" width={400} height={600} />
              </div>
              <h3>Natural</h3>
              <p>La expresión más pura de la kombucha. Fresca y equilibrada.</p>
            </article>
            <article className="flavor-card">
              <div className="flavor-image">
                <Image src="/images/sabor-granada.png" alt="Dr Kombucha Granada" width={400} height={600} />
              </div>
              <h3>Granada</h3>
              <p>Frutal, profunda y ligeramente seca.</p>
            </article>
            <article className="flavor-card">
              <div className="flavor-image">
                <Image src="/images/sabor-mangococo.png" alt="Dr Kombucha Mango Coco" width={400} height={600} />
              </div>
              <h3>Mango Coco</h3>
              <p>Tropical, suave y redonda.</p>
            </article>
          </div>
        </div>
      </section>

      {/* POR QUÉ DR KOMBUCHA */}
      <section className="why-section">
        <div className="section-container">
          <h2>Por qué Dr Kombucha</h2>
          <ul className="why-list">
            <li>Fermentación controlada</li>
            <li>Ingredientes naturales</li>
            <li>Bajo contenido calórico</li>
            <li>Sin alcohol</li>
            <li>Hecha en Puerto Vallarta</li>
          </ul>
          <p className="why-closing">Una bebida ligera pensada para refrescar sin saturar.</p>
        </div>
      </section>

      {/* CÓMO SE HACE */}
      <section className="how-section">
        <div className="section-container">
          <h2>Cómo se hace</h2>
          <div className="how-text">
            <p>Todo comienza con té seleccionado y azúcar.</p>
            <p>Durante la fermentación, los cultivos vivos transforman la bebida lentamente hasta lograr su perfil característico.</p>
            <p>El resultado es una kombucha equilibrada, refrescante y naturalmente probiótica.</p>
          </div>
        </div>
      </section>

      {/* CÓMO COMPRAR */}
      <section className="buy-section">
        <div className="section-container">
          <h2>Cómo comprar</h2>
          <div className="buy-text">
            <p>Dr Kombucha se vende en paquetes de seis botellas.</p>
            <p>355 ml por botella</p>
            <p>Aproximadamente 30 calorías</p>
            <p>Los pedidos se realizan por WhatsApp.</p>
            <p>Los clientes pueden recoger su pedido en puntos acordados o solicitar envío mediante servicio de mensajería.</p>
          </div>
          <button
            className="cta-button"
            onClick={() => handleWhatsAppClick('Hola, quiero ordenar Dr Kombucha')}
          >
            Ordenar por WhatsApp
          </button>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="faq-section">
        <div className="section-container">
          <h2>Preguntas frecuentes</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>¿La kombucha contiene alcohol?</h3>
              <p>Dr Kombucha se elabora mediante un proceso de fermentación controlada que permite mantenerla dentro de la categoría de bebidas no alcohólicas.</p>
            </div>
            <div className="faq-item">
              <h3>¿Tiene mucha azúcar?</h3>
              <p>Durante la fermentación gran parte del azúcar se transforma, por lo que la bebida final es ligera y baja en calorías.</p>
            </div>
            <div className="faq-item">
              <h3>¿Es segura para niños o mujeres embarazadas?</h3>
              <p>Por su fermentación controlada y su bajo contenido de azúcar, puede consumirse como cualquier otra bebida refrescante no alcohólica.</p>
            </div>
            <div className="faq-item">
              <h3>¿Cómo se vende?</h3>
              <p>La kombucha se vende únicamente en paquetes de seis botellas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2>Testimonios</h2>
          <div className="testimonials-grid">
            <blockquote className="testimonial-card">
              <p>"Refrescante y muy equilibrada. No se parece a ninguna kombucha industrial."</p>
            </blockquote>
            <blockquote className="testimonial-card">
              <p>"La de granada es increíble. Muy natural."</p>
            </blockquote>
            <blockquote className="testimonial-card">
              <p>"Una alternativa perfecta al refresco."</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="section-container">
          <p className="footer-brand">Dr Kombucha</p>
          <p className="footer-tagline">Remedio Probiótico</p>
          <p className="footer-location">Puerto Vallarta, México</p>
          <div className="footer-links">
            <a href="https://wa.me/523221978144" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://instagram.com/drkombucha" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="mailto:contacto@drkombucha.net">Correo</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
