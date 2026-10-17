# Journeys by Joha · Sitio web

Next.js 14 (App Router) + React 18 + TypeScript + MUI v5. Pensado para móvil primero y listo para Vercel.

## Dónde se cambia cada cosa
- `lib/constants.ts`: nombre, descripción, WhatsApp, Instagram y dominio.
- `lib/forms.ts`: lista de formularios. Cada uno se muestra como tarjeta y abre en `/formularios/<slug>`.
- `theme/theme.ts`: colores y tipografías de la marca.
- `public/logo.webp`: logo.

## Agregar un formulario de Google
1. En Google Forms: **Enviar** → pestaña **<>** (Insertar HTML).
2. Copia solo la dirección que aparece en `src="..."`.
3. Pégala en `embedUrl` dentro de `lib/forms.ts`.

## Desarrollo local
```bash
npm install
npm run dev
```
Abrir http://localhost:3000

## Despliegue en Vercel
1. Sube el proyecto a GitHub.
2. En vercel.com: **New Project** → importa el repositorio → Deploy.
3. Cuando tengas dominio, actualiza `url` en `lib/constants.ts`.
