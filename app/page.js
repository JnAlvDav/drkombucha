// app/page.js
export default function Home() {
  const whatsappLink =
    "https://wa.me/523221978144?text=Hola%20Dr.%20Kombucha,%20quiero%20saber%20m%C3%A1s%20del%20Pack%20de%20Introducci%C3%B3n";

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Header / Navegación */}
      <header className="border-b border-white/10 sticky top-0 z-20 bg-[#0b0b0b]/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm tracking-[0.25em] uppercase text-amber-300">
              Dr. Kombucha
            </p>
            <p className="text-xs text-white/70">
              Kombucha artesanal · Puerto Vallarta
            </p>
          </div>
          <nav className="hidden sm:flex gap-4 text-xs text-white/70">
            <a href="#que-es" className="hover:text-amber-300">
              ¿Qué es?
            </a>
            <a href="#beneficios" className="hover:text-amber-300">
              Beneficios
            </a>
            <a href="#sabores" className="hover:text-amber-300">
              Sabores
            </a>
            <a href="#origen" className="hover:text-amber-300">
              El origen
            </a>
            <a href="#opiniones" className="hover:text-amber-300">
              Opiniones
            </a>
            <a href="#pack" className="hover:text-amber-300">
              Pack de introducción
            </a>
            <a href="#faq" className="hover:text-amber-300">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-20">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              Dr. Kombucha
            </h1>
            <p className="text-lg text-white/80 mb-3">
              Kombucha artesanal elaborada en Puerto Vallarta, Jalisco, México.
            </p>
            <p className="text-sm text-amber-200 mb-6">
              Sabor artesanal del puerto. Un <b>remedio</b> probítico que sienta
              bien.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber-400 text-black text-sm font-medium hover:bg-amber-300 transition"
            >
              Ver Pack de Introducción (WhatsApp)
            </a>
          </div>
          <div className="md:justify-self-end border border-white/10 rounded-3xl p-6 text-sm text-white/80 bg-gradient-to-br from-white/5 to-amber-500/5">
            <p className="mb-3">
              Dr. Kombucha es una kombucha artesanal elaborada en pequeños lotes
              en Puerto Vallarta, pensada para ser una bebida fresca, constante
              y fácil de integrar en la rutina diaria.
            </p>
            <p>
              Se presenta como una alternativa local al refresco tradicional, sin
              alcohol y con enfoque en fermentación controlada y sabor
              equilibrado.
            </p>
          </div>
        </section>

        {/* ¿Qué es Dr. Kombucha? */}
        <section id="que-es" className="space-y-4">
          <h2 className="text-xl font-semibold">¿Qué es Dr. Kombucha?</h2>
          <p className="text-sm text-white/80">
            Dr. Kombucha es una kombucha artesanal producida en pequeños lotes en
            Puerto Vallarta, con una fermentación controlada a partir de té,
            azúcar y cultivo simbiótico. Está pensada para refrescar, atemp
            comidas y funcionar como una opción diaria que sustituye bebidas
            azucaradas tradicionales.
          </p>
          <p className="text-sm text-white/80">
            No es un producto industrial ni una bebida alcohólica, sino una
            kombucha cuidada en proceso, sabor y constancia. La identidad combina
            un carácter cercano y artesanal con la figura de "Dr." como símbolo de
            atención al detalle, sin implicar uso médico.
          </p>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="space-y-4">
          <h2 className="text-xl font-semibold">Beneficios</h2>
          <ul className="text-sm text-white/80 space-y-2">
            <li>
              Fermentación controlada para un perfil constante de sabor y acidez.
            </li>
            <li>
              Bajo contenido de azúcar en comparación con refrescos tradicionales.
            </li>
            <li>
              Sin alcohol, adecuada para consumo diario en distintos momentos del
              día.
            </li>
            <li>
              Elaboración artesanal local en Puerto Vallarta, apoyando producción
              independiente.
            </li>
            <li>
              Sabor equilibrado y refrescante, pensado para el clima cálido del
              puerto.
            </li>
          </ul>
        </section>

        {/* Sabores */}
        <section id="sabores" className="space-y-4">
          <h2 className="text-xl font-semibold">Sabores</h2>
          <p className="text-sm text-amber-200">
            Sabores del Puerto: Línea inspirada en frutas y clima de Puerto
            Vallarta.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-white/80">
            <div className="space-y-2">
              <h3 className="font-medium">Natural</h3>
              <p>
                Perfil limpio y ácido-suave, ideal para quienes prueban kombucha
                por primera vez.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Granada</h3>
              <p>
                Notas frutales ligeras, con toque fresco y color característico.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Mango</h3>
              <p>
                Sabor tropical asociado al puerto, con dulzor moderado y final
                refrescante.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">El Origen</h3>
              <p>
                Versión que respeta el carácter básico de la kombucha clásica,
                centrada en el té y la fermentación.
              </p>
            </div>
          </div>
        </section>

        {/* El Origen */}
        <section id="origen" className="space-y-4">
          <h2 className="text-xl font-semibold">El origen</h2>
          <p className="text-sm text-white/80">
            Dr. Kombucha nace como un proyecto independiente en Puerto Vallarta,
            con la intención de ofrecer una kombucha constante, honesta y sin
            atajos en el proceso.
          </p>
          <p className="text-sm text-white/80">
            Es el resultado de convertir una experiencia personal con la kombucha
            en una rutina diaria y en una bebida lista para compartir con la
            comunidad local.
          </p>
        </section>

        {/* Opiniones */}
        <section id="opiniones" className="space-y-4">
          <h2 className="text-xl font-semibold">Opiniones</h2>
          <div className="grid md:grid-cols-3 gap-4 text-xs text-white/80">
            <figure className="border border-white/10 rounded-2xl p-4 bg-white/5">
              <blockquote className="mb-2">
                "Refrescante y ligera, se siente diferente a un refresco
                industrial."
              </blockquote>
              <figcaption className="text-white/60">— Cliente local</figcaption>
            </figure>
            <figure className="border border-white/10 rounded-2xl p-4 bg-white/5">
              <blockquote className="mb-2">
                "Funciona perfecto para el calor del puerto, sin ser empalagosa."
              </blockquote>
              <figcaption className="text-white/60">
                — Consumo recurrente
              </figcaption>
            </figure>
            <figure className="border border-white/10 rounded-2xl p-4 bg-white/5">
              <blockquote className="mb-2">
                "Se nota que el proceso está cuidado y que hay atención al
                detalle."
              </blockquote>
              <figcaption className="text-white/60">
                — Recomendación directa
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Pack de Introducción */}
        <section id="pack" className="space-y-4">
          <h2 className="text-xl font-semibold">Pack de Introducción</h2>
          <p className="text-sm text-white/80">
            Pack de Introducción Dr. Kombucha. Selección de sabores del puerto
            para conocer el perfil completo de la marca (ejemplo: Natural,
            Granada, Mango y El Origen).
          </p>
          <p className="text-sm text-white/80">
            Presentación pensada para primeras compras o para compartir. Precio:
            [actualizar según lista vigente].
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber-400 text-black text-sm font-medium hover:bg-amber-300 transition"
          >
            Pedir por WhatsApp
          </a>
        </section>

        {/* Preguntas frecuentes */}
        <section id="faq" className="space-y-4">
          <h2 className="text-xl font-semibold">Preguntas frecuentes</h2>
          <div className="space-y-4 text-sm text-white/80">
            <div>
              <p className="font-medium">¿Qué es la kombucha?</p>
              <p>
                Es una bebida fermentada a base de té y azúcar, producida
                mediante un cultivo simbiótico de bacterias y levaduras.
              </p>
            </div>
            <div>
              <p className="font-medium">¿Contiene alcohol?</p>
              <p>
                No. Debido al proceso de fermentación controlada y al seguimiento
                del producto, se considera una bebida no alcohólica.
              </p>
            </div>
            <div>
              <p className="font-medium">¿Es probótica?</p>
              <p>
                Sí, contiene microorganismos propios del proceso de fermentación
                de la kombucha.
              </p>
            </div>
            <div>
              <p className="font-medium">¿Necesita refrigeración?</p>
              <p>
                Sí, se recomienda mantenerla refrigerada para conservar su
                calidad, carbonatación natural y estabilidad.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-10">
        <div className="max-w-5xl mx-auto px-4 py-6 text-xs text-white/60 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <p className="font-medium">Dr. Kombucha</p>
            <p>Remedio Probítico</p>
            <p>© Dr. Kombucha — Puerto Vallarta, Jalisco, México.</p>
          </div>
          <div className="space-y-1 md:text-right">
            <a href="#aviso-privacidad" className="hover:text-amber-300">
              Aviso de privacidad
            </a>
          </div>
        </div>

        {/* WhatsApp flotante */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-30 inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 shadow-lg hover:bg-emerald-400 transition"
          aria-label="WhatsApp Dr. Kombucha"
        >
          {/* Ícono de burbuja de chat */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              d="M5 20l1.2-3.6A7 7 0 1119 11a7 7 0 01-10.6 5.8L5 20z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 9.5c.3-.3.5-.3.8 0l.7.7c.2.2.2.4.1.6l-.2.4c-.1.2 0 .4.1.5l1.1 1.1c.1.1.3.2.5.1l.4-.2c.2-.1.4 0 .6.1l.7.7c.3.3.3.5 0 .8l-.3.3c-.6.6-1.6.8-2.8.4-1.1-.4-2.2-1.2-3.1-2.1-.9-.9-1.7-2-2.1-3.1-.4-1.2-.2-2.2.4-2.8l.3-.3z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </footer>
    </main>
  );
}