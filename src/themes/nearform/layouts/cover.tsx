import { Image, QRCode, Svg, useClient, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { SlideWrapper, Text } from '../components/common.js'
import { SvgIcon } from '../components/icons.js'
import { type Slide } from '../models.js'

export default function CoverLayout({ className, style }: SlideProps): JSX.Element {
  const {
    isProduction,
    talk: {
      id,
      document: { author, title, titleFormatted }
    },
    theme: { urls },
    resolveClasses,
    resolveImage
  } = useClient()
  const { slide, index } = useSlide<Slide>()

  const {
    className: { root: rootClassName, qr: qrClassName }
  } = slide

  slide.decorations.logo = 'total-white'
  slide.decorations.permalink = false

  const backgroundImage = resolveImage('nearform', id, '@theme/bg-green.webp')

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={resolveClasses('theme@cover', className, rootClassName)}
      style={style}
    >
      <Image src={backgroundImage} className={resolveClasses('theme@cover__background')} />
      <div className={resolveClasses('theme@cover__contents')}>
        <Svg src="@theme/logo-with-text-total-white.svg" className={resolveClasses('theme@cover__logo')} />

        <main className={resolveClasses('theme@cover__header')}>
          <h1 className={resolveClasses('theme@cover__header__title')}>
            <Text text={titleFormatted ?? title} />
          </h1>

          <h2 className={resolveClasses('theme@cover__header__author')}>
            <strong className={resolveClasses('theme@cover__header__author__name')}>
              <Text text={author.name} />
            </strong>

            <span className={resolveClasses('theme@cover__header__author__description')}>
              <Text text={author.descriptionShort ?? author.description} />
            </span>
          </h2>
        </main>

        <h3 className={resolveClasses('theme@cover__copyright')}>
          &#169; Copyright {new Date().getFullYear()} NearForm Ltd. All Rights Reserved.
        </h3>

        <aside className={resolveClasses('theme@cover__qrs')}>
          <QRCode
            data={`${urls[isProduction ? 'production' : 'development']}/${id}`}
            image={<SvgIcon name="desktop" className={resolveClasses('theme@cover__qrs__qr__image')} />}
            imageRatio={1}
            label="View online"
            className={{
              root: resolveClasses('theme@cover__qrs__qr', qrClassName),
              code: resolveClasses('theme@cover__qrs__qr__code'),
              label: resolveClasses('theme@cover__qrs__qr__label')
            }}
          />
          <QRCode
            data={`${urls[isProduction ? 'production' : 'development']}/pdfs/${id}.pdf`}
            image={<SvgIcon name="file-pdf" className={resolveClasses('theme@cover__qrs__qr__image')} />}
            imageRatio={1}
            label="Download PDF"
            className={{
              root: resolveClasses('theme@cover__qrs__qr', qrClassName),
              code: resolveClasses('theme@cover__qrs__qr__code'),
              label: resolveClasses('theme@cover__qrs__qr__label')
            }}
          />
        </aside>
      </div>
    </SlideWrapper>
  )
}
