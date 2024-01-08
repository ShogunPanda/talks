import { Image, useFreya, type SlideProps } from '@perseveranza-pets/freya/client'
import { SlideWrapper, Text } from '../components/common.js'
import { type Slide } from '../models.js'

export default function ImageLayout({ slide, index, className }: SlideProps<Slide>): JSX.Element {
  const {
    talk: { id },
    resolveClasses,
    resolveImage
  } = useFreya()

  const {
    title,
    image,
    classes: { slide: slideClassName, image: imageClassName }
  } = slide

  const imageUrl = resolveImage('nearform', id, image)

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={resolveClasses('theme@image', className, slideClassName)}
      defaultLogoColor="white"
    >
      {title && (
        <h1 className={resolveClasses('theme@image__title')}>
          <Text text={title} />
        </h1>
      )}
      <Image src={imageUrl} className={resolveClasses('theme@image__image', imageClassName)} />
    </SlideWrapper>
  )
}
