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
  twitter: {
    card: "summary_large_image",
    title: "Dr. Kombucha | Kombucha artesanal en Puerto Vallarta",
    description:
      "Kombucha artesanal elaborada en Puerto Vallarta, Jalisco. Fermentación cuidada, sabores naturales y entrega local.",
    images: ["https://drkombucha.net/images/hero/kombucha-bottles.webp"],
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
      <body>{
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
