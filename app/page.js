import Image from "next/image";

const WHATSAPP_LINK =
  "https://wa.me/523221978144?text=Hola%20Dr.%20Kombucha,%20me%20interesa%20el%20pack%20de%20introducci%C3%B3n.";

export default function Home() {
  return (
    <main>
      <section
        style={{
          position: "relative",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "4rem 1rem",
          overflow: "hidden",
        }}
      >
        {/* Imagen de fondo */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="https://i.postimg.cc/43HvdFjs/Generated-Image-December-07-2025-12-48PM.png"
            alt="Dr. Kombucha Puerto Vallarta"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(255,248,235,0.6), rgba(255,248,235,0.9))",
            }}
          />
        </div>

        {/* Contenido */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
          <p
            style={{
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontSize: 12,
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            Sabor artesanal del puerto
          </p>

          <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>
            Dr. Kombucha
          </h1>

          <p style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>
            Kombucha artesanal elaborada en Puerto Vallarta, Jalisco, México.
          </p>

          <p style={{ marginBottom: "2.5rem", fontStyle: "italic" }}>
            Un remedio probiótico que sienta bien
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "1rem 2rem",
              borderRadius: 999,
              background: "#1f5b3a",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Ver Pack de Introducción
          </a>
        </div>
      </section>
    </main>
  );
}
