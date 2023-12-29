import { type BuildContext } from 'dante'
import {
  CSSClassesResolverContext,
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
import { useContext, type CSSProperties, type ReactNode } from 'react'
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

interface TextProps {
  text: string
  className?: string
}

type ComplexContentProps = SlideProps<Slide> & { raw: Record<string, any> }

type DecorationProps = Omit<SlideWrapperProps, 'skipDecorations' | 'children'>

export function Text({ text, className }: TextProps): JSX.Element {
  const resolveClasses = useContext(CSSClassesResolverContext)

  text = parseContent(text).replaceAll(/class="([^"]+)"/g, (_, classes) => `class="${resolveClasses(classes)}"`)

  return <span className={resolveClasses(className)} dangerouslySetInnerHTML={{ __html: text }} />
}

export function ComplexContent({ raw, context, slide }: ComplexContentProps): JSX.Element {
  const resolveClasses = useContext(CSSClassesResolverContext)

  if (raw.qr) {
    return <QRCode context={context} data={raw.qr} classes={{ code: resolveClasses(slide.classes.qr) }} />
  }

  return <></>
}

export function Decorations({ context, theme, talk, slide, index, defaultLogoColor }: DecorationProps): JSX.Element {
  const resolveClasses = useContext(CSSClassesResolverContext)

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
        <h2 className={resolveClasses('theme@sequence', sequenceClasses)}>
          <Text text={sequence} />
        </h2>
      )}
      {!sequence && icon && (
        <SvgIcon name={icon} className={resolveClasses('theme@callout__icon', iconClasses)} theme="nearform" />
      )}
      <QRCode
        context={context}
        data={`${urls[context.isProduction ? 'production' : 'development']}/${id}/${index
          .toString()
          .padStart(slidesPadding, '0')}.pdf`}
        // image={resolveImageUrl(themeId, id, '@theme/icons/world.svg')}
        // imageRatio={1}
        classes={{
          code: resolveClasses('theme@page-qr', `theme@page-qr--${qrClassName ?? defaultLogoColor}`),
          qr: resolveClasses('theme@page-qr__qr'),
          image: resolveClasses('theme@page-qr__image')
        }}
      />
      <Svg
        theme="nearform"
        contents="@theme/nearform-logo.svg"
        className={resolveClasses('theme@logo', `theme@logo--${logo ?? defaultLogoColor}`)}
      />
    </>
  )
}

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
  const resolveClasses = context.extensions.freya.resolveClasses

  const optionSkipDecorations = slide.options.skipDecorations
  const { foreground, background } = slide

  // These two should be moved to the SlideWrapper component
  const foregroundClass = foreground ? `theme@text-${foreground}` : ''
  const backgroundClass = background ? `theme@bg-${background}` : ''

  if (!defaultLogoColor) {
    defaultLogoColor = 'black'
  }

  return (
    <CSSClassesResolverContext.Provider value={resolveClasses}>
      <article
        data-freya-id="slide"
        data-freya-index={index}
        className={resolveClasses('freya@slide', `z-${index + 100}`, foregroundClass, backgroundClass, className)}
        style={style}
      >
        {children}
        <div data-freya-id="progress" className={resolveClasses('freya@slide__progress')} />

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
    </CSSClassesResolverContext.Provider>
  )
}
