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
│       ├── summary.md # Italian speaker guide, kept in sync with the slides
│       ├── context.md # Self-contained context for external image generation
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

### Separator Titles

- Keep a `separator` title on one line when it fits the space available on that slide, accounting for images or icons.
- For image-based separators, assess the text half of the slide minus its internal margins/padding, not the full canvas width. Use this same reduced width when an image is planned but has not been added yet.
- Otherwise, use explicit line breaks to balance the visual width of the lines while preserving natural phrasing. Prefer two lines when practical; do not force every title to be multiline.
- Apply this only through the YAML `title` value and its line breaks. Do not introduce or modify CSS, fonts, font sizes, or styling overrides for this purpose, either globally or locally in the slideset. Preserve the wording and subtitles unless a content change is explicitly requested.

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
- **Write**: You may **only** write and modify `slides.yml`, `info.yml`, and talk-level `summary.md` and `context.md` files
- **Restrictions**: No other write operations are permitted

### Common Tasks

1. **Adding a new slide**: Insert a new YAML document in `slides.yml` with `---` markers
2. **Modifying existing slides**: Update content between the `---` and `# ---` markers
3. **Checking slide structure**: Review `models.ts` if it exists for custom fields
4. **Verifying layouts**: Ensure the layout exists in the theme folder
5. **Referencing info**: Check `info.yml` for presentation metadata and theme configuration

### Speaker Summary

- Whenever creating a talk, also create `src/talks/[id]/summary.md`.
- Write the guide in Italian, with a numbered entry for every slide in presentation order.
- For each slide, include its title, purpose, a brief speaking outline, and the transition to the next slide.
- Record personal episodes or details still to be supplied, relevant sources, and timing per section when applicable.
- Keep the guide synchronized whenever slides are added, removed, reordered, or substantially revised.
- Keep `summary.md` next to `slides.yml`, outside `assets/`. Freya's current build and deploy copy talk assets and generated output, not this standalone source guide.

### Image Generation Context

- Whenever creating a talk, also create `src/talks/[id]/context.md` alongside `summary.md`.
- Write it in Italian as a self-contained brief that the user can upload to the ChatGPT app to generate cover and supporting images, without access to this repository or prior conversations.
- Include the exact title and abstract, the central message, relevant confirmed background, the narrative structure, tone, visual direction, and image-generation constraints.
- Provide a small set of image briefs tied to slide titles and numbers. Distinguish agreed visual choices from proposed concepts, and do not invent biographical details or substitute generated scenes for documentary photographs.
- Follow the image-generation guidelines below, including PNG, landscape 16:9, visual consistency, readability, and negative space. Keep slide text out of generated images.
- Keep the context synchronized with changes to the talk's story, slide references, and visual direction.
- Keep `context.md` outside `assets/`. Like `summary.md`, it is source material and is not copied by Freya's current build/deploy pipeline.

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

## Image Generation For Slides

- Generate images externally, preferably with ChatGPT standalone image generation.
- Keep generated images as supporting visuals, not as slide content replacements.
- Prefer 6-10 key images per talk, not one image per slide.
- Use a consistent visual language across the whole talk.
- Export images as PNG, landscape 16:9, with enough negative space for slide titles.
- Avoid copyrighted Doom assets, logos, screenshots, monsters, and UI. Use "retro shooter inspired", "terminal game", or "pixel-art demon-like shapes" instead.
- For separator slides, prefer strong simple compositions with one clear visual metaphor.
- For technical slides, prefer diagram-like illustrations over decorative art.
- Keep images readable at presentation distance: high contrast, simple shapes, no tiny text.
- Store generated images under the talk assets folder and reference them from `slides.yml`.
- Do not add image generation tooling to the repository.
