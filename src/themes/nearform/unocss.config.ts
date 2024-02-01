import {
  customUnits,
  numericRule,
  parseNumericValue,
  systemFonts,
  systemMonospaceFonts,
  transformCSSValue,
  unocssConfig
} from '@perseveranza-pets/freya'
import { type UserConfig } from '@unocss/core'
import { type Theme as UnoTheme } from '@unocss/preset-mini'

const config: UserConfig<UnoTheme> = { ...unocssConfig }

Object.assign(config.theme!.colors!, {
  'nf-midnight': 'var(--nf-color-midnight)',
  'nf-midnight-80': 'var(--nf-color-midnight-80)',
  'nf-midnight-50': 'var(--nf-color-midnight-50)',
  'nf-midnight-30': 'var(--nf-color-midnight-30)',
  'nf-midnight-10': 'var(--nf-color-midnight-10)',
  'nf-green': 'var(--nf-color-green)',
  'nf-green-80': 'var(--nf-color-green-80)',
  'nf-green-50': 'var(--nf-color-green-50)',
  'nf-green-30': 'var(--nf-color-green-30)',
  'nf-green-10': 'var(--nf-color-green-10)',
  'nf-purple': 'var(--nf-color-purple)',
  'nf-purple-80': 'var(--nf-color-purple-80)',
  'nf-purple-50': 'var(--nf-color-purple-50)',
  'nf-purple-30': 'var(--nf-color-purple-30)',
  'nf-purple-10': 'var(--nf-color-purple-10)',
  'nf-blue': 'var(--nf-color-blue)',
  'nf-blue-80': 'var(--nf-color-blue-80)',
  'nf-blue-50': 'var(--nf-color-blue-50)',
  'nf-blue-30': 'var(--nf-color-blue-30)',
  'nf-blue-10': 'var(--nf-color-blue-10)',
  'nf-grey-80': 'var(--nf-color-grey-80)',
  'nf-grey-30': 'var(--nf-color-grey-30)',
  'nf-grey-10': 'var(--nf-color-grey-10)'
})

config.rules!.push(
  ['font-inter', { 'font-family': `Inter, ${systemFonts}` }],
  ['font-bitter', { 'font-family': `Bitter, ${systemFonts}` }],
  ['font-fira-code', { 'font-family': `"Fira Code", ${systemMonospaceFonts}` }],
  [/^letter-spacing-(\d+(?:_\d+)?px)$/, ([, value]: string[]) => numericRule('letter-spacing', value, 'px')],
  [
    /^bg-size-\[(.+)\]-\[(.+)\]/,
    ([, x, y]: string[]) => {
      x = transformCSSValue(x) ?? x
      y = transformCSSValue(x) ?? y

      return { 'background-size': `${parseNumericValue(x, customUnits)} ${parseNumericValue(y, customUnits)}` }
    }
  ]
)

config.layers!.theme = 30
config.layers!.special = 31
config.layers!.talk = 32

export default config
