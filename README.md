# Feng Digital Services — Premium (Frontend-only)

Sitio premium de Feng Digital Services construido con **Next.js (App Router)**, **Tailwind CSS**, **Framer Motion**, **i18n ES/EN** (Context + JSON) y **checkout con PayPal** desde el frontend.

## Requisitos
- Node.js (recomendado LTS)

## Correr localmente
```bash
npm install
npm run dev
```
Luego abre `http://localhost:3000`.

## PayPal (frontend-only)
Este proyecto integra PayPal con `@paypal/react-paypal-js`.

1) Crea un archivo `.env.local` en la raíz:
```bash
NEXT_PUBLIC_PAYPAL_CLIENT_ID=TU_CLIENT_ID
```

2) Reinicia el servidor de desarrollo.

### Limitación importante (sin backend)
- La orden se crea y captura en el navegador usando el SDK.
- **No existe verificación server-side** (webhooks/confirmación segura), por lo que la confirmación que se muestra es **solo visual**.
- Para un flujo comercial real en producción, se recomienda un backend para validar pagos (webhooks) y activar entregables.

## i18n (ES/EN)
- Diccionarios en `src/i18n/es.json` y `src/i18n/en.json`.
- Contexto en `src/context/LanguageContext.tsx` con persistencia en `localStorage`.

## Despliegue en Vercel
1) Importa el repo en Vercel.
2) Configura la variable de entorno:
   - `NEXT_PUBLIC_PAYPAL_CLIENT_ID`
3) Deploy.

## Estructura
- `src/app`: App Router (`layout.tsx`, `page.tsx`)
- `src/components`: componentes UI + layout
- `src/sections`: secciones del landing
- `src/data`: mock data local (JSON)
- `src/i18n`: diccionarios ES/EN

