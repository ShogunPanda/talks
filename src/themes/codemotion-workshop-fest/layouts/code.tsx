import { Code, Progress, cleanCssClasses, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { type VNode } from 'preact'
import { Text } from '../../common/components/common.js'
import { type Slide } from '../../common/models.js'

export default function CodeLayout({ className, style }: SlideProps): VNode {
  const { slide, index } = useSlide<Slide>()

  const {
    title,
    code,
    className: { root: rootClassName, title: titleClassName }
  } = slide

  return (
    <article className={cleanCssClasses('freya@slide', rootClassName, className)} style={style}>
      {title && (
        <h1 className={cleanCssClasses(titleClassName)}>
          <Text text={title} />
        </h1>
      )}

      <div className={cleanCssClasses('theme@code__wrapper')}>
        <Code {...code!} />
      </div>

      <Progress current={index} />
    </article>
  )
}
