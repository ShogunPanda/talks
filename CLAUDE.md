# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

This repository contains slides for technical presentations at conferences worldwide. The slides are built using **Freya** (https://github.com/ShogunPanda/freya), a system that generates HTML (via SSG), PNGs, and PDFs from YAML and Preact files.

## Repository Structure

```
src/
├── talks/              # All slidesets
│   └── [id]/          # Each folder is a slideset (folder name = slideset ID)
│       ├── info.yml   # Metadata: title, author, event, date, etc.
│       ├── slides.yml # Multi-document YAML file containing all slides
│       └── models.ts  # (Optional) TypeScript types extending BaseSlide
└── themes/            # Theme folders containing layout components
    └── [theme]/
        └── [layout].tsx  # React/Preact components for each layout
```

## Slideset Structure

### info.yml

Contains general information about the presentation:

- Title, subtitle, author
- Event name, date, location
- Theme configuration (`config.theme` points to a folder in `src/themes`)
- Common settings and variables

### slides.yml

A **multi-document YAML file** where each document represents one slide.

**Important formatting rules:**

- Start each slide with `---`
- End each slide with `# ---`
- The structure follows Freya's `BaseSlide` interface
- If a `models.ts` file exists in the slideset folder, check the `Slide` export for custom extensions

**Example slide structure:**

```yaml
---
layout: title
title: My Presentation Title
subtitle: A compelling subtitle
# ---

---
layout: content
title: Introduction
items:
  entries:
    - icon: icon
      title: Title 1
      text: Text 1
    - icon: icon
      title: Title 2
      text: Text 2
    - icon: icon
      title: Title 3
      text: Text 3
# ---
```

### Common Slide Properties

- `layout`: Specifies which TSX component to use (must have corresponding `[layout].tsx` in theme folder)
- `title`: Slide title
- `subtitle`: Optional subtitle
- `content`: Markdown content (supports multi-line with `|`)
- `items`: Items
- `notes`: Speaker notes
- Custom properties based on the specific layout/theme

Avoid `content` keyword and do not use more than three items.

Use separator slides and reflect colors define in the theme `colors.css` file if present. Usually comments explain the intended use of the color in separators.

## Themes

Themes are located in `src/themes/[theme]/`. The theme is specified in `info.yml` or `common.yml` via the `config.theme` setting.

**Requirements:**

- For each `layout` value used in slides, there must be a corresponding `[layout].tsx` file in the theme folder
- Layout components are Preact/React components that render the slide

## Icons

When referencing icons, use **Font Awesome** (free tier only):

- Example: `fa-solid fa-code`, `fa-brands fa-github`, `fa-regular fa-file`
- Drop the `fa-solid-` or similar prefixes in the icon. `fa-solid-code` becomes `code`
- Check https://fontawesome.com/icons for available free icons

## Workflow Guidelines

### Allowed Operations

- **Read**: You may read any file in this repository
- **Write**: You may **only** write and modify `slides.yml` files
- **Restrictions**: No other write operations are permitted

### Common Tasks

1. **Adding a new slide**: Insert a new YAML document in `slides.yml` with `---` markers
2. **Modifying existing slides**: Update content between the `---` and `# ---` markers
3. **Checking slide structure**: Review `models.ts` if it exists for custom fields
4. **Verifying layouts**: Ensure the layout exists in the theme folder
5. **Referencing info**: Check `info.yml` for presentation metadata and theme configuration

## Freya System

Freya is the underlying slide generation system:

- Repository: https://github.com/ShogunPanda/freya
- Converts YAML definitions and Preact components into presentations
- Supports multiple export formats: HTML, PNG, PDF
- Uses SSG (Static Site Generation) for HTML output

## Best Practices

1. **Consistency**: Follow existing slide patterns in the slideset
2. **Validation**: Ensure YAML syntax is valid
3. **Layouts**: Verify layout availability in the theme before use
4. **Content**: Use Markdown formatting within content fields
5. **Separation**: Keep presentation logic in layouts, content in YAML
