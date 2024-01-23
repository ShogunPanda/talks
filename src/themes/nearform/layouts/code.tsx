import { Code, useClient, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { Accent, SlideWrapper, Text } from '../components/common.js'
import { type Slide } from '../models.js'

export default function CodeLayout({ className, style }: SlideProps): JSX.Element {
  const { resolveClasses } = useClient()
  const { slide, index } = useSlide<Slide>()

  const {
    title,
    code,
    className: { root: rootClassName, title: titleClassName }
  } = slide

  return (
    <SlideWrapper slide={slide} index={index} className={resolveClasses(className, rootClassName)} style={style}>
      {title && (
        <h1 className={resolveClasses(titleClassName)}>
          <Text text={title} />
          <Accent />
        </h1>
      )}

      <div className={resolveClasses('theme@code__wrapper')}>
        <Code {...code!} />
      </div>
    </SlideWrapper>
  )
}
