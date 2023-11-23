import { Svg, resolveImageUrl, type SlideProps } from 'freya-slides'
import { SlideWrapper } from '../components/common.js'
import { type Slide } from '../models.js'

export default function EndLayout({ context, theme, talk, slide, index }: SlideProps<Slide>): JSX.Element {
  const {
    id,
    document: { author }
  } = talk

  const {
    title,
    content,
    image,
    classes: { title: titleClasses, content: contentClasses }
  } = slide

  const pandaImageUrl = resolveImageUrl('nearform', id, image ?? '@theme/panda.webp')

  return (
    <SlideWrapper
      context={context}
      theme={theme}
      talk={talk}
      slide={slide}
      index={index}
      className={context.extensions.expandClasses('theme@end')}
      style={{ backgroundImage: `url(${pandaImageUrl})` }}
      skipDecorations={true}
    >
      <div className={context.extensions.expandClasses('theme@end__spacer')} />

      <h1 className={context.extensions.expandClasses(`theme@end__title ${titleClasses ?? ''}`)}>
        {title ?? 'Thank you!'}
        {content && (
          <span className={context.extensions.expandClasses(`theme@end__subtitle ${contentClasses ?? ''}`)}>
            {content}
          </span>
        )}
      </h1>

      <footer className={context.extensions.expandClasses('theme@end__footer')}>
        <div className={context.extensions.expandClasses('theme@end__socials')}>
          <strong className={context.extensions.expandClasses('theme@end__social grid-area-[a]')}>{author.name}</strong>
          <a
            className={context.extensions.expandClasses('theme@end__social grid-area-[b]')}
            href={`https://twitter.com/${author.twitter}`}
          >
            @{author.twitter}
          </a>
          <span className={context.extensions.expandClasses('theme@end__social grid-area-[c]')}>
            {author.description}
          </span>
          <a
            className={context.extensions.expandClasses('theme@end__social grid-area-[d]')}
            href={`mailto:${author.email}`}
          >
            {author.email}
          </a>
          <Svg
            theme="nearform"
            contents="@theme/nearform-logo-with-text-right.svg"
            className={context.extensions.expandClasses('theme@end__logo')}
          />
        </div>
      </footer>

      <Svg
        theme="nearform"
        contents="@theme/nearform-curve-bottom-right.svg"
        className={context.extensions.expandClasses('theme@end__curve')}
      />
    </SlideWrapper>
  )
}
