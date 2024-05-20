import { Progress, cleanCssClasses, useClient, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { type VNode } from 'preact'
import { Text } from '../../common/components/common.js'
import { type Slide } from '../../common/models.js'

export default function DefaultLayout({ className, style }: SlideProps): VNode {
  const {
    talk: { id },
    resolveImage
  } = useClient()
  const { slide, index } = useSlide<Slide>()

  const {
    title,
    className: { root: rootClassName, title: titleClassName },
    options: { background }
  } = slide

  const backgroundUrl = resolveImage('codemotion-workshop-fest', id, background ?? '@theme/side.webp')

  return (
    <article
      className={cleanCssClasses('freya@slide', 'theme@separator', rootClassName, className)}
      style={{ backgroundImage: `url("${backgroundUrl}")`, ...style }}
    >
      {title && (
        <h1 className={cleanCssClasses('theme@separator__title', titleClassName)}>
          <Text text={title} />
        </h1>
      )}

      <Progress current={index} />
    </article>
  )
}
