import { type BuildContext } from '@perseveranza-pets/dante'
import { compileCSS } from '@perseveranza-pets/freya'
import { homedir } from 'node:os'
import { resolve } from 'node:path'

export function css(context: BuildContext): Promise<string> {
  context.extensions.freya ??= {}
  context.extensions.freya.cssImports = {
    www: resolve(process.cwd(), '~/Development/Private/perseveranza/www/src/assets/styles'.replace('~', homedir()))
  }

  return compileCSS(new URL('../style.css', import.meta.url), context)
}
