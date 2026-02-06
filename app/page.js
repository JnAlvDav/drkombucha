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
      <main className="min-h-screen bg-brand-bg text-brand-text font-serif">
        
        {/* HERO SECTION - VINTAGE ELEGANCE */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-brand-accent/20 vintage-texture">
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
            
            <h1 className="text-6xl md:text-9xl font-bold mb-4 tracking-tighter text-brand-primary uppercase">
              DR. KOMBUCHA
            </h1>
            <p className="text-xl md:text-3xl mb-8 font-light italic text-brand-secondary tracking-[0.3em] uppercase">
              REMEDIO PROBIÓTICO
            </p>
            
            <div className="max-w-3xl mx-auto mb-12 text-2xl leading-relaxed text-brand-text/80 italic">
              <p>Tu dosis diaria de bienestar.</p>
              <p>Sabor artesanal del Puerto.</p>
            </div>

            <div className="mb-12 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500">
              <picture>
                <source srcSet="/images/hero/hero.webp" type="image/webp" />
                <Image 
                  src="/images/hero/hero.png" 
                  alt="Selección Especial Dr. Kombucha" 
                  width={400} 
                  height={500}
                  className="mx-auto drop-shadow-2xl"
                />
              </picture>
            </div>

            <button 
              onClick={() => handleWhatsAppClick("¡Hola! Estoy interesado en el paquete de introducción de Dr. Kombucha.")}
              className="bg-brand-primary text-brand-bg px-12 py-5 rounded-full font-bold text-xl hover:bg-brand-accent transition-all duration-300 shadow-2xl btn-elegant"
            >
              Pedir ahora
            </button>
          </div>
        </section>

        {/* WHAT IS KOMBUCHA SECTION */}
        <section className="py-32 bg-brand-bg border-b border-brand-accent/5">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-brand-primary italic">¿Qué es la Kombucha?</h2>
            <p className="text-2xl leading-relaxed text-brand-text/70 font-light">
              Es una bebida fermentada de té, con un balance ligero y armónico entre acidez y dulzura, efervescente y cargada de beneficios para la salud.
            </p>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-32 bg-white/30" id="beneficios">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-24 text-brand-primary uppercase tracking-tighter">Beneficios de tu Remedio</h2>
            <div className="grid md:grid-cols-3 gap-16">
              {[
                { title: "INMUNIDAD", desc: "Refuerza tus defensas naturales con probióticos y antioxidantes naturales." },
                { title: "DIGESTIÓN", desc: "Equilibra tu flora intestinal, facilitando la absorción de nutrientes y vitalidad." },
                { title: "ENERGÍA", desc: "Vitaminas del complejo B y minerales que aportan vitalidad a tu día." },
                { title: "ANTIOXIDANTE", desc: "Protección celular contra el daño oxidativo y radicales libres." },
                { title: "DESINTOXICACIÓN", desc: "Apoyo a la función hepática para una limpieza natural de tu organismo." },
                { title: "BIENESTAR", desc: "Conexión directa entre la salud intestinal y la claridad mental." }
              ].map((benefit, i) => (
                <div key={i} className="text-center group">
                  <h3 className="text-2xl font-black mb-6 text-brand-secondary tracking-widest group-hover:text-brand-accent transition-colors">{benefit.title}</h3>
                  <div className="w-12 h-1 bg-brand-accent/20 mx-auto mb-6 group-hover:w-24 transition-all"></div>
                  <p className="text-brand-text/60 leading-relaxed text-lg italic">{benefit.desc}</p>
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
                <h2 className="text-5xl md:text-7xl font-bold mb-10 italic">El Proceso del Dr.</h2>
                <p className="text-2xl leading-relaxed opacity-90 font-light italic">
                  Utilizamos solo los mejores ingredientes locales y un proceso de fermentación artesanal riguroso para entregarte una bebida funcional, deliciosa y libre de químicos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FLAVORS SECTION */}
        <section className="py-32 bg-brand-bg" id="sabores">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-24 text-brand-primary italic">Sabores del Puerto</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { name: "Natural", desc: "Puro y auténtico", img: "/images/hero/natural.png" },
                { name: "Granada", desc: "Frutal y vibrante", img: "/images/hero/granada.png" },
                { name: "Mango & Coco", desc: "Tropical y refrescante", img: "/images/hero/mango.png" }
              ].map((flavor, i) => (
                <div key={i} className="text-center group cursor-pointer">
                  <div className="mb-10 overflow-hidden rounded-2xl shadow-lg border border-brand-accent/10 bg-white/50 p-4 transition-all group-hover:shadow-2xl group-hover:-translate-y-2">
                    <Image 
                      src={flavor.img} 
                      alt={flavor.name} 
                      width={300} 
                      height={400} 
                      className="mx-auto object-contain h-80 group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-brand-primary">{flavor.name}</h3>
                  <p className="text-xl text-brand-text/50 italic">{flavor.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIAL OFFER CARD */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="bg-brand-primary rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(47,88,71,0.5)] flex flex-col md:flex-row items-stretch">
              <div className="p-16 md:w-3/5 text-brand-bg flex flex-col justify-center">
                <span className="uppercase tracking-[0.4em] text-brand-accent font-black mb-6 block text-sm">Oferta de Introducción</span>
                <h2 className="text-5xl md:text-7xl font-bold mb-4 italic">Paquete de 6 Botellas</h2>
                <div className="flex flex-col mb-10">
                  <span className="text-3xl line-through opacity-40 mb-2 italic">Regular: $300 MXN</span>
                  <span className="text-7xl font-black text-brand-accent tracking-tighter">$270 MXN</span>
                </div>
                <p className="text-2xl mb-12 opacity-80 italic font-light border-l-4 border-brand-accent pl-6">Sabores a elegir (355 ml cada una)</p>
                <button 
                  onClick={() => handleWhatsAppClick("Quiero el paquete de introducción a $270 MXN")}
                  className="bg-brand-accent text-brand-primary px-16 py-6 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-xl w-fit"
                >
                  Comprar Ahora
                </button>
              </div>
              <div className="md:w-2/5 bg-brand-accent/20 relative flex items-center justify-center p-12 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2)_0%,transparent_70%)] animate-pulse"></div>
                <div className="relative z-10 w-full aspect-[3/4] bg-brand-bg/10 rounded-[2rem] border-2 border-brand-bg/20 backdrop-blur-sm flex items-center justify-center italic text-brand-bg/30 text-xl font-light">
                   Imagen del Pack
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 border-t border-brand-accent/10 bg-brand-bg" id="contacto">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-10 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer">
               <Image src="/images/hero/logotipo-nuevo1.png" alt="Logo" width={100} height={100} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-brand-primary tracking-widest mb-6">DR. KOMBUCHA</h3>
            <p className="font-serif italic text-brand-secondary text-xl mb-10">Hecho con amor en Vallarta</p>
            <div className="flex justify-center gap-12 mb-12 text-brand-primary font-bold text-lg uppercase tracking-widest">
              <a href="#" className="hover:text-brand-accent transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-accent transition-colors">WhatsApp</a>
            </div>
            <p className="text-sm text-brand-text/30 tracking-[0.3em] uppercase">© 2026 DR. KOMBUCHA. Todos los derechos reservados.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
