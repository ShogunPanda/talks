import { Code, cleanCssClasses, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { type VNode } from 'preact'
import { Text } from '../../common/components/common.tsx'
import { type Slide } from '../../common/models.ts'
import { SlideWrapper } from '../components/common.tsx'

export default function CodeLayout({ className, style }: SlideProps): VNode {
  const { slide, index } = useSlide<Slide>()

  const {
    title,
    subtitle,
    code,
    className: { root: rootClassName, title: titleClassName, subtitle: subtitleClassName }
  } = slide

  return (
    <SlideWrapper slide={slide} index={index} className={cleanCssClasses(className, rootClassName)} style={style}>
      {title && (
        <h1 className={cleanCssClasses(titleClassName)}>
          <Text text={title} />
        </h1>
      )}

      {subtitle && (
        <h4 className={cleanCssClasses(subtitleClassName)}>
          <Text text={subtitle} />
        </h4>
      )}

      <div className={cleanCssClasses('wrapper')}>
        <Code {...code!} />
      </div>
    </SlideWrapper>
  )
}
