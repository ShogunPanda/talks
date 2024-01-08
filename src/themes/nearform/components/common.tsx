import { Progress, QRCode, Svg, useFreya } from '@perseveranza-pets/freya/client'
import { type ComponentChildren, type JSX, type VNode } from 'preact'
import { type Slide } from '../models.js'
import { SvgIcon } from './icons.js'

interface SlideWrapperProps {
  slide: Slide
  index: number
  skipDecorations?: boolean
  defaultLogoColor?: 'black' | 'white'
  className?: string
  style?: JSX.CSSProperties
  children: ComponentChildren | ComponentChildren[]
}

interface TextProps {
  text: string
  className?: string
}

interface ComplexContentProps {
  slide: Slide
  raw: Record<string, any>
}

type DecorationProps = Pick<SlideWrapperProps, 'slide' | 'index' | 'defaultLogoColor'>

export function Text({ text, className }: TextProps): VNode {
  const { resolveClasses, parseContent } = useFreya()

  text = parseContent(text).replaceAll(
    / class="([^"]+)"/g,
    (_: string, classes: string) => ` class="${resolveClasses(classes)}"`
  )

  return (
    <span className={className ? resolveClasses(className) : undefined} dangerouslySetInnerHTML={{ __html: text }} />
  )
}

export function ComplexContent({ raw, slide }: ComplexContentProps): JSX.Element {
  const { resolveClasses } = useFreya()

  if (raw.qr) {
    return <QRCode data={raw.qr} classes={{ code: resolveClasses(slide.classes.qr) }} />
  }

  return <></>
}

export function Decorations({ slide, index, defaultLogoColor }: DecorationProps): JSX.Element {
  const {
    isProduction,
    talk: { id, slidesPadding },
    theme: { urls },
    resolveClasses
  } = useFreya()

  const {
    sequence,
    icon,
    logo,
    classes: { icon: iconClasses, sequence: sequenceClasses, qr: qrClassName }
  } = slide

  return (
    <>
      {sequence && (
        <h2 className={resolveClasses('theme@sequence', sequenceClasses)}>
          <Text text={sequence} />
        </h2>
      )}
      {!sequence && icon && <SvgIcon name={icon} className={resolveClasses('theme@callout__icon', iconClasses)} />}
      <QRCode
        data={`${urls[isProduction ? 'production' : 'development']}/${id}/${index
          .toString()
          .padStart(slidesPadding, '0')}.pdf`}
        // image={resolveImage(themeId, id, '@theme/icons/world.svg')}
        // imageRatio={1}
        classes={{
          code: resolveClasses('theme@page-qr', `theme@page-qr--${qrClassName ?? defaultLogoColor}`),
          qr: resolveClasses('theme@page-qr__qr'),
          image: resolveClasses('theme@page-qr__image')
        }}
      />
      <Svg
        path="@theme/nearform-logo.svg"
        className={resolveClasses('theme@logo', `theme@logo--${logo ?? defaultLogoColor}`)}
      />
    </>
  )
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
  const { resolveClasses } = useFreya()

  const optionSkipDecorations = slide.options.skipDecorations
  const { foreground, background } = slide

  // These two should be moved to the SlideWrapper component
  const foregroundClass = foreground ? `theme@text-${foreground}` : ''
  const backgroundClass = background ? `theme@bg-${background}` : ''

  if (!defaultLogoColor) {
    defaultLogoColor = 'black'
  }

  return (
    <article className={resolveClasses('freya@slide', foregroundClass, backgroundClass, className)} style={style}>
      {children}
      <Progress current={index} />

      {!skipDecorations && !optionSkipDecorations && (
        <Decorations slide={slide} index={index} defaultLogoColor={defaultLogoColor} />
      )}
    </article>
  )
}
