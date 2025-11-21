import {
  Image,
  QRCode,
  Svg,
  cleanCssClasses,
  useClient,
  useSlide,
  type SlideProps
} from '@perseveranza-pets/freya/client'
import { Fragment, type VNode } from 'preact'
import { Text } from '../../common/components/common.js'
import { SvgIcon } from '../../common/components/icons.js'
import { type Slide } from '../../common/models.js'
import { SlideWrapper } from '../components/common.js'

export default function CoverLayout({ className, style }: SlideProps): VNode {
  const {
    isProduction,
    talk: {
      id,
      document: { author, authors, title, titleFormatted, branding }
    },
    theme: { id: theme, urls },
    resolveImage
  } = useClient()
  const { slide, index } = useSlide<Slide>()

  const {
    className: { root: rootClassName, qr: qrClassName, title: titleClassName }
  } = slide

  slide.decorations.logo = false
  slide.decorations.permalink = false

  let logo = (
    <a href="https://platformatic.dev" className={cleanCssClasses('theme@cover__logo')}>
      <Image
        src={resolveImage(theme, id, '@theme/logo-white.png')}
        className={cleanCssClasses('theme@cover__logo__image')}
      />
      <span className={cleanCssClasses('theme@cover__logo__text')}>Platformatic</span>
    </a>
  )

  if (branding === false) {
    logo = (
      <a href={author.website} className={cleanCssClasses('theme@cover__logo theme@cover__logo--no-branding')}>
        <Image
          src={resolveImage(theme, id, '@common/cowtech.png')}
          className={cleanCssClasses('theme@cover__logo__image')}
        />
      </a>
    )
  }

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={cleanCssClasses('theme@cover', className, rootClassName)}
      style={style}
    >
      <Svg src="@theme/corner.svg" className={cleanCssClasses('theme@cover__corner')} />

      <div className={cleanCssClasses('theme@cover__contents')}>
        {logo}

        <main className={cleanCssClasses('theme@cover__header')}>
          <h1 className={cleanCssClasses('theme@cover__header__title', titleClassName)}>
            <Text text={titleFormatted ?? title} />
          </h1>

          {authors && (
            <h2 className={cleanCssClasses('theme@cover__header__author')}>
              {authors.map((author: Record<string, string>, index: number) => (
                <Fragment key={author.name}>
                  {index > 0 && <span className={cleanCssClasses('theme@cover__header__author__separator')} />}
                  <strong className={cleanCssClasses('theme@cover__header__author__name')}>
                    <Text text={author.name} />
                  </strong>
                </Fragment>
              ))}
            </h2>
          )}
          {!authors && (
            <h2 className={cleanCssClasses('theme@cover__header__author')}>
              <strong className={cleanCssClasses('theme@cover__header__author__name')}>
                <Text text={author.name} />
              </strong>

              <span className={cleanCssClasses('theme@cover__header__author__description')}>
                <Text
                  text={
                    branding === false ? author.descriptionNoBranding : (author.descriptionShort ?? author.description)
                  }
                />
              </span>
            </h2>
          )}
        </main>

        <aside className={cleanCssClasses('theme@cover__qrs')}>
          <QRCode
            data={`${urls[isProduction ? 'production' : 'development']}/${id}`}
            image={<SvgIcon name="desktop" className={cleanCssClasses('theme@cover__qrs__qr__image')} />}
            imageRatio={1}
            label="View online"
            className={{
              root: cleanCssClasses('theme@cover__qrs__qr', qrClassName),
              code: cleanCssClasses('theme@cover__qrs__qr__code'),
              label: cleanCssClasses('theme@cover__qrs__qr__label')
            }}
          />
          <QRCode
            data={`${urls[isProduction ? 'production' : 'development']}/pdfs/${id}.pdf`}
            image={<SvgIcon name="file-pdf" className={cleanCssClasses('theme@cover__qrs__qr__image')} />}
            imageRatio={1}
            label="Download PDF"
            className={{
              root: cleanCssClasses('theme@cover__qrs__qr', qrClassName),
              code: cleanCssClasses('theme@cover__qrs__qr__code'),
              label: cleanCssClasses('theme@cover__qrs__qr__label')
            }}
          />
        </aside>
      </div>
    </SlideWrapper>
  )
}
