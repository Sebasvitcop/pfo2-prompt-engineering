# 🤖 PFO2 — Prompt Engineering en Agentes de IA

Práctica Formativa Obligatoria 2 de la materia **Desarrollo Web** (IFTS N°29).
El trabajo consiste en diseñar **un único prompt de alta precisión** y ejecutarlo
—sin modificar el código manualmente— en **dos agentes de desarrollo de IA**
distintos, para comparar su capacidad de resolución autónoma generando una
landing page de "Vitcop Studio" (servicios freelance de desarrollo web).

---

## 👤 Datos del estudiante

- **Nombre:** Sebastián Vitcop
- **Materia:** Desarrollo Web — IFTS N°29
- **Comisión:** Viernes

---

## 🚀 Deploy unificado

🔗 **Portada (acceso a las 3 opciones):** `https://[COMPLETAR-TU-DEPLOY].vercel.app/`

La portada permite acceder a:
1. El prompt utilizado (texto plano)
2. La landing generada por el Agente 1
3. La landing generada por el Agente 2

---

## 🧰 Agentes utilizados

| # | Agente | Modelo de lenguaje | Plan |
|---|--------|--------------------|------|
| 1 | Codex (OpenAI) | Codex (GPT-5.5 High) |
| 2 | Claude Code | Claude Sonnet 4.6 | Claude Pro |

> **Restricción cumplida:** no se modificó el código generado por los agentes de
> forma manual. Cada landing es exactamente la salida autónoma de su agente.

---

## 📝 Prompt exacto utilizado

El mismo texto se ejecutó, sin cambios, en ambos agentes (también disponible en
[`prompt.txt`](prompt.txt)):

```
# ROL
Actuá como un Frontend Senior, diseñador UX/UI y arquitecto de software con
amplia experiencia en sitios corporativos modernos.
Trabajá de forma completamente autónoma: tomá todas las decisiones de diseño,
estructura y contenido sin pedirme aclaraciones.
Priorizá la calidad visual, la experiencia de usuario, la accesibilidad, la
mantenibilidad del código y la adaptabilidad a dispositivos móviles.


# CONTEXTO
La Landing Page pertenece a "Vitcop Studio", el proyecto profesional de
Sebastián Vitcop, estudiante avanzado de la Tecnicatura en Desarrollo Web del
IFTS N°29, que ofrece servicios freelance de desarrollo web a pymes,
emprendedores y startups.

Servicios ofrecidos:
- Landing pages de alta conversión.
- Sitios web institucionales y corporativos.
- Aplicaciones web a medida.
- Integración de APIs y servicios externos.
- Optimización, mantenimiento y rediseño de sitios existentes.

La imagen del estudio debe transmitir:
- Profesionalismo y confiabilidad.
- Cercanía y trato personalizado.
- Calidad artesanal en el detalle.
- Modernidad y dominio técnico.

Tono de escritura: profesional pero cercano, en español neutro.


# OBJETIVO
Construir una Landing Page completa, funcional, profesional y lista para
producción.


# TECNOLOGÍAS
Utilizar únicamente HTML5, CSS3 y JavaScript Vanilla.
Sin frameworks ni librerías externas. Solo se permite Google Fonts.


# ESTRUCTURA DE ARCHIVOS
Generar exactamente: index.html, styles.css, script.js.


# SECCIONES OBLIGATORIAS
1. HEADER sticky con menú (Inicio, Sobre mí, Servicios, Testimonios, Contacto)
   y hamburguesa funcional en mobile.
2. HERO con título, subtítulo, CTA "Trabajemos juntos" y CTA secundario "Ver
   servicios", y elemento visual de fondo.
3. SOBRE MÍ con misión, visión y valores en tarjetas.
4. SERVICIOS: 5 tarjetas (Landing Pages, Sitios Institucionales, Apps Web,
   APIs, Mantenimiento) con ícono, título, descripción y hover.
5. TESTIMONIOS: 3 tarjetas con texto, nombre, empresa y rating 5 estrellas.
6. FORMULARIO de contacto visual con validación JS (sin backend).
7. FOOTER con redes sociales y copyright del año actual.


# DISEÑO
Inspirado en sitios corporativos tecnológicos modernos. Paleta sobria,
máximo un color de acento, sombras suaves, bordes redondeados, espaciados
generosos, tipografía profesional de Google Fonts. Aspecto premium.


# REQUISITOS TÉCNICOS
- HTML5 semántico con lang="es" + meta charset y viewport.
- Diseño responsive mobile-first con unidades relativas.
- Al menos una animación o transición CSS.
- Scroll suave entre secciones.


# ACCESIBILIDAD
Labels en formularios, alt en imágenes, contraste adecuado.


# JAVASCRIPT
Toggle de menú mobile, scroll suave, validación de formulario.
Sin librerías externas.


# CALIDAD DEL CÓDIGO
Limpio, comentado, modular, fácil de mantener.


# CRITERIOS DE ACEPTACIÓN
Todas las secciones presentes, diseño responsive, apariencia profesional,
3 archivos correctamente vinculados, contenido 100% en español.


# FORMATO DE RESPUESTA
Generá los tres archivos completos. Tomá todas las decisiones de forma
autónoma. No pidas aclaraciones. Entregá una solución terminada.
```

> El archivo `prompt.txt` contiene la versión completa y sin recortes.

---

## 📸 Capturas de pantalla

### Agente 1 — Codex (OpenAI)
![Landing generada por Codex](img/captura-codex.png)

### Agente 2 — Claude Code
![Landing generada por Claude Code](img/captura-claude-code.png)

---

## 🗂 Estructura del proyecto

```
pfo2-prompt-engineering/
├── index.html                  # Portada con los 3 accesos
├── prompt.txt                  # El prompt en texto plano
├── README.md                   # Este archivo
├── agente-1-codex/
│   ├── index.html              # Generado por Codex (sin editar)
│   ├── styles.css              # Generado por Codex (sin editar)
│   └── script.js               # Generado por Codex (sin editar)
├── agente-2-claude-code/
│   ├── index.html              # Generado por Claude Code (sin editar)
│   ├── styles.css              # Generado por Claude Code (sin editar)
│   └── script.js               # Generado por Claude Code (sin editar)
└── img/
    ├── captura-codex.png       # Captura del sitio del Agente 1
    └── captura-claude-code.png # Captura del sitio del Agente 2
```

---

## 🧠 Diseño del prompt — buenas prácticas aplicadas

El prompt se construyó siguiendo las guías oficiales de **Anthropic** y **OpenAI**:

- **Rol explícito** al inicio (Frontend Senior + UX/UI + arquitecto) para
  orientar el comportamiento del agente.
- **Contexto de marca detallado** (qué es Vitcop Studio, valores, tono).
- **Objetivo único y claro** sin ambigüedad.
- **Requisitos estructurados y numerados** por sección.
- **Restricciones positivas y negativas** explícitas ("priorizar" / "evitar").
- **Formato de salida especificado** de forma estricta.
- **Criterios de aceptación con checkmarks** al final para que el agente
  pueda autoverificarse.
- **Autonomía explícita** ("no pidas aclaraciones") para evitar back-and-forth.
