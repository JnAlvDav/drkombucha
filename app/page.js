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
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-brand-accent/20">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            {/* Bokeh background pattern placeholder */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1)_0%,transparent_50%)]"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center z-10">
            <div className="mb-8 inline-block">
              <Image 
                src="/images/hero/logotipo-nuevo1.png" 
                alt="Dr. Kombucha Logo" 
                width={180} 
                height={180} 
                className="drop-shadow-2xl"
                priority 
              />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter text-brand-primary uppercase">
              Dr. Kombucha
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light italic text-brand-secondary tracking-widest uppercase">
              Remedio Probiótico • Artesanal
            </p>
            
            <div className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-brand-text/80">
              <p>Tu dosis diaria de bienestar, fermentada con paciencia y elegancia en el corazón de Puerto Vallarta.</p>
            </div>

            <button 
              onClick={() => handleWhatsAppClick("Hola! Me interesa probar la mejor Kombucha de Vallarta.")}
              className="bg-brand-primary text-brand-bg px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-accent transition-all duration-300 shadow-xl"
            >
              Pedir Ahora
            </button>
          </div>
        </section>

        {/* BENEFICIOS - ALTERNATING DESIGN */}
        <section className="py-24 bg-brand-bg">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center p-8 bg-white/50 rounded-2xl border border-brand-accent/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-4 text-brand-primary">100% Natural</h3>
                <p className="text-brand-text/70 leading-relaxed">Sin conservadores ni sabores artificiales. Solo fruta real y té orgánico.</p>
              </div>
              <div className="text-center p-8 bg-brand-primary text-brand-bg rounded-2xl shadow-xl transform scale-105">
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="text-2xl font-bold mb-4">Espíritu Costeño</h3>
                <p className="opacity-90 leading-relaxed">Inspirada en la frescura y relajo de Puerto Vallarta.</p>
              </div>
              <div className="text-center p-8 bg-white/50 rounded-2xl border border-brand-accent/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">🧪</div>
                <h3 className="text-2xl font-bold mb-4 text-brand-primary">Probióticos Vivos</h3>
                <p className="text-brand-text/70 leading-relaxed">Fermentación tradicional que cuida tu salud digestiva cada día.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - ELEGANT ACCORDION STYLE (STIMULATED) */}
        <section className="py-24 bg-brand-primary/5 border-y border-brand-accent/10">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-16 text-brand-primary">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Qué es la Kombucha?", a: "Es una bebida milenaria a base de té fermentado, rica en probióticos, enzimas y ácidos saludables." },
                { q: "¿Tienen entrega a domicilio?", a: "¡Claro! Repartimos en todo Puerto Vallarta y Bahía de Banderas." },
                { q: "¿Contiene alcohol?", a: "Contiene trazas mínimas (&lt;0.5%) naturales del proceso de fermentación, similar a un jugo de naranja muy maduro." }
              ].map((item, i) => (
                <div key={i} className="bg-brand-bg p-6 rounded-xl border border-brand-accent/20">
                  <h4 className="font-bold text-xl mb-2 text-brand-secondary">{item.q}</h4>
                  <p className="text-brand-text/70">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIAL OFFER CARD */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="bg-brand-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center">
              <div className="p-12 md:w-1/2 text-brand-bg">
                <span className="uppercase tracking-widest text-brand-accent font-bold mb-4 block">Oferta de Introducción</span>
                <h2 className="text-5xl font-bold mb-6 italic">Paquete de Bienestar</h2>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl line-through opacity-50">$300</span>
                  <span className="text-5xl font-bold text-brand-accent">$270 MXN</span>
                </div>
                <p className="text-xl mb-10 opacity-90 italic">6 Botellas de 355ml • Sabores a elegir</p>
                <button 
                  onClick={() => handleWhatsAppClick("Quiero el paquete de introducción de $270 MXN")}
                  className="bg-brand-accent text-brand-primary px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform"
                >
                  ¡LO QUIERO!
                </button>
              </div>
              <div className="md:w-1/2 h-full bg-brand-accent/10 p-12 flex justify-center">
                {/* Product Image Placeholder */}
                <div className="w-64 h-96 bg-brand-bg/20 rounded-t-full border-4 border-brand-bg/30 flex items-center justify-center italic text-brand-bg/40">
                  Imagen de Producto
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-16 border-t border-brand-accent/10 bg-brand-bg">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-8 grayscale opacity-50">
               <Image src="/images/hero/logotipo-nuevo1.png" alt="Logo" width={60} height={60} className="mx-auto" />
            </div>
            <p className="font-serif italic text-brand-secondary text-lg mb-4">Hecho con amor en Vallarta</p>
            <div className="flex justify-center gap-8 mb-8 text-brand-primary font-bold">
              <a href="#" className="hover:text-brand-accent transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-accent transition-colors">WhatsApp</a>
            </div>
            <p className="text-xs text-brand-text/40 tracking-widest uppercase">© 2026 DR. KOMBUCHA. Todos los derechos reservados.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
