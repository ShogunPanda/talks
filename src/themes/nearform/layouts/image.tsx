import { Image, resolveImageUrl, type SlideProps } from 'freya-slides'
import { SlideWrapper, Text } from '../components/common.js'
import { type Slide } from '../models.js'

export default function ImageLayout({ context, theme, talk, slide, index }: SlideProps<Slide>): JSX.Element {
  const resolveClasses = context.extensions.freya.resolveClasses

  const {
    title,
    image,
    classes: { slide: className, image: imageClassName }
  } = slide

  const imageUrl = resolveImageUrl('nearform', talk.id, image)

  return (
    <SlideWrapper
      context={context}
      theme={theme}
      talk={talk}
      slide={slide}
      index={index}
      className={resolveClasses('theme@image', className)}
      defaultLogoColor="white"
    >
      {title && (
        <h1 className={resolveClasses('theme@image__title')}>
          <Text text={title} />
        </h1>
      )}
      <Image context={context} src={imageUrl} className={resolveClasses('theme@image__image', imageClassName)} />
    </SlideWrapper>
  )
}
