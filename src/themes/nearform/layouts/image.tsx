import { resolveImageUrl } from '@freya/generation/loader.js'
import { SlideProps } from '@freya/generation/models.js'
import { SlideWrapper } from '../components/common'
import { Slide } from '../models.js'

export default function ImageLayout({ talk, slide, index }: SlideProps<Slide>): JSX.Element {
  const {
    title,
    image,
    classes: { slide: className, image: imageClassName }
  } = slide

  const imageUrl = resolveImageUrl('nearform', talk.id, image)

  return (
    <SlideWrapper slide={slide} index={index} className={`p-0 ${className ?? ''}`} defaultLogoColor="white">
      {title && <h1 className="callout callout--title" dangerouslySetInnerHTML={{ __html: title }} />}
      <img src={imageUrl} className={`absolute left-0 w-full min-h-full ${imageClassName ?? ''}`} />
    </SlideWrapper>
  )
}
