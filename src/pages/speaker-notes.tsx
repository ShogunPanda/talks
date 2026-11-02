import type { PageRenderer } from '@perseveranza-pets/freya'
import { cleanCssClasses, cleanHTML, compileCSS, renderNotes, SvgFile as Svg } from '@perseveranza-pets/freya'
import { css } from './components/common.ts'
import { Footer } from './components/decorations.tsx'

const PageSpeakerNotes: PageRenderer<'speaker-notes'> = async (context, { talk }) => {
  const styles = await css(context)
  const notesStyles = await compileCSS(new URL('./style.css', import.meta.url), context)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{talk.document.title} — Speaker Notes</title>
        <style dangerouslySetInnerHTML={{ __html: styles + '\n' + notesStyles }} />
      </head>
      <body className="body speaker-notes">
        <Svg path={new URL('./assets/background-black.svg', import.meta.url)} className={cleanCssClasses('background')} />

        <header className={cleanCssClasses('header')}>
          <div className={cleanCssClasses('max-width')}>
            <h1 className={cleanCssClasses('label')}>
              {talk.document.title} <span className={cleanCssClasses('subtitle')}>Speaker Notes</span>
            </h1>
          </div>
        </header>

        <main className={cleanCssClasses('max-width main')}>
          {talk.slides.map((slide, index) => {
            if (!slide.notes) {
              return null
            }
            return (
              <section key={index}>
                <h3>
                  Slide {(index + 1).toString().padStart(talk.slidesPadding, '0')}/{talk.slidesCount}:&nbsp;
                  <span>
                    {cleanHTML(
                      slide.title ?? (slide.layout ?? 'default').replaceAll(/(^.|\s.)/g, c => c.toUpperCase())
                    )}
                  </span>
                </h3>
                <div dangerouslySetInnerHTML={{ __html: renderNotes(slide) }} />
              </section>
            )
          })}
        </main>

        <Footer />
      </body>
    </html>
  )
}

export default PageSpeakerNotes
