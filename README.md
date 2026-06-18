# CamiPM — Portfolio de Camila Suárez

Portfolio profesional construido con React + Vite, basado en el diseño original de CamiPM.

## Estructura del proyecto

```
src/
├── App.jsx              # Router principal (navegación entre páginas)
├── main.jsx             # Entry point
├── index.css            # Estilos globales y responsive
├── components/
│   ├── Navbar.jsx       # Barra de navegación (compartida)
│   └── Footer.jsx       # Footer con contacto (compartido)
├── pages/
│   ├── HomePage.jsx     # Página principal (Hero, Sobre mí, Servicios, Proyectos, Blog preview, Testimonios, CTA)
│   ├── BlogPage.jsx     # Blog con filtros por categoría y búsqueda
│   └── ArticlePage.jsx  # Vista de artículo con barra de progreso y comentarios
└── data/
    └── articles.js      # Data de artículos del blog
```

## Cómo correr el proyecto

```bash
# 1. Instalar dependencias
npm install

# 2. Modo desarrollo
npm run dev

# 3. Build para producción
npm run build
```

## Personalización

### Cambiar datos personales
- **Nombre, contacto, redes sociales:** `src/components/Footer.jsx` y `src/pages/HomePage.jsx`
- **Servicios:** Array `services` en `src/pages/HomePage.jsx`
- **Proyectos:** Array `projects` en `src/pages/HomePage.jsx`
- **Testimonios:** Array `testimonials` en `src/pages/HomePage.jsx`

### Agregar artículos al blog
Editar `src/data/articles.js` y agregar un nuevo objeto con la estructura:
```js
{
  id: 7,
  category: "linkedin",  // o "medium"
  date: "2025-01-15",
  dateLabel: "15 Ene 2025",
  title: "Título del artículo",
  excerpt: "Resumen breve...",
  readTime: "5 min lectura",
  tags: ["Tag1", "Tag2"],
  content: [
    { type: "intro", text: "Párrafo introductorio..." },
    { type: "h2", text: "Sección principal" },
    { type: "p", text: "Párrafo..." },
    { type: "blockquote", text: "Cita importante" },
    { type: "ul", items: ["Item 1", "Item 2"] }
  ],
  comments: []
}
```

### Colores
El color primario `#0066CC` está en `src/index.css`. Para cambiar el esquema de color, reemplazar ese valor globalmente.

## Tecnologías
- React 18
- Vite 5
- CSS puro (sin Tailwind ni librerías de estilos, para máxima portabilidad)
- Google Fonts (Inter)
