# textículos

![Portada del proyecto textículos](assets/images/portada.jpg)

Sitio web construido con Jekyll, que presenta la obra completa (poesía, libros y publicaciones) de Gustavo Wojciechowski (Maca). El sitio funciona como archivo digital y plataforma de presentación para trabajos publicados desde 1980 hasta la actualidad.

## Descripción del Proyecto

- **Tecnología**: Sitio estático construido con Jekyll
- **Contenido**: Colección de libros de poesía, poesía visual y publicaciones literarias
- **Estructura**: Cada obra se presenta como una página de proyecto con imagen de portada, descripción y detalles de publicación
- **Diseño**: Desarrollo personalizado con diseño responsive y funcionalidades interactivas

## Estructura del Sitio

```
├── _config.yml          # Configuración de Jekyll
├── _layouts/            # Plantillas de página
│   ├── default.html     # Layout base
│   ├── home.html        # Layout de página principal
│   ├── about.html       # Layout de página "Acerca de"
│   └── detail.html      # Layout de detalle de proyecto
├── _includes/           # Componentes HTML reutilizables
│   ├── header.html      # Cabecera del sitio
│   ├── footer.html      # Pie de página
│   └── social.html      # Enlaces de redes sociales
├── _projects/           # Obras literarias (colección Jekyll)
│   └── YYYY-title.md    # Páginas individuales de proyectos
├── assets/              # Recursos estáticos
│   ├── images/          # Imágenes de portadas y gráficos
│   ├── pdf/             # Archivos PDF de publicaciones
│   └── videos/          # Contenido audiovisual
├── index.md             # Página principal
├── about.md             # Página "Acerca de"
└── Gemfile              # Dependencias Ruby
```

## Configuración y Desarrollo

### Prerrequisitos

- Ruby (versión 2.5.0 o superior)
- Bundler (`gem install bundler`)

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/catuy/texticulos.git
   cd texticulos
   ```

2. Instala las dependencias:
   ```bash
   bundle install
   ```

3. Ejecuta el sitio localmente:
   ```bash
   bundle exec jekyll serve
   ```

4. Abre tu navegador en `http://localhost:4000`

### Construcción para Producción

```bash
bundle exec jekyll build
```

El sitio generado estará en el directorio `_site/`.

## Agregar Nuevos Proyectos

Para agregar una nueva obra literaria al portafolio:

1. Crea un nuevo archivo Markdown en el directorio `_projects/` siguiendo la convención de nomenclatura: `YYYY-title.md`

2. Usa la siguiente plantilla de front matter:

```yaml
---
layout: detail
title: "TÍTULO DE LA OBRA"
year: YYYY
category: "Libros"  # o cualquier otra categoría apropiada
description: "Descripción completa de la obra, incluyendo editorial y detalles de publicación"
portada: "assets/images/imagen-portada.webp"  # Ruta a la imagen de portada
---
```

3. Agrega la imagen de portada a `assets/images/`

4. Confirma y sube los cambios

### Campos del Front Matter

- `layout`: Siempre `detail` para proyectos
- `title`: El título de la obra
- `year`: Año de publicación
- `category`: Usualmente "Libros" para libros
- `description`: Descripción detallada incluyendo información de la editorial
- `portada`: Ruta relativa a la imagen de portada

## Personalización

### Configuración del Sitio

Edita `_config.yml` para modificar:
- Título del sitio y metadatos
- Configuraciones de colecciones
- Configuraciones de construcción
- Variables personalizadas

### Estilos

El sitio utiliza un diseño personalizado. Los estilos se pueden modificar:
1. Editando los archivos en `_layouts/` y `_includes/`
2. Agregando estilos CSS personalizados

### Layouts

- `default.html`: Plantilla base con estructura HTML
- `home.html`: Página principal listando todos los proyectos
- `detail.html`: Páginas individuales de proyectos
- `about.html`: Página "Acerca de"

## Despliegue

El sitio está diseñado para desplegarse en GitHub Pages o cualquier servicio de hosting estático. El directorio `_site/` contiene los archivos estáticos generados.

Para despliegue en GitHub Pages:
1. Asegúrate de que el repositorio sea público
2. Habilita GitHub Pages en la configuración del repositorio
3. Establece la fuente en la rama "main" (o "gh-pages" si usas ese flujo de trabajo)

## Contribución

Al trabajar en este repositorio:

1. Sigue las convenciones de nomenclatura existentes
2. Prueba los cambios localmente con `bundle exec jekyll serve`
3. Asegúrate de que todas las imágenes nuevas estén optimizadas para web
4. Actualiza este README si agregas nuevas características o cambias la estructura

## Licencia

Este proyecto es de código abierto y está disponible para exploración, modificación y aprendizaje.

---

Construido con [Jekyll](https://jekyllrb.com/)
