import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics 4 - Only render if GA_MEASUREMENT_ID is configured */}
        {GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
              }}
            />
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
