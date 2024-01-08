import { useFreya, type SlideProps } from '@perseveranza-pets/freya/client'
import { SlideWrapper, Text } from '../components/common.js'
import { type Slide } from '../models.js'

export default function RawLayout({ slide, index, className }: SlideProps<Slide>): JSX.Element {
  const {
    content,
    classes: { slide: slideClassName, raw: rawClassName }
  } = slide
  const { resolveClasses } = useFreya()

  return (
    <SlideWrapper slide={slide} index={index} className={resolveClasses(className, slideClassName)}>
      <div className={resolveClasses(rawClassName)}>
        <Text text={content.join('')} />
      </div>
    </SlideWrapper>
  )
}
