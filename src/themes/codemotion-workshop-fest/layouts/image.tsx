import { Progress, cleanCssClasses, useClient, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { type VNode } from 'preact'
import { Text } from '../../common/components/common.js'
import { type Slide } from '../../common/models.js'

export default function ImageLayout({ className, style }: SlideProps): VNode {
  const {
    talk: { id },
    resolveImage
  } = useClient()
  const { slide, index } = useSlide<Slide>()

  const {
    title,
    subtitle,
    image,
    className: { root: rootClassName, title: titleClassName, subtitle: subtitleClassName },
    decorations: { logo }
  } = slide

  const imageUrl = resolveImage('codemotion-workshop-fest', id, image?.url)

  if (typeof slide.decorations.permalink === 'undefined' && (logo === 'white' || logo === 'total-white')) {
    slide.decorations.permalink = 'white'
  }

  return (
    <article
      className={cleanCssClasses('freya@slide', 'theme@image', rootClassName, className)}
      style={{ ...style, backgroundImage: `url(${imageUrl})` }}
    >
      <main className={cleanCssClasses('theme@image__contents')}>
        {(title || subtitle) && (
          <h1 className={cleanCssClasses('theme@callout theme@image__title', titleClassName)}>
            <Text text={title} />
            {subtitle && (
              <Text className={cleanCssClasses('theme@image__subtitle', subtitleClassName)} text={subtitle} />
            )}
          </h1>
        )}
      </main>
      <Progress current={index} />
    </article>
  )
}
