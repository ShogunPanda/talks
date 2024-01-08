import { useFreya, type SlideProps } from '@perseveranza-pets/freya/client'
import { SlideWrapper, Text } from '../components/common.js'
import { SvgIcon } from '../components/icons.js'
import { type Slide } from '../models.js'

export default function QuoteLayout({ slide, index, className }: SlideProps<Slide>): JSX.Element {
  const { resolveClasses, resolveImage } = useFreya()

  const {
    title,
    sentence,
    author,
    options: { light, icons, quote },
    classes: { slide: slideClassName }
  } = slide
  const { primaryIcon, secondaryIcon } = quote ?? {}

  const [backgroundColor, sentenceColor, authorColor, foregroundColor] = light
    ? ['theme@bg-white', 'theme@text-nf-midnight-blue', 'text-black', '']
    : ['theme@bg-nf-brunch-pink', 'theme@text-white', 'text-nf-midnight-blue', 'text-white']

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={resolveClasses(backgroundColor, className, slideClassName)}
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
            name={primaryIcon ?? 'puzzle-piece'}
            className={resolveClasses('theme@quote__primary-icon', foregroundColor)}
          />
          <SvgIcon
            name={secondaryIcon ?? 'lightbulb-on'}
            className={resolveClasses('theme@quote__secondary-icon', foregroundColor)}
          />
        </>
      )}
    </SlideWrapper>
  )
}
