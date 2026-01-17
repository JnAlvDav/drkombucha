import "./globals.css";

export const metadata = {
  title: "Dr. Kombucha | Kombucha artesanal en Puerto Vallarta",
  description:
    "Kombucha artesanal elaborada en Puerto Vallarta, Jalisco. Fermentación cuidada, sabores naturales y entrega local.",
  openGraph: {
    title: "Dr. Kombucha | Kombucha artesanal en Puerto Vallarta",
    description:
      "Kombucha artesanal elaborada en Puerto Vallarta, Jalisco. Fermentación cuidada, sabores naturales y entrega local.",
    url: "https://drkombucha.net",
    siteName: "Dr. Kombucha",
    locale: "es_MX",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
