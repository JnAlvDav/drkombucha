# Dr. Kombucha - Landing Oficial

Sitio web oficial de Dr. Kombucha - Kombucha artesanal en Puerto Vallarta, Jalisco.

## 🚀 Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## 📦 Despliegue en Hostinger

El sitio está configurado para exportación estática. Consulta [DEPLOYMENT.md](./DEPLOYMENT.md) para instrucciones detalladas de despliegue.

```bash
# Generar build estático
npm run build

# Los archivos estáticos se generan en la carpeta out/
```

## 🔧 Configuración de Google Analytics

El sitio incluye Google Analytics 4 para seguimiento de visitantes. Para configurarlo:

1. Crea una cuenta en [Google Analytics](https://analytics.google.com/)
2. Obtén tu Measurement ID (formato: `G-XXXXXXXXXX`)
3. Crea un archivo `.env.local` en la raíz del proyecto:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TU-ID-AQUI
```

El archivo `.env.example` incluye un template de referencia.

## ✨ Optimizaciones

- ✅ Imágenes WebP con fallback PNG
- ✅ Exportación estática para mejor performance
- ✅ Metadatos OpenGraph optimizados
- ✅ Responsive design
- ✅ Google Analytics 4 integrado
- ✅ TypeScript para type safety
- ✅ SEO optimizado con sitemap.xml y robots.txt

## 🌐 Sitio en Producción

- **URL**: https://drkombucha.net
- **WhatsApp**: +52 322 197 8144

---

© 2025 Dr. Kombucha. Todos los derechos reservados.
