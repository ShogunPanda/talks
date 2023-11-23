import { resolveImageUrl, type SlideProps } from 'freya-slides'
import { SlideWrapper } from '../components/common.js'
import { type Slide } from '../models.js'

export default function ImageLayout({ context, theme, talk, slide, index }: SlideProps<Slide>): JSX.Element {
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
      className={context.extensions.expandClasses(`theme@image ${className ?? ''}`)}
      defaultLogoColor="white"
    >
      {title && (
        <h1
          className={context.extensions.expandClasses('theme@image__title')}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      <img src={imageUrl} className={context.extensions.expandClasses(`theme@image__image ${imageClassName ?? ''}`)} />
    </SlideWrapper>
  )
}
