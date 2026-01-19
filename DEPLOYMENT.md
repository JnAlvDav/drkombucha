# Guía de Despliegue para Dr. Kombucha

## Método Recomendado: Vercel

**Se ha eliminado el workflow de despliegue automático por FTP.** Recomendamos usar Vercel para desplegar este proyecto Next.js en modo static export.

### Ventajas de Vercel

- ✅ Despliegue automático desde GitHub
- ✅ Optimización automática de rendimiento
- ✅ CDN global incluido
- ✅ Certificado SSL automático
- ✅ Vista previa de PRs antes de publicar

### Pasos para Desplegar en Vercel

1. **Importar el repositorio en Vercel**
   - Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub
   - Haz clic en "Add New Project" o "Import Project"
   - Selecciona el repositorio `JnAlvDav/drkombucha`
   - Autoriza el acceso si es necesario

2. **Configurar el proyecto**
   - **Framework Preset**: Next.js (detectado automáticamente)
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
   - **Install Command**: `npm install` (por defecto)

3. **Desplegar**
   - Haz clic en "Deploy"
   - Vercel construirá y desplegará tu sitio automáticamente
   - Cada push a la rama `main` desplegará automáticamente la nueva versión

### Configurar el Dominio drkombucha.net

Para apuntar tu dominio desde Hostinger a Vercel:

1. **En Vercel**:
   - Ve a tu proyecto → Settings → Domains
   - Añade `drkombucha.net` y `www.drkombucha.net`
   - Vercel te mostrará los registros DNS necesarios

2. **En Hostinger (Panel de DNS)**:
   - **Registro A** para el dominio raíz:
     - Type: `A`
     - Name: `@`
     - Value: `76.76.21.21`
     - TTL: `3600` (o el por defecto)
   
   - **Registro CNAME** para www:
     - Type: `CNAME`
     - Name: `www`
     - Value: `cname.vercel-dns.com`
     - TTL: `3600` (o el por defecto)

3. **Verificar**:
   - La propagación DNS puede tardar hasta 48 horas
   - Verifica el estado en Vercel → Settings → Domains

## Archivos Generados

- **`out/`**: Directorio con el sitio estático completo (generado por `npm run build`)

## Optimizaciones Implementadas

### ✅ Imágenes WebP
Todas las imágenes críticas tienen versiones WebP que se cargan automáticamente en navegadores compatibles:
- **logotipo-nuevo1.webp** - Logo (94% más ligero)
- **hero.webp** - Imagen principal (92% más ligero)  
- **scientist.webp** - Dr. Kombucha (97% más ligero)
- **natural.webp** - Sabor natural (97% más ligero)
- **granada.webp** - Sabor granada (93% más ligero)
- **mango.webp** - Sabor mango (94% más ligero)

Las imágenes PNG originales se mantienen como fallback para navegadores antiguos.

### ✅ Metadatos Actualizados
- URL de OpenGraph: `https://drkombucha.net`
- Mejora el SEO y compartir en redes sociales

### ✅ Configuración de Tailwind
- Añadido el directorio `app/` al escaneo de clases CSS

## Despliegue Manual Local (Opcional)

Si necesitas generar el build localmente:

```bash
# Instalar dependencias
npm install

# Construir el sitio estático
npm run build
```

Esto genera el directorio `out/` con todos los archivos estáticos.

## Despliegue por FTP a Hostinger (Alternativa)

> **Nota**: Si prefieres mantener despliegue por FTP en Hostinger, contacta al equipo de desarrollo para re-activar el workflow y configurar Secrets.

El workflow de GitHub Actions que desplegaba automáticamente a Hostinger por FTP no fue implementado en la rama principal. Si deseas activar esta funcionalidad:

1. El equipo de desarrollo puede añadir el workflow `.github/workflows/deploy.yml`
2. Se necesitarán configurar los siguientes Secrets en GitHub:
   - `FTP_HOST`: Servidor FTP de Hostinger
   - `FTP_USERNAME`: Usuario FTP
   - `FTP_PASSWORD`: Contraseña FTP
   - `FTP_REMOTE_PATH`: Ruta del directorio remoto (ej. `public_html/`)

Para despliegue manual por FTP:

1. Construir el sitio localmente con `npm run build`
2. Crear ZIP: `zip -r drkombucha-hostinger.zip out/`
3. Subir a Hostinger via panel de control o FTP
4. Descomprimir y mover contenido de `out/` a `public_html/`

### Verificar el Sitio

Después del despliegue, verifica:
- ✅ Las imágenes se cargan correctamente
- ✅ Los enlaces de WhatsApp funcionan
- ✅ El sitio se ve correctamente en móvil y desktop
- ✅ Los metadatos de OpenGraph funcionan (compartir en redes sociales)
- ✅ El certificado SSL está activo

## Soporte

Para cualquier problema con el despliegue en Vercel, consulta la [documentación oficial de Vercel](https://vercel.com/docs) o contacta al equipo de desarrollo.

---

**Última actualización**: 19 de Enero 2026
