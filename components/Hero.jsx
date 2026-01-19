import Image from 'next/image';

export default function Hero({ title, lead, ctaText = 'Ordenar ahora', ctaHref = '/contact' }) {
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-lead">{lead}</p>
        <a href={ctaHref} className="hero-cta">
          {ctaText}
        </a>
      </div>
      <div className="hero-image">
        <Image 
          src="/images/hero/hero.png" 
          alt="Dr. Kombucha Products" 
          width={600} 
          height={600}
          priority
        />
      </div>
    </section>
  );
}
