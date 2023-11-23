import { SvgIcon, parseContent, type SlideProps } from 'freya-slides'
import { SlideWrapper } from '../components/common.js'
import { type Slide } from '../models.js'

export default function QuoteLayout({ context, theme, slide, talk, index }: SlideProps<Slide>): JSX.Element {
  const {
    title,
    sentence,
    author,
    options: { light, icons, quote },
    classes: { slide: className }
  } = slide
  const { primaryIcon, secondaryIcon } = quote ?? {}

  const [backgroundColor, sentenceColor, authorColor] = light
    ? ['theme@bg-white', 'theme@text-nf-midnight-blue', 'text-black']
    : ['theme@bg-nf-brunch-pink', 'theme@text-white', 'text-nf-midnight-blue']

  return (
    <SlideWrapper
      context={context}
      theme={theme}
      talk={talk}
      slide={slide}
      index={index}
      className={context.extensions.expandClasses(`${backgroundColor} ${className ?? ''}`)}
      defaultLogoColor={light ? 'black' : 'white'}
    >
      <h1
        dangerouslySetInnerHTML={{ __html: parseContent(title ?? 'One last thing™') }}
        className={context.extensions.expandClasses(!light ? 'text-white' : '')}
      />

      <h1 className={context.extensions.expandClasses(`theme@quote__title ${sentenceColor}`)}>
        <span
          className={context.extensions.expandClasses('theme@quote__sentence')}
          dangerouslySetInnerHTML={{ __html: parseContent(`&ldquo;${sentence?.trim()}&rdquo;`) }}
        />
        <strong className={context.extensions.expandClasses(`theme@quote__author ${authorColor}`)}>{author}</strong>
      </h1>

      {icons !== false && (
        <>
          <SvgIcon
            name={primaryIcon ?? 'puzzle-2'}
            className={context.extensions.expandClasses(`theme@quote__primary-icon ${!light ? 'text-white' : ''}`)}
            theme="nearform"
          />
          <SvgIcon
            name={secondaryIcon ?? 'bulb'}
            className={context.extensions.expandClasses(`theme@quote__secondary-icon  ${!light ? 'text-white' : ''}`)}
            theme="nearform"
          />
        </>
      )}
    </SlideWrapper>
  )
}
