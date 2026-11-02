import type { VNode } from '@perseveranza-pets/freya/preact'
import { cleanCssClasses, type BuildContext } from '@perseveranza-pets/dante'
import { cleanHTML, markdownRenderer, SvgFile as Svg, type PageData, type Talk } from '@perseveranza-pets/freya'
import { css } from './components/common.ts'
import { Footer, Header } from './components/decorations.tsx'
import { Icon } from './components/icon.tsx'

function parseAbstracts(raw: string): string {
  return cleanHTML(markdownRenderer.render(raw))
}

interface Cover {
  color: string
  icon: string
  text: string
}

interface ExtendedTalk extends Talk {
  cover: Cover
}

interface SlidesetProps {
  id: string
  talk: ExtendedTalk
}

interface Author {
  name: string
}

function niceJoin(array: string[], lastSeparator: string = ' and ', separator: string = ', '): string {
  switch (array.length) {
    case 0:
      return ''
    case 1:
      return array[0]
    case 2:
      return array.join(lastSeparator)
    default:
      return array.slice(0, -1).join(separator) + lastSeparator + array.at(-1)!
  }
}

async function Slideset({ id, talk }: SlidesetProps): Promise<VNode> {
  const cover = talk.cover as Cover
  const abstract = talk.document.abstract ? parseAbstracts(talk.document.abstract as string) : ''

  // Font Awesome exports individual icons using PascalCase module names.
  const iconModule =
    'fa' + cover.icon.replaceAll(/(^|-)([a-z0-9])/g, (_match, _separator, letter: string) => letter.toUpperCase())
  const { definition } = await import(`@fortawesome/free-solid-svg-icons/${iconModule}`)

  return (
    <article key={id} className={cleanCssClasses('slideset')}>
      <a className={cleanCssClasses('cover')} href={`/${id}`} style={{ backgroundColor: cover.color }}>
        <Icon definition={definition} />
        <h1 dangerouslySetInnerHTML={{ __html: cover.text.split('\n').join('<br/>') }} />
      </a>
      <div className={cleanCssClasses('content')}>
        <h3 className={cleanCssClasses('author')}>
          {talk.document.authors
            ? niceJoin(talk.document.authors.map(({ name }: Author) => name) as string[])
            : talk.document.author.name}
        </h3>
        <a href={`/${id}`} className={cleanCssClasses('title')} title={cleanHTML(talk.document.title)}>
          {cleanHTML(talk.document.title)}
        </a>

        <p className={cleanCssClasses('abstract')} title={abstract}>
          {abstract}
        </p>

        <nav className={cleanCssClasses('actions')} aria-label={`Resources: ${cleanHTML(talk.document.title)}`}>
          <a href={`/${id}`} title="View online">
            <Icon name="display" />
          </a>
          <a href={`/pdfs/${id}.pdf`} title="Download PDF">
            <Icon name="file-pdf" />
          </a>
          <a href={`/pptx/${id}.pptx`} title="Download PowerPoint (PPTX)">
            <Icon name="file-powerpoint" />
          </a>
        </nav>
      </div>
    </article>
  )
}

export default async function PageIndex(context: BuildContext, { talks, script }: PageData['index']): Promise<VNode> {
  const allTalks = Object.entries(talks)

  // Resolve asynchronous card renderers before passing their VNodes to Preact.
  const currentTalks = await Promise.all(
    allTalks
      .filter(([, talk]) => !talk.document.hidden && !talk.document.archived)
      .map(([id, talk]) => Slideset({ id, talk: talk as ExtendedTalk }))
  )

  const archivedTalks = await Promise.all(
    allTalks
      .filter(([, talk]) => !talk.document.hidden && talk.document.archived)
      .map(([id, talk]) => Slideset({ id, talk: talk as ExtendedTalk }))
  )

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Slidesets</title>
        <script defer={true} type="text/javascript" dangerouslySetInnerHTML={{ __html: script }} />
        <style dangerouslySetInnerHTML={{ __html: await css(context) }} />
      </head>
      <body className={cleanCssClasses('body index')}>
        <Svg
          path={new URL('./assets/background-black.svg', import.meta.url)}
          className={cleanCssClasses('background')}
        />
        <Header />

        <main className={cleanCssClasses('max-width main')}>
          {currentTalks.length > 0 && (
            <>
              <h2>Current Slidesets</h2>
              <div className={cleanCssClasses('slidesets')}>{currentTalks}</div>
            </>
          )}

          {archivedTalks.length > 0 && (
            <>
              <h2>Archived Slidesets</h2>
              <div className={cleanCssClasses('slidesets')}>{archivedTalks}</div>
            </>
          )}
        </main>

        <Footer />
      </body>
    </html>
  )
}
