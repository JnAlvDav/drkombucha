export const metadata = {
  title: "Dr. Kombucha | Kombucha artesanal en Puerto Vallarta",
  description:
    "Kombucha artesanal elaborada en Puerto Vallarta, Jalisco. Fermentación cuidada, sabores naturales y entrega local.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
