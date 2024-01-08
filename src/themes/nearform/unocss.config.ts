import { systemFonts, systemMonospaceFonts, unocssConfig } from '@perseveranza-pets/freya'

const config = { ...unocssConfig }

Object.assign(config.theme.colors, {
  nfDarkGrey: 'var(--ct-color-nf-dark-grey)',
  nfLightGrey: 'var(--ct-color-nf-light-grey)',
  nfDarkestBlue: 'var(--ct-color-nf-darkest-blue)',
  nfBrunchPink: 'var(--ct-color-nf-brunch-pink)',
  nfMidnightBlue: 'var(--ct-color-nf-midnight-blue)',
  nfNeonBlue: 'var(--ct-color-nf-neon-blue)',
  nfOrangeSplit: 'var(--ct-color-nf-orange-split)'
})

config.rules.push(
  ['font-poppins', { 'font-family': `Poppins, ${systemFonts}` }],
  ['font-lexend', { 'font-family': `Lexend, Poppins, ${systemFonts}` }],
  ['font-fira-code', { 'font-family': `'Fira Code', Consolas, ${systemMonospaceFonts}` }]
)

export default config
