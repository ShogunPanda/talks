import { cleanCssClasses, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { type VNode } from 'preact'
import { Text } from '../../common/components/common.tsx'
import { Grids } from '../../common/components/item.tsx'
import { type Slide } from '../../common/models.ts'
import { SlideWrapper } from '../components/common.tsx'

export default function HalfLayout({ className, style }: SlideProps): VNode {
  const { slide, index } = useSlide<Slide>()

  const {
    title,
    subtitle,
    grids,
    className: { root: rootClassName, title: titleClassName, subtitle: subtitleClassName }
  } = slide

  let { background, foreground } = slide.options

  background ??= 'black'
  foreground ??= 'white'
  slide.decorations.logo ??= 'white'

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={cleanCssClasses(
        'theme@platformatic',
        background && `theme@bg-${background}`,
        foreground && `theme@fg-${foreground}`,
        className,
        rootClassName
      )}
      style={style}
      defaultLogoColor="black"
    >
      <div className={cleanCssClasses('contents')}>
        {title && (
          <h1 className={cleanCssClasses(titleClassName)}>
            <Text text={title} />
          </h1>
        )}

        {subtitle && (
          <h1 className={cleanCssClasses(subtitleClassName)}>
            <Text text={subtitle} />
          </h1>
        )}

        <Grids grids={grids} />
      </div>
    </SlideWrapper>
  )
}
