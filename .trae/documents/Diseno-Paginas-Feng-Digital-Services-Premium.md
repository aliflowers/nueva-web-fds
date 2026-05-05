# Diseño de páginas — Feng Digital Services (Premium)

## Global Styles (tokens)
- Layout: contenedor centrado `max-width: 1200px`, grid de 12 columnas desktop; espaciado base 8px.
- Tipografía: Inter (o system), escala: 14/16/18/24/32/44.
- Colores: fondo `#0B0F17`, superficie `#111827`, texto `#E5E7EB`, acento `#6D28D9`, éxito `#16A34A`, error `#DC2626`.
- Botones: primario (acento, hover +10% brillo), secundario (borde), focus visible (outline 2px).
- Links: subrayado al hover, estado activo con acento.
- Motion: transiciones 150–250ms (opacity/transform); reducir si `prefers-reduced-motion`.

## i18n (ES/EN)
- Arquitectura: `LanguageProvider` (React Context) con `lang` y `t(key)`.
- Persistencia: `localStorage.lang` con fallback por `navigator.language`.
- Contenido: diccionarios `i18n/es.json` y `i18n/en.json` + mocks que referencian `*Key`.

---

## Página: Inicio (/)
### Meta Information
- Title: “Feng Digital Services — Servicios digitales premium” (ES) / “Premium Digital Services” (EN)
- Description: propuesta de valor + CTA a planes.
- OG: `og:title`, `og:description`, `og:image` (logo/hero), `og:type=website`.

### Layout
- Estructura: stacked sections; navbar sticky.
- Sistema: CSS Grid (12 col) para hero/pricing; Flex para filas de tarjetas.
- Desktop-first: 3 columnas en servicios/testimonios; colapsa a 1 columna en móvil.

### Page Structure (secciones)
1. **Topbar/Nav**: logo, links ancla (Servicios/Planes/FAQ/Contacto), toggle ES/EN, botón “Ver planes”.
2. **Hero**: headline + subheadline, lista de 3 bullets (beneficios), CTA primario (scroll a Planes) y secundario (mailto/whatsapp).
3. **Servicios**: grid de cards (icono, título, descripción, 2 bullets). 
4. **Resultados/Testimonios**: cards con quote + autor/rol; opcional mini-métricas (mock).
5. **Planes**: cards comparables (nombre, precio, entregables, “Contratar”), badge “Recomendado” (mock).
6. **FAQ**: acordeón accesible (teclado), 6–8 preguntas.
7. **Contacto**: bloque final con CTA + opciones (email/whatsapp) y mini-form (UI only / mailto).
8. **Footer**: redes + enlaces “Privacidad” y “Términos” (anclas a secciones estáticas al final o modales).

### Interacciones
- Toggle idioma actualiza toda la UI sin recargar.
- Botón “Contratar” navega a `/checkout?plan=<id>`.

---

## Página: Checkout (/checkout)
### Meta Information
- Title: “Checkout — FDS”
- Description: resumen del plan y pago seguro con PayPal.

### Layout
- Two-column desktop: izquierda resumen; derecha pago.
- Caja de pago con estados (loading/ready/error) y skeleton.

### Sections & Components
1. **Header minimal**: logo + “Volver”.
2. **Resumen del plan**: nombre, descripción, lista entregables, total, nota legal (“Pago procesado por PayPal”).
3. **Datos del comprador (solo UI)**: nombre + email (validación básica) para mostrar en confirmación local (no persistente).
4. **PayPal Buttons**:
   - Inicializa SDK con `client-id` (env).
   - Crea orden con el importe del plan.
   - Captura pago y redirige a `/payment-result?status=success&plan=...`.
5. **Manejo de estados**: cancel => `status=cancel`; error => `status=error` con reintento.

---

## Página: Resultado de pago (/payment-result)
### Meta Information
- Title: “Estado del pago — FDS”
- Description: confirmación y siguientes pasos.

### Layout
- Centro con card grande + icono de estado.

### Sections & Components
1. **Status hero**: éxito/cancelación/error (color semántico).
2. **Detalle**: plan seleccionado, fecha/hora local, email (si se ingresó en checkout; si no, omitido).
3. **Siguientes pasos**:
   - Success: “Te contactaremos en X horas” + CTA “Volver a inicio”.
   - Cancel/Error: CTA “Reintentar pago” (vuelve a `/checkout?plan=...`) y CTA “Contactar soporte”.

---

## Mock data local (estructura mínima sugerida)
- `mock/plans.ts`: 3 planes (Starter / Growth / Elite) con `bulletsKeys`.
- `mock/sections.ts`: hero, servicios, testimonios, faq, footer.
- `i18n/*.json`: textos por key (ej. `plan.starter.name`, `faq.q1`, etc.).
