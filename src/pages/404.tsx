import type { VNode } from '@perseveranza-pets/freya/preact'
import { cleanCssClasses, type BuildContext } from '@perseveranza-pets/dante'
import { SvgFile as Svg } from '@perseveranza-pets/freya'
import { css } from './components/common.ts'
import { Footer } from './components/decorations.tsx'

export default async function Page404(context: BuildContext): Promise<VNode> {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Not Found (HTTP 404)</title>
        <style dangerouslySetInnerHTML={{ __html: await css(context) }} />
      </head>
      <body className={cleanCssClasses('body')}>
        <Svg
          path={new URL('./assets/background-black.svg', import.meta.url)}
          className={cleanCssClasses('background')}
        />

        <article className={cleanCssClasses('max-width main centered')}>
          <main>
            <h1>Not found - HTTP 404</h1>
            <h3>The page you are looking for doesn't exist or never existed.</h3>
            <p>
              If you think the page should be there,&nbsp;<a href="mailto:paolo@cowtech.it">please let me know</a>.
            </p>
          </main>
        </article>

        <Footer />
      </body>
    </html>
  )
}
