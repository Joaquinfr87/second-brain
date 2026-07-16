# Second Brain Visual

Mapa mental interactivo con búsqueda semántica — Prototipo de alta fidelidad.

## Descripción

Second Brain Visual es una aplicación web que convierte tus notas, correos, PDFs y grabaciones en un grafo de conocimiento interactivo donde puedes explorar conexiones entre ideas y realizar búsquedas semánticas.

## Funcionalidades

- **Grafo de conocimiento interactivo** con Cytoscape.js (zoom, pan, filtrado por tipo)
- **Búsqueda semántica** con scoring de relevancia y resultados clasificados
- **Dashboard** con estadísticas, archivos recientes y actividad
- **Detalle de nodo** con conexiones relacionadas
- **Navegación entre pantallas** con autenticación simulada
- **Estilo visual** inspirado en Noctalia Shell y Caelestia Shell (glassmorphism, Material 3, dark mode)

## Pantallas

1. `index.html` — Login
2. `dashboard.html` — Panel principal
3. `graph.html` — Grafo de conocimiento
4. `search.html` — Búsqueda semántica
5. `detail.html` — Detalle de nodo

## Stack

- HTML5 / CSS3 / JavaScript vanilla
- Cytoscape.js (grafo interactivo)
- Bootstrap Icons
- Google Fonts (Inter, JetBrains Mono)
- Deploy: GitHub Pages

## Ejecutar localmente

```bash
# Con Python
python3 -m http.server 8000

# Con Node.js
npx serve .
```

Abrir `http://localhost:8000` en el navegador.
