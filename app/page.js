export default function Home() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/?text=Hola%20Dr.%20Kombucha%20Quiero%20información%20sobre%20el%20Pack%20de%20Introducción', '_blank');
  };

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
      {/* 1. HERO */}
      <section style={{
        padding: '60px 20px',
        textAlign: 'center',
        backgroundColor: '#FFF7EB',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{
          fontSize: '3em',
          marginBottom: '20px',
          color: '#1A120B',
          fontWeight: 'bold'
        }}>Dr. Kombucha</h1>
        
        <p style={{
          fontSize: '1.3em',
          marginBottom: '15px',
          color: '#1A120B'
        }}>Kombucha artesanal elaborada en Puerto Vallarta, Jalisco, México.</p>
        
        <p style={{
          fontSize: '1.1em',
          marginBottom: '30px',
          color: '#3A5F3A',
          fontStyle: 'italic'
        }}>Sabor artesanal del puerto. Un remedio probiótico que sienta bien.</p>
        
        <button onClick={handleWhatsApp} style={{
          backgroundColor: '#3A5F3A',
          color: 'white',
          padding: '12px 30px',
          fontSize: '1em',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>Ver Pack de Introducción</button>
      </section>

      {/* 2. ¿QUÉ ES DR. KOMBUCHA? */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'left'
      }}>
        <h2 style={{
          fontSize: '2em',
          marginBottom: '20px',
          color: '#1A120B'
        }}>¿Qué es Dr. Kombucha?</h2>
        
        <p style={{ fontSize: '1.05em', marginBottom: '20px' }}>
          Dr. Kombucha es una kombucha artesanal elaborada en pequeños lotes en Puerto Vallarta. Utilizamos té seleccionado, fermentación controlada y procesos limpios para obtener una bebida viva, refrescante y equilibrada, pensada para disfrutarse todos los días.
        </p>
      </section>

      {/* 3. FERMENTACIÓN CONTROLADA */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'left',
        backgroundColor: '#f9f9f9',
        borderRadius: '5px'
      }}>
        <h2 style={{
          fontSize: '2em',
          marginBottom: '20px',
          color: '#1A120B'
        }}>Fermentación controlada</h2>
        
        <p style={{ fontSize: '1.05em', marginBottom: '20px' }}>
          Nuestra kombucha se produce mediante una fermentación cuidadosamente controlada, lo que permite un contenido de alcohol menor al 0.5% y una cantidad mínima de azúcar residual. Cada lote es monitoreado para asegurar estabilidad, sabor y seguridad.
        </p>
        
        <p style={{
          fontSize: '0.95em',
          marginTop: '15px',
          fontStyle: 'italic',
          color: '#555'
        }}>
          No es una bebida industrial. Es un proceso vivo, consciente y artesanal.
        </p>
      </section>

      {/* 4. SABORES */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'left'
      }}>
        <h2 style={{
          fontSize: '2em',
          marginBottom: '20px',
          color: '#1A120B'
        }}>Sabores artesanales</h2>
        
        <p style={{ fontSize: '1.05em', marginBottom: '30px' }}>
          Cada sabor está inspirado en ingredientes reales y perfiles frescos.
        </p>
        
        <ul style={{
          fontSize: '1.05em',
          lineHeight: '2',
          listStylePosition: 'inside',
          color: '#1A120B'
        }}>
          <li>– Clásica natural</li>
          <li>– Frutales de temporada</li>
          <li>– Ediciones especiales del puerto</li>
        </ul>
      </section>

      {/* 5. BENEFICIOS */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'left',
        backgroundColor: '#f9f9f9',
        borderRadius: '5px'
      }}>
        <h2 style={{
          fontSize: '2em',
          marginBottom: '20px',
          color: '#1A120B'
        }}>¿Por qué Dr. Kombucha?</h2>
        
        <p style={{ fontSize: '1.05em' }}>
          La kombucha es una bebida fermentada naturalmente, apreciada por su frescura, su carácter probiótico y su capacidad para acompañar una alimentación equilibrada.
        </p>
      </section>

      {/* 6. SEGURIDAD Y CONFIANZA */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'left'
      }}>
        <h2 style={{
          fontSize: '2em',
          marginBottom: '20px',
          color: '#1A120B'
        }}>Fermentación responsable</h2>
        
        <p style={{ fontSize: '1.05em' }}>
          Nuestra kombucha contiene menos del 0.5% de alcohol gracias a fermentación controlada y no tiene una cantidad significativa de azúcar residual. Está pensada para consumo general dentro de una dieta normal.
        </p>
      </section>

      {/* 7. LLAMADO A LA ACCIÓN FINAL */}
      <section style={{
        padding: '60px 20px',
        textAlign: 'center',
        backgroundColor: '#3A5F3A',
        color: 'white'
      }}>
        <h2 style={{
          fontSize: '2em',
          marginBottom: '20px'
        }}>¿Quieres probar Dr. Kombucha?</h2>
        
        <p style={{
          fontSize: '1.1em',
          marginBottom: '30px'
        }}>
          Pregunta por el Pack de Introducción y conoce nuestros sabores artesanales.
        </p>
        
        <button onClick={handleWhatsApp} style={{
          backgroundColor: '#FFF7EB',
          color: '#3A5F3A',
          padding: '12px 30px',
          fontSize: '1em',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>Escríbenos por WhatsApp</button>
      </section>

      {/* 8. FOOTER */}
      <footer style={{
        padding: '40px 20px',
        textAlign: 'center',
        backgroundColor: '#1A120B',
        color: '#FFF7EB',
        fontSize: '0.95em'
      }}>
        <p style={{ marginBottom: '10px', fontSize: '1.2em', fontWeight: 'bold' }}>Dr. Kombucha</p>
        <p style={{ marginBottom: '15px' }}>Puerto Vallarta, Jalisco, México</p>
        <p style={{ fontSize: '0.9em', color: '#D4A85F' }}>Producto artesanal fermentado.</p>
      </footer>
    </main>
  );
}
