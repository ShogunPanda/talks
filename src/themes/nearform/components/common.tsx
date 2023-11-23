import { type BuildContext } from 'dante'
import {
  QRCode,
  Svg,
  SvgIcon,
  parseContent,
  renderNotes,
  type Slide as FreyaSlide,
  type SlideProps,
  type Talk,
  type Theme
} from 'freya-slides'
import { type CSSProperties, type ReactNode } from 'react'
import { type Slide } from '../models.js'

interface SlideWrapperProps {
  context: BuildContext
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
  context,
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
  const { foreground, background } = slide

  // These two should be moved to the SlideWrapper component
  const foregroundClass = foreground ? `theme@text-${foreground}` : ''
  const backgroundClass = background ? `theme@bg-${background}` : ''

  if (!defaultLogoColor) {
    defaultLogoColor = 'black'
  }

  return (
    <article
      data-freya-id="slide"
      data-freya-index={index}
      className={context.extensions.expandClasses(
        `freya@slide z-${index + 100} ${foregroundClass} ${backgroundClass} ${className ?? ''}`
      )}
      style={style}
    >
      {children}
      <div data-freya-id="progress" className={context.extensions.expandClasses('freya@slide__progress')} />

      {!skipDecorations && !optionSkipDecorations && (
        <Decorations
          context={context}
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

export function Decorations({ context, theme, talk, slide, index, defaultLogoColor }: DecorationProps): JSX.Element {
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
          className={context.extensions.expandClasses(`theme@sequence ${sequenceClasses ?? ''}`)}
          dangerouslySetInnerHTML={{ __html: parseContent(sequence.toString()) }}
        />
      )}
      {!sequence && icon && (
        <SvgIcon
          name={icon}
          className={context.extensions.expandClasses(`theme@callout__icon ${iconClasses ?? ''}`)}
          theme="nearform"
        />
      )}
      <QRCode
        context={context}
        data={`${urls[context.isProduction ? 'production' : 'development']}/${id}/${index
          .toString()
          .padStart(slidesPadding, '0')}.pdf`}
        // image={resolveImageUrl(themeId, id, '@theme/icons/world.svg')}
        // imageRatio={1}
        classes={{
          code: `theme@page-qr theme@page-qr--${qrClassName ?? defaultLogoColor}`,
          qr: 'text-black bg-white',
          image: 'w-0_35sp h-auto'
        }}
      />
      <Svg
        theme="nearform"
        contents="@theme/nearform-logo.svg"
        className={context.extensions.expandClasses(`theme@logo theme@logo--${logo ?? defaultLogoColor}`)}
      />
    </>
  )
}

export function parseComplexContent(raw: Record<string, any>, key: string, props: SlideProps<Slide>): JSX.Element {
  if (raw.qr) {
    return <QRCode context={props.context} key={key} data={raw.qr} classes={{ code: props.slide.classes.qr ?? '' }} />
  }

  return <></>
}
