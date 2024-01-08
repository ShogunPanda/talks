import { QRCode, Svg, useFreya, type SlideProps } from '@perseveranza-pets/freya/client'
import { SlideWrapper, Text } from '../components/common.js'
import { type Slide } from '../models.js'

export default function CoverLayout({ slide, index, className }: SlideProps<Slide>): JSX.Element {
  const {
    isProduction,
    talk: {
      id,
      document: { author, title, titleFormatted }
    },
    theme: { id: themeId, urls },
    resolveClasses,
    resolveImage
  } = useFreya()

  const {
    classes: { slide: slideClassName, qr: qrClassName }
  } = slide

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={resolveClasses('theme@cover', className, slideClassName)}
      skipDecorations={true}
    >
      <Svg path="@theme/cover-curve-top-left.svg" className={resolveClasses('theme@cover__curve-top-left')} />
      <Svg path="@theme/cover-curve-bottom-right.svg" className={resolveClasses('theme@cover__curve-bottom-right')} />

      <div className={resolveClasses('theme@cover__contents')}>
        <h1 className={resolveClasses('theme@cover__title')}>
          <Text text={titleFormatted || title} />
        </h1>

        <h2 className={resolveClasses('theme@cover__author')}>
          <strong className={resolveClasses('theme@cover__author__name')}>
            <Text text={author.name} />
          </strong>

          <Text text={author.descriptionShort || author.description} />
        </h2>

        <div className={resolveClasses('theme@cover__separator')} />

        <h3 className={resolveClasses('theme@cover__copyright')}>
          &#169; Copyright {new Date().getFullYear()} NearForm Ltd. All Rights Reserved.
        </h3>

        <Svg path="@theme/nearform-logo-with-text-right.svg" className={resolveClasses('theme@cover__logo')} />

        <div className={resolveClasses('theme@cover__qrs')}>
          <QRCode
            data={`${urls[isProduction ? 'production' : 'development']}/${id}`}
            image={resolveImage(themeId, id, '@theme/icons/world.svg')}
            imageRatio={1}
            label="View online"
            classes={{
              code: resolveClasses('theme@cover__qr__code', qrClassName),
              qr: resolveClasses('theme@cover__qr__qr'),
              label: resolveClasses('theme@cover__qr__label'),
              image: resolveClasses('theme@cover__qr__image')
            }}
          />
          <QRCode
            data={`${urls[isProduction ? 'production' : 'development']}/pdfs/${id}.pdf`}
            image={resolveImage(themeId, id, '@theme/icons/pdf.svg')}
            imageRatio={1}
            label="Download PDF"
            classes={{
              code: resolveClasses('theme@cover__qr__code', qrClassName),
              qr: resolveClasses('theme@cover__qr__qr'),
              label: resolveClasses('theme@cover__qr__label'),
              image: resolveClasses('theme@cover__qr__image')
            }}
          />
        </div>
      </div>
    </SlideWrapper>
  )
}
