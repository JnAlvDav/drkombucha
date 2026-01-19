import Image from 'next/image';

export default function Hero({ title, lead, ctaText = 'Ordenar ahora', ctaHref = '/contact' }) {
  return (
    <section className="hero container">
      <div>
        <p className="kicker">Kombucha artesanal · Puerto Vallarta</p>
        <h1 className="hero-title">{title || 'Kombucha artesanal, viva y natural'}</h1>
        <p className="hero-lead">{lead || 'Fermentación cuidada, sabores naturales y entrega local. Prueba nuestros sabores de temporada.'}</p>
        <div>
          <a href={ctaHref} className="hero-cta">
            {ctaText}
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="card">
            <p className="font-semibold">Entrega local</p>
            <p className="muted">Rápido en Puerto Vallarta</p>
          </div>
          <div className="card">
            <p className="font-semibold">Ingredientes naturales</p>
            <p className="muted">Sin conservadores</p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
        <Image
          src="/images/hero/hero.webp"
          alt="Botellas de Kombucha"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </section>
  );
}
