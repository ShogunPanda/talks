import { cleanCssClasses, useClient, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { SlideWrapper, Text } from '../components/common.js'
import { type Slide } from '../models.js'

export default function RawLayout({ className, style }: SlideProps): JSX.Element {
  const { resolveClasses } = useClient()
  const { slide, index } = useSlide<Slide>()

  const {
    content,
    className: { root: rootClassName, raw: rawClassName }
  } = slide

  return (
    <SlideWrapper slide={slide} index={index} className={cleanCssClasses(className, rootClassName)} style={style}>
      <div className={resolveClasses(rawClassName)}>
        <Text text={content.join('')} />
      </div>
    </SlideWrapper>
  )
}
