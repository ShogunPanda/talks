import type { VNode } from '@perseveranza-pets/freya/preact'
import { readFile } from 'node:fs/promises'
import { cleanCssClasses, type BuildContext } from '@perseveranza-pets/dante'
import { cleanHTML, resolveImageUrl, type PageData, type Talk, type Theme } from '@perseveranza-pets/freya'
import { SvgFile as Svg } from '@perseveranza-pets/freya'
import { css } from './components/common.ts'
import { Footer } from './components/decorations.tsx'
import { Icon } from './components/icon.tsx'

interface AssetsProps {
  name: string
  images: string[]
  theme: Theme
  talk: Talk
  cache: Record<string, string>
}

function Assets({ name, images, theme, talk, cache }: AssetsProps): VNode {
  return (
    <section key={name}>
      <h2>
        {name} Assets (<span data-asset-count="">{images.length}</span>)
      </h2>

      <div className={cleanCssClasses('assets')}>
        {images.map(id => {
          const url = resolveImageUrl(cache, theme.id, talk.id, id)

          return (
            <article key={id} className={cleanCssClasses('asset')} data-asset-id={id}>
              <a className={cleanCssClasses('preview')} href={url} target="_blank" rel="noreferrer">
                <img src={url} alt={id} />
              </a>
              <div className={cleanCssClasses('content')}>
                <code className={cleanCssClasses('id')}>{id}</code>
                <nav className={cleanCssClasses('actions')}>
                  <a href="#" title="Copy ID">
                    <Icon name="copy" />
                  </a>
                  <a href={url} target="_blank" rel="noreferrer" title="Open file">
                    <Icon name="arrow-up-right-from-square" />
                  </a>
                </nav>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default async function PageAssets(
  context: BuildContext,
  { theme, talk, commonImages, themeImages, talkImages }: PageData['assets']
): Promise<VNode> {
  const title = cleanHTML(talk.document.title)
  const cache: Record<string, string> = {}

  const copyScript = await readFile(new URL('./assets/assets.js', import.meta.url), 'utf-8')

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title} — Assets</title>
        <script defer={true} type="text/javascript" dangerouslySetInnerHTML={{ __html: copyScript }} />
        <style dangerouslySetInnerHTML={{ __html: await css(context) }} />
      </head>
      <body className={cleanCssClasses('body assets')}>
        <Svg path={new URL('./assets/background-black.svg', import.meta.url)} className={cleanCssClasses('background')} />

        <header className={cleanCssClasses('header')}>
          <div className={cleanCssClasses('max-width')}>
            <h1 className={cleanCssClasses('label')}>
              {talk.document.title} <span className={cleanCssClasses('subtitle')}>Assets</span>
            </h1>
          </div>
        </header>

        <main className={cleanCssClasses('max-width main')}>
          <input type="text" placeholder="Search assets..." className={cleanCssClasses('search')} />

          {!talkImages.length || <Assets name="Talk" images={talkImages} theme={theme} talk={talk} cache={cache} />}
          {!themeImages.length || <Assets name="Theme" images={themeImages} theme={theme} talk={talk} cache={cache} />}
          {!commonImages.length || (
            <Assets name="Common" images={commonImages} theme={theme} talk={talk} cache={cache} />
          )}
        </main>

        <Footer />
      </body>
    </html>
  )
}
