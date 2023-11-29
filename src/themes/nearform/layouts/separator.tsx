import { parseContent, resolveImageUrl, type SlideProps } from 'freya-slides'
import { parseComplexContent, SlideWrapper } from '../components/common.js'
import { type Slide } from '../models.js'

export default function SeparatorLayout(props: SlideProps<Slide>): JSX.Element {
  const { context, theme, talk, index, slide } = props

  const {
    title,
    subtitle,
    content,
    image,

    classes: { slide: className, image: imageClassName, title: titleClassName, subtitle: subtitleClassName }
  } = slide

  const imageUrl = resolveImageUrl('nearform', talk.id, image)

  return (
    <SlideWrapper
      context={context}
      theme={theme}
      talk={talk}
      slide={slide}
      index={index}
      className={context.extensions.expandClasses(`theme@slide--half-wrapper theme@separator ${className}`)}
      defaultLogoColor="white"
    >
      {title && (
        <h1
          className={context.extensions.expandClasses(`theme@separator__title ${titleClassName ?? ''}`)}
          dangerouslySetInnerHTML={{ __html: parseContent(title) }}
        />
      )}

      {image && (
        <div className={context.extensions.expandClasses('theme@separator__wrapper')}>
          <img
            src={imageUrl}
            className={context.extensions.expandClasses(`theme@separator__image ${imageClassName ?? ''}`)}
          />

          {content?.filter(Boolean).map((c: string | object, contentIndex: number) => {
            const key = `content:${index}:${contentIndex}`

            if (typeof c === 'object') {
              return parseComplexContent(c, key, props)
            }

            return (
              <h4
                key={key}
                className={context.extensions.expandClasses('theme@separator__content')}
                dangerouslySetInnerHTML={{ __html: parseContent(c) }}
              />
            )
          })}

          {subtitle && (
            <h3 className={context.extensions.expandClasses(`theme@separator__subtitle ${subtitleClassName ?? ''}`)}>
              {subtitle}
            </h3>
          )}
        </div>
      )}
    </SlideWrapper>
  )
}
