import { type Talk, type Theme } from '@perseveranza-pets/freya'
import { type BuildContext } from 'dante'
import { resolve } from 'node:path'
import { resolveIcon } from './components/icons.js'
import { Slide } from './models.js'

interface Icon {
  width: number
  height: number
  svgPathData: string
}

function camelCase(source: any): string {
  if (typeof source !== 'string' || !source.length) {
    return source
  }

  return source
    .toLowerCase()
    .replaceAll(/[^\d\sa-z]/g, ' ')
    .replaceAll(/(^.|\s.)/g, (...t) => t[1].toUpperCase())
}

const baseIcons = [
  'linkedin@free/brands:linkedin',
  'twitter@free/brands:twitter',
  'github@free/brands:github',
  'youtube@free/brands:youtube',
  'facebook@free/brands:facebook',
  'puzzle-piece',
  'lightbulb-on'
]

export async function setupServer(context: BuildContext, _theme: Theme, talk: Talk): Promise<object> {
  const loadedIcons: Record<string, Icon> = {}

  const toLoad: string[] = [...baseIcons]

  // Add the icons used in the slide
  for (const slide of talk.slides as Slide[]) {
    if (slide.icon) {
      toLoad.push(slide.icon)
    }

    if (slide.options?.quote?.primaryIcon) {
      toLoad.push(slide.options.quote.primaryIcon)
    }

    if (slide.options?.quote?.secondaryIcon) {
      toLoad.push(slide.options.quote.secondaryIcon)
    }

    for (const item of slide.items ?? []) {
      if (item.icon) {
        toLoad.push(item.icon)
      }
    }

    for (const grid of slide.grids ?? []) {
      for (const item of grid.items ?? []) {
        if (item.icon) {
          toLoad.push(item.icon)
        }
      }
    }
  }

  // Load all icons
  for (const icon of toLoad) {
    const { package: pkg, alias, name, section } = resolveIcon(icon)

    const fileName = `fa${camelCase(`${name}`).replaceAll(/\s/g, '')}.js`
    const path = `node_modules/@fortawesome/${pkg}-${section}-svg-icons/${fileName}`

    if (!loadedIcons[icon]) {
      try {
        const { width, height, svgPathData }: Icon = await import(resolve(process.cwd(), path))

        loadedIcons[alias ?? icon] = { width, height, svgPathData }
      } catch (e) {
        context.logger.error(`Invalid icon: \x1b[1m${icon}\x1b[22m, ignoring it.`)
        loadedIcons[alias ?? icon] = { width: 0, height: 0, svgPathData: '' }
      }
    }
  }

  return { icons: loadedIcons }
}
