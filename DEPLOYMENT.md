# Guía de Despliegue para Hostinger

Este documento describe cómo desplegar el sitio estático de Dr. Kombucha en Hostinger.

## Despliegue Automático con GitHub Actions

El repositorio incluye un workflow de GitHub Actions que automáticamente construye y despliega el sitio a Hostinger cuando se hace push a la rama `main`.

### Configurar Secrets en GitHub

Para que el despliegue automático funcione, necesitas configurar los siguientes secrets en tu repositorio de GitHub:

1. Ve a tu repositorio en GitHub
2. Navega a **Settings** > **Secrets and variables** > **Actions**
3. Haz clic en **New repository secret** y añade los siguientes secrets:

| Secret | Descripción | Ejemplo |
|--------|-------------|---------|
| `FTP_HOST` | Servidor FTP de Hostinger | `ftp.tudominio.com` o IP del servidor |
| `FTP_USERNAME` | Tu usuario FTP de Hostinger | `usuario@tudominio.com` |
| `FTP_PASSWORD` | Tu contraseña FTP | `tu_contraseña_segura` |
| `FTP_REMOTE_PATH` | Ruta remota en el servidor | `public_html/` o `/` |

**Nota sobre SFTP**: Si necesitas usar SFTP en lugar de FTP, puedes reemplazar la acción `SamKirkland/FTP-Deploy-Action` en el archivo `.github/workflows/deploy.yml` por una que soporte SFTP, como `wlixcc/SFTP-Deploy-Action`.

### Cómo Funciona el Workflow

El workflow se ejecuta automáticamente cuando:
- Se hace push a la rama `main`

Pasos que realiza:
1. Checkout del código
2. Configuración de Node.js 18
3. Instalación de dependencias (`npm ci`)
4. Build del sitio estático (`npm run build`)
5. Despliegue de la carpeta `out/` a Hostinger vía FTP

### Verificar el Despliegue

Para comprobar el estado del despliegue:
1. Ve a la pestaña **Actions** en tu repositorio de GitHub
2. Verás el workflow "Build and Deploy to Hostinger" en ejecución o completado
3. Haz clic en el workflow para ver los logs detallados de cada paso
4. Si hay errores, los logs te indicarán qué salió mal

### Archivo .htaccess

El repositorio incluye un archivo `.htaccess` que se desplegará automáticamente con el sitio. Este archivo configura:
- **Cache de navegador**: Para mejorar el rendimiento de assets estáticos
- **Compresión gzip**: Para reducir el tamaño de transferencia
- **Soporte WebP**: Sirve automáticamente imágenes WebP cuando el navegador las soporte
- **DirectoryIndex**: Configura `index.html` como archivo raíz

## Archivos Generados

- **`out/`**: Directorio con el sitio estático completo (generado automáticamente por el workflow)
- **`.htaccess`**: Archivo de configuración de Apache incluido en el repositorio
- **`drkombucha-hostinger.zip`**: Archivo ZIP del sitio listo para subir (15MB) - solo para despliegue manual

## Pasos para Despliegue Manual en Hostinger

> **Nota**: El despliegue automático con GitHub Actions (descrito arriba) es el método recomendado. Usa este método manual solo si necesitas desplegar sin usar el workflow automático.

### 1. Construir el Sitio Localmente (si es necesario)

```bash
npm install
npm run build
```

Esto genera el directorio `out/` con todos los archivos estáticos.

### 2. Crear el ZIP (si es necesario)

```bash
zip -r drkombucha-hostinger.zip out/
```

### 3. Subir a Hostinger

1. Accede al panel de control de Hostinger
2. Ve a la sección de "Administrador de Archivos" o usa FTP
3. Navega al directorio `public_html` (o el directorio raíz de tu dominio)
4. Sube el archivo `drkombucha-hostinger.zip`
5. Descomprime el archivo en el servidor
6. Mueve el contenido de la carpeta `out/` al directorio raíz (`public_html`)

**Estructura final en Hostinger:**
```
public_html/
├── index.html
├── 404.html
├── _next/
│   └── static/
├── images/
│   └── hero/
│       ├── *.png (imágenes originales)
│       └── *.webp (imágenes optimizadas)
└── index.txt
```

### 4. Configurar el Dominio

Asegúrate de que tu dominio `drkombucha.net` esté apuntando correctamente a tu hosting de Hostinger.

## Optimizaciones Implementadas

### ✅ Imágenes WebP
Todas las imágenes críticas ahora tienen versiones WebP que se cargan automáticamente en navegadores compatibles:
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

## Mantenimiento

### Actualizar el Sitio

1. Hacer cambios en el código fuente
2. Ejecutar `npm run build`
3. Crear nuevo ZIP: `zip -r drkombucha-hostinger.zip out/`
4. Subir y reemplazar archivos en Hostinger

### Verificar el Sitio

Después del despliegue, verifica:
- ✅ Las imágenes se cargan correctamente
- ✅ Los enlaces de WhatsApp funcionan
- ✅ El sitio se ve correctamente en móvil y desktop
- ✅ Los metadatos de OpenGraph funcionan (compartir en redes sociales)

## Soporte

Para cualquier problema con el despliegue, contacta al equipo de soporte de Hostinger o revisa la documentación oficial.

---

**Última actualización**: 17 de Enero 2026
