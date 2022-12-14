import { parseContent, Svg, SvgIcon } from 'freya-slides'
import { CSSProperties, ReactNode } from 'react'
import { Slide } from '../models.js'

interface SlideWrapperProps {
  slide: Slide
  index: number
  className?: string
  style?: CSSProperties
  skipDecorations?: boolean
  defaultLogoColor?: 'black' | 'white'
  children: ReactNode
}

interface DecorationProps {
  slide: Slide
  defaultLogoColor: 'black' | 'white'
}

export function SlideWrapper({
  slide,
  index,
  style,
  className,
  skipDecorations,
  defaultLogoColor,
  children
}: SlideWrapperProps): JSX.Element {
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

      {!skipDecorations && <Decorations slide={slide} defaultLogoColor={defaultLogoColor} />}
      <template data-freya-id="slide-notes" dangerouslySetInnerHTML={{ __html: slide.notes ?? '' }} />
    </article>
  )
}

export function Decorations({ slide, defaultLogoColor }: DecorationProps): JSX.Element {
  const {
    sequence,
    icon,
    logo,
    classes: { icon: iconClasses, sequence: sequenceClasses }
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
      <Svg theme="nearform" contents="@theme/nearform-logo.svg" className={`logo logo--${logo ?? defaultLogoColor}`} />
    </>
  )
}
