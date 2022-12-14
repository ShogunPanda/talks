import { CSSValue, Rule } from '@unocss/core'
import presetWind from '@unocss/preset-wind'
import transformerDirectives from '@unocss/transformer-directives'
import { defineUnoConfig, getTalk, getTalks, numericRule, systemFonts, systemMonospaceFonts } from 'freya-slides'

function generateSpacing(customUnit: string, ratio: number, unit: string): Rule[] {
  const spacings: Rule[] = []
  const sides: Record<string, string[]> = {
    t: ['top'],
    b: ['bottom'],
    l: ['left'],
    r: ['right'],
    x: ['left', 'right'],
    y: ['top', 'bottom']
  }
  const modifiers: [string, number][] = [
    ['', 1],
    ['-', -1]
  ]

  for (const [short, long] of [
    ['p', 'padding'],
    ['m', 'margin']
  ]) {
    for (const [prefix, modifier] of modifiers) {
      spacings.push(
        [
          new RegExp(`^${prefix}${short}-(\\d+(?:_\\d+)?)${customUnit}$`),
          ([, d]) => numericRule(long, d, unit, ratio * modifier)
        ],
        [
          new RegExp(`^${prefix}${short}([tblrxy])-(\\d+(?:_\\d+)?)${customUnit}$`),
          ([, dir, value]) => {
            const values: CSSValue = {}

            for (const side of sides[dir]) {
              Object.assign(values, numericRule(`${long}-${side}`, value, unit, ratio * modifier))
            }

            return values
          }
        ]
      )
    }
  }

  return spacings
}

function generateGaps(customUnit: string, ratio: number, unit: string): Rule[] {
  return [
    [
      new RegExp(`^gap-(\\d+(?:_\\d+)?)${customUnit}$`),
      ([, value]) => ({
        ...numericRule('grid-gap', value, unit, ratio),
        ...numericRule('gap', value, unit, ratio)
      })
    ],
    [
      new RegExp(`^gap-x-(\\d+(?:_\\d+)?)${customUnit}$`),
      ([, value]) => ({
        ...numericRule('grid-column-gap', value, unit, ratio),
        ...numericRule('column-gap', value, unit, ratio)
      })
    ],
    [
      new RegExp(`^gap-y-(\\d+(?:_\\d+)?)${customUnit}$`),
      ([, value]) => ({
        ...numericRule('grid-row-gap', value, unit, ratio),
        ...numericRule('row-gap', value, unit, ratio)
      })
    ]
  ]
}

function generateBorders(customUnit: string, ratio: number, unit: string): Rule[] {
  const borders: Rule[] = [
    [new RegExp(`^border-(\\d+(?:_\\d+)?)${customUnit}$`), ([, d]) => numericRule('border-width', d, unit, ratio)]
  ]

  for (const [short, long] of [
    ['t', 'top'],
    ['b', 'bottom'],
    ['l', 'left'],
    ['r', 'right']
  ]) {
    borders.push([
      new RegExp(`^border-${short}-(\\d+(?:_\\d+)?)${customUnit}$`),
      ([, d]) => numericRule(`border-${long}-width`, d, unit, ratio)
    ])
  }

  return borders
}

function generatePositions(customUnit: string, ratio: number, unit: string): Rule[] {
  const positions: Rule[] = []
  for (const position of ['top', 'bottom', 'left', 'right']) {
    positions.push(
      [
        new RegExp(`^${position}-(\\d+(?:_\\d+)?)${customUnit}$`),
        ([, value]) => numericRule(position, value, unit, ratio)
      ],
      [
        new RegExp(`^-${position}-(\\d+(?:_\\d+)?)${customUnit}$`),
        ([, value]) => numericRule(position, value, unit, -ratio)
      ]
    )
  }

  return positions
}

function generateDimensions(short: string, long: string, customUnit: string, ratio: number, unit: string): Rule[] {
  const dimensions: Rule[] = []

  for (const prefix of ['', 'min-', 'max-']) {
    dimensions.push([
      new RegExp(`^${prefix}${short}-(\\d+(?:_\\d+)?)${customUnit}$`),
      ([, value]) => numericRule(`${prefix}${long}`, value, unit, ratio)
    ])
  }

  return dimensions
}

function generateCustomUnits(): Rule[] {
  const customUnits: [string, number, string][] = [
    ['sp', 200, 'px'],
    ['p', 1, '%']
  ]
  const rules: Rule[] = []

  for (const [customUnit, ratio, unit] of customUnits) {
    rules.push(
      ...generateSpacing(customUnit, ratio, unit),
      ...generatePositions(customUnit, ratio, unit),
      ...generateGaps(customUnit, ratio, unit),
      ...generateBorders(customUnit, ratio, unit),
      ...generateDimensions('w', 'width', customUnit, ratio, unit),
      ...generateDimensions('h', 'height', customUnit, ratio, unit)
    )
  }

  return rules
}

const talks = await getTalks()
const safelist = new Set<string>()

for (const id of talks) {
  const talk = await getTalk(id)

  for (const slide of talk.slides) {
    for (const [name, value] of Object.entries(slide)) {
      if ((name === 'class' || name.toLowerCase().endsWith('classes')) && typeof value === 'string') {
        for (const klass of value.split(' ')) {
          safelist.add(klass)
        }
      }
    }
  }
}

export default defineUnoConfig({
  presets: [presetWind()],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      nfDarkGrey: '#272d3a',
      nfLightGrey: '#f2f2f0',
      nfDarkestBlue: '#130048',
      nfBrunchPink: '#fb7a9c',
      nfMidnightBlue: '#194caa',
      nfNeonBlue: '#2165e3',
      nfOrangeSplit: '#ecb22e'
    }
  },
  rules: [
    [/^flex-(\d+)$/, ([, value]: string[]) => ({ flex: `${value} ${value} 0%` })],
    ['flex-initial', { flex: 'initial' }],
    ['flex-row', { 'flex-direction': 'row' }],
    [/^grid-([a-z]+)$/, ([, value]: string[]) => ({ 'grid-area': value })],
    [
      /^grid-cols-\[([^\]]+)]$/,
      ([, value]: string[]) => ({ 'grid-template-columns': value.split(/\s*,\s*/).join(' ') })
    ],
    ...generateCustomUnits(),
    ...generateBorders('', 1, 'px'),
    [/^stroke-width-(\d+(?:_\d+)?)$/, ([, value]: string[]) => numericRule('stroke-width', value)],
    [/^line-height-(\d+(?:_\d+)?)$/, ([, value]: string[]) => numericRule('line-height', value, 'em')],
    [/^font-size-(\d+(?:_\d+)?)em$/, ([, value]: string[]) => numericRule('font-size', value, 'em')],
    [/^font-size-(\d+(?:_\d+)?)pt$/, ([, value]: string[]) => numericRule('font-size', value, 'px', 2.7)],
    ['font-poppins', { 'font-family': `Poppins, ${systemFonts}` }],
    ['font-lexend', { 'font-family': `Lexend, Poppins, ${systemFonts}` }],
    ['font-fira-code', { 'font-family': `'Fira Code', Consolas, ${systemMonospaceFonts}` }]
  ],
  safelist: ['hidden', ...safelist]
})
