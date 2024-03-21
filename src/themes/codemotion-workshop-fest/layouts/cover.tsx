import { Image, Progress, cleanCssClasses, useClient, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { type VNode } from 'preact'
import { Text } from '../../common/components/common.js'
import { type Slide } from '../../common/models.js'

export default function DefaultLayout({ className, style }: SlideProps): VNode {
  const {
    talk: {
      id,
      document: { author, title, titleFormatted }
    },
    resolveImage
  } = useClient()
  const { slide, index } = useSlide<Slide>()

  const {
    className: { root: rootClassName, title: titleClassName }
  } = slide

  const backgroundImage = resolveImage('codemotion-workshop-fest', id, '@theme/side.webp')

  return (
    <article className={cleanCssClasses('freya@slide', 'theme@cover', className, rootClassName)} style={style}>
      <Image src={backgroundImage} className={cleanCssClasses('theme@cover__background')} />
      <main className={cleanCssClasses('theme@cover__header')}>
        <h1 className={cleanCssClasses('theme@cover__header__title', titleClassName)}>
          <Text text={titleFormatted ?? title} />
        </h1>

        <h2 className={cleanCssClasses('theme@cover__header__author')}>
          <strong className={cleanCssClasses('theme@cover__header__author__name')}>
            <Text text={author.name} />
          </strong>

          <span className={cleanCssClasses('theme@cover__header__author__description')}>
            <Text text={author.descriptionShort ?? author.description} />
          </span>
        </h2>
      </main>

      <Progress current={index} />
    </article>
  )
}
