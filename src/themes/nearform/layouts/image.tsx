import { resolveImageUrl, SlideProps } from 'freya-slides'
import { SlideWrapper } from '../components/common.js'
import { Slide } from '../models.js'

export default function ImageLayout({ environment, theme, talk, slide, index }: SlideProps<Slide>): JSX.Element {
  const {
    title,
    image,
    classes: { slide: className, image: imageClassName }
  } = slide

  const imageUrl = resolveImageUrl('nearform', talk.id, image)

  return (
    <SlideWrapper
      environment={environment}
      theme={theme}
      talk={talk}
      slide={slide}
      index={index}
      className={`p-0 ${className ?? ''}`.trim()}
      defaultLogoColor="white"
    >
      {title && <h1 className="callout callout--title" dangerouslySetInnerHTML={{ __html: title }} />}
      <img src={imageUrl} className={`absolute left-0 w-full min-h-full ${imageClassName ?? ''}`.trim()} />
    </SlideWrapper>
  )
}
