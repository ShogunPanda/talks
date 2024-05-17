import { cleanCssClasses, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { type VNode } from 'preact'
import { type Slide } from '../../common/models.js'
import { SlideWrapper } from '../components/common.js'

export default function PlatformaticLayout({ className, style }: SlideProps): VNode {
  const { slide, index } = useSlide<Slide>()

  const {
    className: { root: rootClassName }
  } = slide

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={cleanCssClasses(className, rootClassName)}
      style={style}
    ></SlideWrapper>
  )
}
