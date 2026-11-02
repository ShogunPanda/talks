import { homedir } from 'node:os'
import { resolve } from 'node:path'
import { type BuildContext } from '@perseveranza-pets/dante'
import { compileCSS } from '@perseveranza-pets/freya'

export function css(context: BuildContext): Promise<string> {
  context.extensions.freya ??= {}
  context.extensions.freya.cssImports = {
    www: resolve(process.cwd(), '~/Development/Private/sites/www/src/assets/styles'.replace('~', homedir()))
  }

  return compileCSS(new URL('../style.css', import.meta.url), context)
}
