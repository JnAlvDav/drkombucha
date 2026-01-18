# Guía de Despliegue para Hostinger

Este documento describe cómo desplegar el sitio estático de Dr. Kombucha en Hostinger.

## Archivos Generados

- **`out/`**: Directorio con el sitio estático completo
- **`drkombucha-hostinger.zip`**: Archivo ZIP del sitio listo para subir (15MB)

## Pasos para Desplegar en Hostinger

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
