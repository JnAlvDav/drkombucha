'use client';

import Image from 'next/image';
import { useState } from 'react';

const WHATSAPP_LINK = 'https://wa.me/523221978144?text=Hola%20Dr.%20Kombucha,%20me%20interesa%20el%20pack%20de%20introducci%C3%B3n.';

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  section: {
    padding: '4rem 1rem',
  },
  sectionDark: {
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    fontWeight: 700,
    color: '#1f5b3a',
  },
  subheading: {
    fontSize: '1.125rem',
    marginBottom: '1.5rem',
    color: '#555',
    lineHeight: '1.6',
  },
  button: {
    display: 'inline-block',
    padding: '1rem 2rem',
    borderRadius: '999px',
    background: '#1f5b3a',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  card: {
    padding: '1.5rem',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
};

export default function Home() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const beneficios = [
    {
      titulo: 'Apoyo a tus defensas naturales',
      descripcion: 'Elaborada a partir de fermentación con probióticos y compuestos con potencial antioxidante, se asocia al equilibrio de la microbiota intestinal, un factor relevante para el sistema inmunológico.',
    },
    {
      titulo: 'Mejora de la digestión',
      descripcion: 'La kombucha se caracteriza por contener microorganismos y enzimas derivados de la fermentación, que pueden contribuir al equilibrio de la flora intestinal y a una digestión más cómoda en algunas personas.',
    },
    {
      titulo: 'Protección antioxidante',
      descripcion: 'Los ácidos orgánicos y polifenoles originados a partir del té durante la fermentación se relacionan con actividad antioxidante, ayudando a contrarrestar el impacto de los radicales libres.',
    },
    {
      titulo: 'Sensación de energía y vitalidad',
      descripcion: 'Al ser una bebida a base de té, puede aportar compuestos como vitaminas del complejo B y minerales presentes en la materia prima, los cuales están vinculados con la reducción de la sensación de fatiga en el contexto de una alimentación equilibrada.',
    },
    {
      titulo: 'Apoyo a procesos de depuración',
      descripcion: 'La presencia de ácidos orgánicos y antioxidantes puede favorecer los procesos naturales del organismo relacionados con el manejo de radicales libres y el funcionamiento del hígado dentro de un estilo de vida saludable.',
    },
  ];

  const sabores = [
    { nombre: 'Natural', descripcion: 'Perfil limpio y ácido-suave, ideal para quienes prueban kombucha por primera vez.' },
    { nombre: 'Granada', descripcion: 'Notas frutales ligeras, con toque fresco y color característico.' },
    { nombre: 'Mango', descripcion: 'Sabor tropical asociado al puerto, con dulzor moderado y final refrescante.' },
    { nombre: 'El Origen', descripcion: 'Versión que respeta el carácter básico de la kombucha clásica, centrada en el té y la fermentación.' },
  ];

  const opiniones = [
    { texto: 'Refrescante y ligera, se siente diferente a un refresco industrial.', autor: 'Cliente local' },
    { texto: 'Funciona perfecto para el calor del puerto, sin ser empalagosa.', autor: 'Consumo recurrente' },
    { texto: 'Se nota que el proceso está cuidado y que hay atención al detalle.', autor: 'Recomendación directa' },
  ];

  const faqs = [
    {
      question: '¿Qué es la kombucha?',
      answer: 'Es una bebida fermentada a base de té y azúcar, producida mediante un cultivo simbiótico de bacterias y levaduras.',
    },
    {
      question: '¿Contiene alcohol?',
      answer: 'No. Debido al proceso de fermentación controlada y al seguimiento del producto, se considera una bebida no alcohólica.',
    },
    {
      question: '¿Es probiótica?',
      answer: 'Sí, contiene microorganismos propios del proceso de fermentación de la kombucha.',
    },
    {
      question: '¿Necesita refrigeración?',
      answer: 'Sí, se recomienda mantenerla refrigerada para conservar su calidad, carbonatación natural y estabilidad.',
    },
  ];

  return (
    <main>
      {/* HEADER / NAVEGACIÓN */}
      <header style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ ...styles.container, padding: '1rem' }}>
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: '1.25rem', color: '#1f5b3a' }}>
              Dr. Kombucha
            </div>
            <small style={{ color: '#888', fontSize: '0.875rem' }}>
              Kombucha artesanal · Puerto Vallarta
            </small>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 1rem',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://i.postimg.cc/43HvdFjs/Generated-Image-December-07-2025-12-48PM.png"
            alt="Dr. Kombucha Puerto Vallarta"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(255,248,235,0.6), rgba(255,248,235,0.9))',
          }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 900 }}>
          <p style={{
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontSize: 12,
            marginBottom: '1rem',
            fontWeight: 600,
          }}>
            Sabor artesanal del puerto
          </p>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            Dr. Kombucha
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
            Kombucha artesanal elaborada en Puerto Vallarta, Jalisco, México.
          </p>
          <p style={{ marginBottom: '2.5rem', fontStyle: 'italic' }}>
            Un remedio probiótico que sienta bien.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            Ver Pack de Introducción
          </a>
        </div>
      </section>

      {/* QUÉ ES DR. KOMBUCHA */}
      <section style={{ ...styles.section, backgroundColor: '#ffffff' }}>
        <div style={styles.container}>
          <h2 style={styles.heading}>¿Qué es Dr. Kombucha?</h2>
          <div style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333', maxWidth: '800px' }}>
            <p style={{ marginBottom: '1rem' }}>
              Dr. Kombucha es una kombucha artesanal producida en pequeños lotes en Puerto Vallarta, con una fermentación controlada a partir de té, azúcar y cultivo simbiótico. Está pensada para refrescar, acompañar comidas y funcionar como una opción diaria que sustituye bebidas azucaradas tradicionales.
            </p>
            <p>
              No es un producto industrial ni una bebida alcohólica, sino una kombucha cuidada en proceso, sabor y constancia. La identidad combina un carácter cercano y artesanal con la figura de "Dr." como símbolo de atención al detalle, sin implicar uso médico.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section style={{ ...styles.section, ...styles.sectionDark }}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Beneficios</h2>
          <div style={styles.grid}>
            {beneficios.map((beneficio, index) => (
              <div key={index} style={styles.card}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: '#1f5b3a', fontWeight: 600 }}>
                  {beneficio.titulo}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>
                  {beneficio.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SABORES */}
      <section style={{ ...styles.section, backgroundColor: '#ffffff' }}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Sabores del Puerto</h2>
          <p style={{ ...styles.subheading, maxWidth: '600px' }}>
            Línea inspirada en frutas y clima de Puerto Vallarta.
          </p>
          <div style={styles.grid}>
            {sabores.map((sabor, index) => (
              <div key={index} style={styles.card}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1f5b3a', fontWeight: 600 }}>
                  {sabor.nombre}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>
                  {sabor.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EL ORIGEN */}
      <section style={{ ...styles.section, ...styles.sectionDark }}>
        <div style={styles.container}>
          <h2 style={styles.heading}>El Origen</h2>
          <div style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333', maxWidth: '800px' }}>
            <p>
              Dr. Kombucha nace como un proyecto independiente en Puerto Vallarta, con la intención de ofrecer una kombucha constante, honesta y sin atajos en el proceso. Es el resultado de convertir una experiencia personal con la kombucha en una rutina diaria y en una bebida lista para compartir con la comunidad local.
            </p>
          </div>
        </div>
      </section>

      {/* OPINIONES */}
      <section style={{ ...styles.section, backgroundColor: '#ffffff' }}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Opiniones</h2>
          <div style={styles.grid}>
            {opiniones.map((opinion, index) => (
              <div key={index} style={{
                ...styles.card,
                borderLeft: '4px solid #1f5b3a',
                fontStyle: 'italic',
              }}>
                <p style={{ marginBottom: '1rem', color: '#333', fontSize: '0.95rem' }}>
                  "{opinion.texto}"
                </p>
                <p style={{ color: '#888', fontSize: '0.85rem', fontStyle: 'normal' }}>
                  — {opinion.autor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACK DE INTRODUCCIÓN */}
      <section style={{ ...styles.section, ...styles.sectionDark }}>
        <div style={{ ...styles.container, textAlign: 'center' }}>
          <h2 style={styles.heading}>Pack de Introducción</h2>
          <p style={{ ...styles.subheading, maxWidth: '700px', margin: '0 auto 2rem' }}>
            Selección de sabores del puerto para conocer el perfil completo de la marca (Natural, Granada, Mango y El Origen).
          </p>
          <p style={{ fontSize: '1rem', color: '#666', marginBottom: '2rem' }}>
            Presentación pensada para primeras compras o para compartir.
          </p>
          <p style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: '#1f5b3a' }}>
            Precio: [Actualizar según lista vigente]
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            Pedir por WhatsApp
          </a>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section style={{ ...styles.section, backgroundColor: '#ffffff' }}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Preguntas Frecuentes</h2>
          <div style={{ maxWidth: '800px' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{
                marginBottom: '1.5rem',
                borderBottom: '1px solid #eee',
                paddingBottom: '1.5rem',
              }}>
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  <h3 style={{
                    fontSize: '1.125rem',
                    marginBottom: '0.5rem',
                    color: '#1f5b3a',
                    fontWeight: 600,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    {faq.question}
                    <span style={{ fontSize: '1.5rem' }}>{expandedFAQ === index ? '−' : '+'}</span>
                  </h3>
                </button>
                {expandedFAQ === index && (
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6', marginTop: '0.75rem' }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: '#1f5b3a',
        color: '#ffffff',
        padding: '3rem 1rem',
        textAlign: 'center',
      }}>
        <div style={styles.container}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Dr. Kombucha</h3>
          <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>Remedio Probiótico</p>
          <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>
            © Dr. Kombucha — Puerto Vallarta, Jalisco, México
          </p>
          <p style={{ fontSize: '0.85rem', marginTop: '1rem', opacity: 0.8 }}>
            <a href="#" style={{ color: '#ffffff', textDecoration: 'underline' }}>Aviso de privacidad</a>
          </p>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25d366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 99,
          textDecoration: 'none',
          fontSize: '1.5rem',
        }}
        title="Contactanos por WhatsApp"
      >
        📱
      </a>
    </main>
  );
}
