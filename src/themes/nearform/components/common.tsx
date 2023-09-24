import {
  Context,
  Slide as FreyaSlide,
  QRCode,
  SlideProps,
  Svg,
  SvgIcon,
  Talk,
  Theme,
  parseContent,
  renderNotes
} from 'freya-slides'
import { CSSProperties, ReactNode } from 'react'
import { Slide } from '../models.js'

interface SlideWrapperProps {
  environment: Context['environment']
  theme: Theme
  talk: Talk
  slide: Slide
  index: number
  className?: string
  style?: CSSProperties
  skipDecorations?: boolean
  defaultLogoColor?: 'black' | 'white'
  children: ReactNode
}

type DecorationProps = Omit<SlideWrapperProps, 'skipDecorations' | 'children'>

export function SlideWrapper({
  environment,
  theme,
  talk,
  slide,
  index,
  style,
  className,
  skipDecorations,
  defaultLogoColor,
  children
}: SlideWrapperProps): JSX.Element {
  const optionSkipDecorations = slide.options.skipDecorations

  if (!defaultLogoColor) {
    defaultLogoColor = 'black'
  }

  return (
    <article
      data-freya-id="slide"
      data-freya-index={index}
      className={`freya__slide z-${index + 100} ${className ?? ''}`.trim()}
      style={style}
    >
      {children}
      <div className="freya__slide__progress" />

      {!skipDecorations && !optionSkipDecorations && (
        <Decorations
          environment={environment}
          theme={theme}
          talk={talk}
          slide={slide}
          index={index}
          defaultLogoColor={defaultLogoColor}
        />
      )}
      <template data-freya-id="slide-notes" dangerouslySetInnerHTML={{ __html: renderNotes(slide as FreyaSlide) }} />
    </article>
  )
}

export function Decorations({
  environment,
  theme,
  talk,
  slide,
  index,
  defaultLogoColor
}: DecorationProps): JSX.Element {
  const { urls } = theme
  const { id, slidesPadding } = talk
  const {
    sequence,
    icon,
    logo,
    classes: { icon: iconClasses, sequence: sequenceClasses, qr: qrClassName }
  } = slide

  return (
    <>
      {sequence && (
        <h2
          className={`sequence ${sequenceClasses ?? ''}`.trim()}
          dangerouslySetInnerHTML={{ __html: parseContent(sequence.toString()) }}
        />
      )}
      {!sequence && icon && (
        <SvgIcon name={icon} className={`callout-icon ${iconClasses ?? ''}`.trim()} theme="nearform" />
      )}
      <QRCode
        data={`${urls[environment]}/${id}/${index.toString().padStart(slidesPadding, '0')}.pdf`}
        // image={resolveImageUrl(themeId, id, '@theme/icons/world.svg')}
        // imageRatio={1}
        classes={{
          code: `page-qr page-qr--${qrClassName ?? defaultLogoColor}`.trim(),
          qr: 'text-black bg-white',
          image: 'w-0_35sp h-auto'
        }}
      />
      <Svg theme="nearform" contents="@theme/nearform-logo.svg" className={`logo logo--${logo ?? defaultLogoColor}`} />
    </>
  )
}

export function parseComplexContent(raw: Record<string, any>, key: string, props: SlideProps<Slide>): JSX.Element {
  if (raw.qr) {
    return <QRCode key={key} data={raw.qr} classes={{ code: props.slide.classes.qr ?? '' }} />
  }

  return <></>
}
