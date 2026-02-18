import "./globals.css";
import GoogleAnalytics from '../components/GoogleAnalytics';

export const metadata = {
  title: "Dr. Kombucha | Kombucha artesanal en Puerto Vallarta",
  description:
    "Kombucha artesanal elaborada en Puerto Vallarta, Jalisco. Fermentación cuidada, sabores naturales y entrega local.",
  keywords: ["kombucha", "kombucha artesanal", "Puerto Vallarta", "probióticos", "fermentación", "bebida saludable", "México", "Jalisco"],
  authors: [{ name: "Dr. Kombucha" }],
  openGraph: {
    title: "Dr. Kombucha | Kombucha artesanal en Puerto Vallarta",
    description:
      "Kombucha artesanal elaborada en Puerto Vallarta, Jalisco. Fermentación cuidada, sabores naturales y entrega local.",
    url: "https://drkombucha.net",
    siteName: "Dr. Kombucha",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://drkombucha.net/images/hero/kombucha-bottles.webp",
        width: 1200,
        height: 630,
        alt: "Dr. Kombucha - Kombucha artesanal",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://drkombucha.net",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
