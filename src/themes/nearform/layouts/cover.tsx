import { QRCode, Svg, parseContent, resolveImageUrl, type SlideProps } from 'freya-slides'
import { SlideWrapper } from '../components/common.js'
import { type Slide } from '../models.js'

export default function CoverLayout({ context, theme, talk, slide, index }: SlideProps<Slide>): JSX.Element {
  const { id: themeId, urls } = theme
  const {
    id,
    document: { author, title, titleFormatted }
  } = talk

  const {
    classes: { qr: qrClassName }
  } = slide

  return (
    <SlideWrapper
      context={context}
      theme={theme}
      talk={talk}
      slide={slide}
      index={index}
      className={context.extensions.expandClasses('theme@cover')}
      skipDecorations={true}
    >
      <Svg
        theme="nearform"
        contents="@theme/cover-curve-top-left.svg"
        className={context.extensions.expandClasses('theme@cover__curve-top-left')}
      />
      <Svg
        theme="nearform"
        contents="@theme/cover-curve-bottom-right.svg"
        className={context.extensions.expandClasses('theme@cover__curve-bottom-right')}
      />

      <div className={context.extensions.expandClasses('theme@cover__contents')}>
        <h1
          className={context.extensions.expandClasses('theme@cover__title')}
          dangerouslySetInnerHTML={{ __html: parseContent(titleFormatted || title) }}
        />

        <h2 className={context.extensions.expandClasses('theme@cover__author')}>
          <strong
            className={context.extensions.expandClasses('theme@cover__author__name')}
            dangerouslySetInnerHTML={{ __html: parseContent(author.name) }}
          />
          <span dangerouslySetInnerHTML={{ __html: parseContent(author.descriptionShort || author.description) }} />
        </h2>

        <div className={context.extensions.expandClasses('theme@cover__separator')} />

        <h3 className={context.extensions.expandClasses('theme@cover__copyright')}>
          &#169; Copyright {new Date().getFullYear()} NearForm Ltd. All Rights Reserved.
        </h3>

        <Svg
          theme="nearform"
          contents="@theme/nearform-logo-with-text-right.svg"
          className={context.extensions.expandClasses('theme@cover__logo')}
        />

        <div className={context.extensions.expandClasses('theme@cover__qrs')}>
          <QRCode
            context={context}
            data={`${urls[context.isProduction ? 'production' : 'development']}/${id}`}
            image={resolveImageUrl(themeId, id, '@theme/icons/world.svg')}
            imageRatio={1}
            label="View online"
            classes={{
              code: `theme@cover__qr__code ${qrClassName ?? ''}`,
              qr: 'theme@cover__qr__qr',
              label: 'theme@cover__qr__label',
              image: 'theme@cover__qr__image'
            }}
          />
          <QRCode
            context={context}
            data={`${urls[context.isProduction ? 'production' : 'development']}/pdfs/${id}.pdf`}
            image={resolveImageUrl(themeId, id, '@theme/icons/pdf.svg')}
            imageRatio={1}
            label="Download PDF"
            classes={{
              code: `theme@cover__qr__code ${qrClassName ?? ''}`,
              qr: 'theme@cover__qr__qr',
              label: 'theme@cover__qr__label',
              image: 'theme@cover__qr__image'
            }}
          />
        </div>
      </div>
    </SlideWrapper>
  )
}
