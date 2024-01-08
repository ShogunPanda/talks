import { Svg, useFreya, type SlideProps } from '@perseveranza-pets/freya/client'
import { SlideWrapper, Text } from '../components/common.js'
import { type Slide } from '../models.js'

export default function EndLayout({ slide, index, className }: SlideProps<Slide>): JSX.Element {
  const {
    talk: {
      id,
      document: { author }
    },
    resolveClasses,
    resolveImage
  } = useFreya()

  const {
    title,
    content,
    image,
    classes: { slide: slideClassName, title: titleClasses, content: contentClasses }
  } = slide

  const pandaImageUrl = resolveImage('nearform', id, image ?? '@theme/panda.webp')

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={resolveClasses('theme@end', className, slideClassName)}
      style={{ backgroundImage: `url(${pandaImageUrl})` }}
      skipDecorations={true}
    >
      <div className={resolveClasses('theme@end__spacer')} />

      <h1 className={resolveClasses('theme@end__title', titleClasses)}>
        {title ?? 'Thank you!'}
        {content && <Text className={resolveClasses('theme@end__subtitle', contentClasses)} text={content} />}
      </h1>

      <footer className={resolveClasses('theme@end__footer')}>
        <div className={resolveClasses('theme@end__socials')}>
          <strong className={resolveClasses('theme@end__social', 'grid-area-[a]')}>{author.name}</strong>
          <a
            className={resolveClasses('theme@end__social grid-area-[b]')}
            href={`https://twitter.com/${author.twitter}`}
          >
            @{author.twitter}
          </a>
          <span className={resolveClasses('theme@end__social', 'grid-area-[c]')}>{author.description}</span>
          <a className={resolveClasses('theme@end__social', 'grid-area-[d]')} href={`mailto:${author.email}`}>
            {author.email}
          </a>
          <Svg path="@theme/nearform-logo-with-text-right.svg" className={resolveClasses('theme@end__logo')} />
        </div>
      </footer>

      <Svg path="@theme/nearform-curve-bottom-right.svg" className={resolveClasses('theme@end__curve')} />
    </SlideWrapper>
  )
}
