# textículos

This is a Jekyll-based portfolio website showcasing the literary works (poetry, books, and publications) of [Author Name]. The site serves as a digital archive and presentation platform for published works spanning from 1980 to present.

## Project Overview

- **Technology**: Static site built with Jekyll
- **Theme**: Minima
- **Content**: Collection of poetry books, visual poetry, and literary publications
- **Structure**: Each work is presented as a project page with cover image, description, and publication details

## Site Structure

```
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page templates
│   ├── default.html     # Base layout
│   ├── home.html        # Homepage layout
│   ├── about.html       # About page layout
│   └── detail.html      # Project detail layout
├── _includes/           # Reusable HTML components
│   ├── header.html      # Site header
│   ├── footer.html      # Site footer
│   └── social.html      # Social media links
├── _projects/           # Literary works (Jekyll collection)
│   └── YYYY-title.md    # Individual project pages
├── assets/              # Static assets
│   └── images/          # Cover images and graphics
├── index.md             # Homepage
├── about.md             # About page
└── Gemfile              # Ruby dependencies
```

## Setup and Development

### Prerequisites

- Ruby (version 2.5.0 or higher)
- Bundler (`gem install bundler`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/catuy/texticulos.git
   cd texticulos
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Serve the site locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser to `http://localhost:4000`

### Build for Production

```bash
bundle exec jekyll build
```

The generated site will be in the `_site/` directory.

## Adding New Projects

To add a new literary work to the portfolio:

1. Create a new Markdown file in the `_projects/` directory with the naming convention: `YYYY-title.md`

2. Use the following front matter template:

```yaml
---
layout: detail
title: "WORK TITLE"
year: YYYY
category: "Libros"  # or other appropriate category
description: "Full description of the work, including publisher and publication details"
portada: "assets/images/cover-image.webp"  # Path to cover image
---
```

3. Add the cover image to `assets/images/`

4. Commit and push the changes

### Front Matter Fields

- `layout`: Always `detail` for projects
- `title`: The title of the work
- `year`: Publication year
- `category`: Usually "Libros" for books
- `description`: Detailed description including publisher info
- `portada`: Relative path to the cover image

## Customization

### Site Configuration

Edit `_config.yml` to modify:
- Site title and metadata
- Theme settings
- Collection configurations
- Build settings

### Styling

The site uses the Minima theme. Custom styles can be added by:
1. Creating `_sass/` directory for SCSS files
2. Modifying theme files in `_layouts/` and `_includes/`

### Layouts

- `default.html`: Base template with HTML structure
- `home.html`: Homepage listing all projects
- `detail.html`: Individual project pages
- `about.html`: About page

## Deployment

The site is designed to be deployed to GitHub Pages or any static hosting service. The `_site/` directory contains the built static files.

For GitHub Pages deployment:
1. Ensure the repository is public
2. Enable GitHub Pages in repository settings
3. Set source to "main" branch (or "gh-pages" if using that workflow)

## Contributing

When working on this repository:

1. Follow the existing file naming conventions
2. Test changes locally with `bundle exec jekyll serve`
3. Ensure all new images are optimized for web
4. Update this README if adding new features or changing structure

## License

[Add license information if applicable]

---

Built with [Jekyll](https://jekyllrb.com/) and the [Minima](https://github.com/jekyll/minima) theme.
