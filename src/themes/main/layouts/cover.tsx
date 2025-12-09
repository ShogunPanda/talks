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
import { Text } from '../../common/components/common.tsx'
import { SvgIcon } from '../../common/components/icons.tsx'
import { type Slide } from '../../common/models.ts'
import { SlideWrapper } from '../components/common.tsx'

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
    <a href="https://platformatic.dev" className={cleanCssClasses('logo')}>
      <Image src={resolveImage(theme, id, '@theme/logo-white.png')} className={cleanCssClasses('image')} />
      <span className={cleanCssClasses('text')}>Platformatic</span>
    </a>
  )

  if (branding === false) {
    logo = (
      <a href={author.website} className={cleanCssClasses('logo no-branding')}>
        <Image src={resolveImage(theme, id, '@common/cowtech.png')} className={cleanCssClasses('image')} />
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
      <Svg src="@theme/corner.svg" className={cleanCssClasses('corner')} />

      <div className={cleanCssClasses('contents')}>
        {logo}

        <main className={cleanCssClasses('header')}>
          <h1 className={cleanCssClasses('title', titleClassName)}>
            <Text text={titleFormatted ?? title} />
          </h1>

          {authors && (
            <h2 className={cleanCssClasses('author')}>
              {authors.map((author: Record<string, string>, index: number) => (
                <Fragment key={author.name}>
                  {index > 0 && <span className={cleanCssClasses('separator')} />}
                  <strong className={cleanCssClasses('name')}>
                    <Text text={author.name} />
                  </strong>
                </Fragment>
              ))}
            </h2>
          )}
          {!authors && (
            <h2 className={cleanCssClasses('author')}>
              <strong className={cleanCssClasses('name')}>
                <Text text={author.name} />
              </strong>

              <span className={cleanCssClasses('description')}>
                <Text
                  text={
                    branding === false ? author.descriptionNoBranding : (author.descriptionShort ?? author.description)
                  }
                />
              </span>
            </h2>
          )}
        </main>

        <aside className={cleanCssClasses('qrs')}>
          <QRCode
            data={`${urls[isProduction ? 'production' : 'development']}/${id}`}
            image={<SvgIcon name="desktop" className={cleanCssClasses('image')} />}
            imageRatio={1}
            label="View online"
            className={{
              root: cleanCssClasses('qr', qrClassName),
              code: cleanCssClasses('code'),
              label: cleanCssClasses('label')
            }}
          />
          <QRCode
            data={`${urls[isProduction ? 'production' : 'development']}/pdfs/${id}.pdf`}
            image={<SvgIcon name="file-pdf" className={cleanCssClasses('image')} />}
            imageRatio={1}
            label="Download PDF"
            className={{
              root: cleanCssClasses('qr', qrClassName),
              code: cleanCssClasses('code'),
              label: cleanCssClasses('label')
            }}
          />
        </aside>
      </div>
    </SlideWrapper>
  )
}
