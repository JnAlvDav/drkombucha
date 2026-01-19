# Despliegue

Este proyecto Next.js está configurado para exportación estática (static export) y se recomienda desplegarlo en Vercel para simplicidad y seguridad.

## Despliegue recomendado: Vercel

1. Crear cuenta en Vercel y conectar con GitHub:
   - Regístrate en [https://vercel.com](https://vercel.com) y autoriza acceso al repositorio `JnAlvDav/drkombucha`.

2. Importar el repositorio:
   - New Project → Import Git Repository → selecciona `JnAlvDav/drkombucha`.

3. Confirmar configuración de build:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`

4. Deploy:
   - Pulsa "Deploy". Vercel realizará install → build → publish automáticamente.
   - Revisar logs en Project → Deployments para confirmar que no hay errores.

## Apuntar dominio personalizado (ej. drkombucha.net)

Si tu dominio está en Hostinger, añade estos registros DNS (Hostinger → DNS Zone Editor):

- A record para `@`  → 216.198.79.1  
- CNAME para `www` → cname.vercel-dns.com

Tras añadir los registros espera la propagación (minutos a 1 hora). En Vercel → Domains verás el estado de verificación y los pasos si falta algo.

## Nota para usuarios que prefieren Hostinger (FTP/SFTP)

- Si prefieres desplegar por FTP/SFTP a Hostinger se puede reactivar un workflow automático, pero requiere:
  - Configurar Secrets en GitHub (no incluir credenciales en el repo).
  - Confirmar el método (FTP simple o SFTP con clave privada).
- Contacta al equipo de desarrollo para que reactivemos y configuremos el workflow seguro en caso de necesitarlo.

## Archivos de interés
- `public/.htaccess` — Reglas recomendadas para servidores Apache (caching, compresión, WebP). Se deja aquí por si se realiza un deploy manual en Hostinger u otro hosting Apache.
