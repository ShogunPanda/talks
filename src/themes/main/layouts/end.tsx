import { cleanCssClasses, Image, useClient, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { Fragment, type VNode } from 'preact'
import { Text } from '../../common/components/common.tsx'
import { type Slide } from '../../common/models.ts'
import { SlideWrapper } from '../components/common.tsx'

export default function EndLayout({ className, style }: SlideProps): VNode {
  const {
    talk: {
      id,
      document: { author, authors }
    },
    resolveImage,
    theme: { id: theme }
  } = useClient()
  const { slide, index } = useSlide<Slide>()

  slide.decorations.logo = false
  if (typeof slide.decorations.permalink === 'undefined') {
    slide.decorations.permalink = 'white'
  }

  const {
    title,
    subtitle,
    image,
    className: { root: rootClassName, title: titleClassName, subtitle: subtitleClassName }
  } = slide

  const pandaImageUrl = resolveImage('main', id, image?.url ?? '@common/panda.png')

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={cleanCssClasses('theme@end', className, rootClassName)}
      style={{ ...style, backgroundImage: `url(${pandaImageUrl})` }}
    >
      <main className={cleanCssClasses('theme@end__contents')}>
        <h1 className={cleanCssClasses('theme@callout theme@end__title', titleClassName)}>
          {title ?? 'Thank you!'}
          {subtitle && <Text className={cleanCssClasses('theme@end__subtitle', subtitleClassName)} text={subtitle} />}
        </h1>
      </main>

      <footer className={cleanCssClasses('theme@end__footer')}>
        {authors?.map((author: Record<string, string>) => (
          <Fragment key={author.name}>
            <strong
              className={cleanCssClasses(
                'theme@end__social',
                'theme@end__social--highlight',
                'theme@end__social__author'
              )}
            >
              {author.name}
            </strong>

            <a
              className={cleanCssClasses('theme@end__social', 'theme@end__social__twitter')}
              href={`https://twitter.com/${author.twitter}`}
            >
              @{author.twitter}
            </a>
          </Fragment>
        ))}
        {!authors && (
          <>
            <strong
              className={cleanCssClasses(
                'theme@end__social',
                'theme@end__social--highlight',
                'theme@end__social__author'
              )}
            >
              {author.name}
            </strong>

            <a
              className={cleanCssClasses('theme@end__social', 'theme@end__social__twitter')}
              href={`https://twitter.com/${author.twitter}`}
            >
              @{author.twitter}
            </a>

            <span
              className={cleanCssClasses(
                'theme@end__social',
                'theme@end__social--highlight',
                'theme@end__social__description'
              )}
            >
              {author.description}
            </span>

            <a
              className={cleanCssClasses('theme@end__social', 'theme@end__social__email')}
              href={`mailto:${author.email}`}
            >
              {author.email}
            </a>
          </>
        )}

        <aside className={cleanCssClasses('theme@end__logo--wrapper')}>
          <a href="https://platformatic.dev" className={cleanCssClasses('theme@end__logo')}>
            <Image
              src={resolveImage(theme, id, '@theme/logo-white.png')}
              className={cleanCssClasses('theme@end__logo__image')}
            />
            <span className={cleanCssClasses('theme@end__logo__text')}>Platformatic</span>
          </a>
        </aside>
      </footer>
    </SlideWrapper>
  )
}
