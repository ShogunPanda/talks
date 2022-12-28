import { parseContent, SlideProps } from 'freya-slides'
import { SlideWrapper } from '../components/common.js'
import { Slide } from '../models.js'

export default function RawLayout({ slide, index }: SlideProps<Slide>): JSX.Element {
  const {
    content,
    classes: { slide: className, raw: rawClassName }
  } = slide

  return (
    <SlideWrapper slide={slide} index={index} className={className}>
      <div className={rawClassName} dangerouslySetInnerHTML={{ __html: parseContent(content.join('')) }} />
    </SlideWrapper>
  )
}
