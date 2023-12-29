import { SvgIcon, type SlideProps } from 'freya-slides'
import { SlideWrapper, Text } from '../components/common.js'
import { type Slide } from '../models.js'

export default function QuoteLayout({ context, theme, slide, talk, index }: SlideProps<Slide>): JSX.Element {
  const resolveClasses = context.extensions.freya.resolveClasses

  const {
    title,
    sentence,
    author,
    options: { light, icons, quote },
    classes: { slide: className }
  } = slide
  const { primaryIcon, secondaryIcon } = quote ?? {}

  const [backgroundColor, sentenceColor, authorColor, foregroundColor] = light
    ? ['theme@bg-white', 'theme@text-nf-midnight-blue', 'text-black', '']
    : ['theme@bg-nf-brunch-pink', 'theme@text-white', 'text-nf-midnight-blue', 'text-white']

  return (
    <SlideWrapper
      context={context}
      theme={theme}
      talk={talk}
      slide={slide}
      index={index}
      className={resolveClasses(backgroundColor, className)}
      defaultLogoColor={light ? 'black' : 'white'}
    >
      <h1 className={resolveClasses(foregroundColor)}>
        <Text text={title ?? 'One last thing™'} />
      </h1>

      <h1 className={resolveClasses('theme@quote__title', sentenceColor)}>
        <Text className={resolveClasses('theme@quote__sentence')} text={`&ldquo;${sentence?.trim()}&rdquo;`} />
        <strong className={resolveClasses('theme@quote__author', authorColor)}>{author}</strong>
      </h1>

      {icons !== false && (
        <>
          <SvgIcon
            name={primaryIcon ?? 'puzzle-2'}
            className={resolveClasses('theme@quote__primary-icon', foregroundColor)}
            theme="nearform"
          />
          <SvgIcon
            name={secondaryIcon ?? 'bulb'}
            className={resolveClasses('theme@quote__secondary-icon', foregroundColor)}
            theme="nearform"
          />
        </>
      )}
    </SlideWrapper>
  )
}
