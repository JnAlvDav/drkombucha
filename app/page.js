'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Page() {
  const handleWhatsAppClick = (text) => {
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/523221978144?text=${encodedText}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-bg text-brand-text">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-brand-accent/20 vintage-texture">
          <div className="absolute inset-0 opacity-10 pointer-events-none hero-bokeh"></div>
          
          <div className="container mx-auto px-6 text-center z-10 py-20">
            <div className="mb-12 inline-block">
              <Image 
                src="/images/hero/logotipo-nuevo1.png" 
                alt="Dr. Kombucha Logo" 
                width={180} 
                height={180} 
                className="drop-shadow-2xl"
                priority 
              />
            </div>
            
            <h1 className="text-6xl md:text-9xl font-serif font-bold mb-4 tracking-tighter text-brand-primary uppercase">
              DR. KOMBUCHA
            </h1>
            
            <p className="text-xl md:text-3xl mb-8 font-sans font-light text-brand-secondary tracking-[0.3em] uppercase">
              REMEDIO PROBIÓTICO
            </p>
            
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-lg md:text-xl opacity-70 leading-relaxed font-sans">
                Tu dosis diaria de bienestar. Sabor artesanal del Puerto.
              </p>
            </div>

            <button 
              onClick={() => handleWhatsAppClick("Hola! Me gustaría pedir una Kombucha.")}
              className="px-10 py-4 bg-brand-primary text-brand-bg rounded-full font-sans font-bold text-lg hover:scale-105 transition-transform shadow-xl uppercase tracking-widest"
            >
              Pedir Ahora
            </button>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-24 bg-white/30 backdrop-blur-sm" id="beneficios">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { title: "INMUNIDAD", desc: "Refuerza tus defensas naturales con probióticos y antioxidantes naturales." },
                { title: "DIGESTIÓN", desc: "Equilibra tu flora intestinal, facilitando la absorción de nutrientes y vitalidad." },
                { title: "ENERGÍA", desc: "Vitaminas del complejo B y minerales que aportan vitalidad a tu día." },
                { title: "ANTIOXIDANTE", desc: "Protección celular contra el daño oxidativo y radicales libres." },
                { title: "DESINTOXICACIÓN", desc: "Apoyo a la función hepática para una limpieza natural de tu organismo." },
                { title: "BIENESTAR", desc: "Conexión directa entre la salud intestinal y la claridad mental." }
              ].map((benefit, i) => (
                <div key={i} className="text-center group">
                  <h3 className="text-2xl font-serif font-bold mb-6 text-brand-secondary tracking-widest group-hover:text-brand-accent transition-colors">{benefit.title}</h3>
                  <div className="w-12 h-1 bg-brand-accent/20 mx-auto mb-6 group-hover:w-24 transition-all"></div>
                  <p className="text-brand-text/80 leading-relaxed text-lg font-sans">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOCTOR SECTION */}
        <section className="py-32 bg-brand-primary text-brand-bg overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 -skew-x-12 transform translate-x-20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="md:w-1/2">
                <Image 
                  src="/images/hero/scientist.png" 
                  alt="Rigor Científico" 
                  width={600} 
                  height={600} 
                  className="rounded-3xl shadow-2xl mix-blend-lighten opacity-90"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 italic">El Proceso del Dr.</h2>
                <p className="text-2xl leading-relaxed opacity-90 font-sans font-light mb-8">
                  No es solo kombucha, es ciencia aplicada al sabor. Cada lote es fermentado bajo estricto control de calidad para asegurar la máxima densidad probiótica.
                </p>
                <div className="flex items-center gap-4 text-brand-accent">
                  <div className="w-8 h-[2px] bg-brand-accent"></div>
                  <span className="uppercase tracking-[0.4em] font-sans font-bold">Hecho a Mano en el Puerto</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-brand-bg" id="testimonios">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-serif text-center mb-20">Lo que dicen nuestros pacientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { name: "Ana P.", text: "La mejor kombucha que he probado. El sabor de jengibre es increíble y me siento con mucha más energía." },
                { name: "Carlos M.", text: "Se nota la calidad artesanal. No tiene ese sabor artificial de las marcas comerciales. 100% recomendada." }
              ].map((testi, i) => (
                <div key={i} className="bg-white p-12 rounded-3xl shadow-sm border border-brand-accent/10">
                  <p className="text-xl mb-8 opacity-80 leading-relaxed font-sans">{testi.text}</p>
                  <p className="font-sans font-bold text-brand-primary tracking-widest uppercase">— {testi.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 bg-white/50 border-t border-brand-accent/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-7xl font-serif mb-12">¿Listo para tu dosis?</h2>
            <button 
              onClick={() => handleWhatsAppClick("Hola! Quiero empezar mi tratamiento con Dr. Kombucha.")}
              className="px-12 py-6 bg-brand-secondary text-brand-bg rounded-full font-sans font-bold text-xl hover:bg-brand-primary transition-colors shadow-2xl uppercase tracking-widest"
            >
              Contactar al Doctor
            </button>
          </div>
        </section>
      </main>
      
      <footer className="py-12 bg-brand-primary text-brand-bg/60 text-center text-sm font-sans tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Dr. Kombucha — Puerto Vallarta, México</p>
      </footer>
    </>
  );
}
