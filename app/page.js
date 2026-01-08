export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-brand-cream text-brand-dark px-4">
      <h1 className="text-4xl md:text-5xl font-young mb-4 text-center">
        Dr. Kombucha
      </h1>
      <p className="text-lg md:text-xl font-tenor text-center max-w-xl">
        Kombucha artesanal elaborada en Puerto Vallarta, Jalisco.{" "}
        <span className="text-brand-green">
          Esta es la base estable de tu nueva landing.
        </span>
      </p>
    </main>
  );
}
