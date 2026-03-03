import "./globals.css";
import GoogleAnalytics from '../components/GoogleAnalytics';

export const metadata = {
  title: "Dr Kombucha | Sabor Artesanal del Puerto — Puerto Vallarta, Jalisco",
  description:
    "Dr Kombucha: kombucha artesanal elaborada en Puerto Vallarta, Jalisco. Six-pack $330 MXN. Sabores Granada, Natural y Mango. Pide por WhatsApp.",
  keywords: ["kombucha", "kombucha artesanal", "Puerto Vallarta", "Jalisco", "fermentación", "bebida artesanal", "México", "six-pack kombucha", "Granada", "Mango", "Natural"],
  authors: [{ name: "Dr Kombucha" }],
  openGraph: {
    title: "Dr Kombucha | Sabor Artesanal del Puerto",
    description:
      "Kombucha artesanal de Puerto Vallarta, Jalisco. Six-pack $330 MXN. Sabores Granada, Natural y Mango. Pide por WhatsApp.",
    url: "https://drkombucha.net",
    siteName: "Dr Kombucha",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://drkombucha.net/images/hero/hero.webp",
        width: 1200,
        height: 630,
        alt: "Dr Kombucha - tres botellas de kombucha artesanal: Granada, Natural y Mango",
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
