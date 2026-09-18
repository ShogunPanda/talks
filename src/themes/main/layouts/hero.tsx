import { cleanCssClasses, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { type VNode } from 'preact'
import { Text } from '../../common/components/common.tsx'
import { type Slide } from '../../common/models.ts'
import { SlideWrapper } from '../components/common.tsx'

export default function HeroLayout({ className, style }: SlideProps): VNode {
  const { slide, index } = useSlide<Slide>()

  const {
    title,
    subtitle,
    className: { root: rootClassName, contents: contentsClassName, title: titleClassName, subtitle: subtitleClassName }
  } = slide

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={cleanCssClasses('theme@hero', className, rootClassName)}
      style={style}
    >
      <div className={cleanCssClasses('contents', contentsClassName)}>
        {title && (
          <h1 className={cleanCssClasses('title', titleClassName ?? 'theme@fg-black')}>
            <Text text={title} />
          </h1>
        )}

        {subtitle && (
          <h4 className={cleanCssClasses('subtitle', subtitleClassName ?? 'theme@fg-white')}>
            <Text text={subtitle} />
          </h4>
        )}
      </div>
    </SlideWrapper>
  )
}
