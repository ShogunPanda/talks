import { Image, resolveImageUrl, type SlideProps } from 'freya-slides'
import { ComplexContent, SlideWrapper, Text } from '../components/common.js'
import { type Slide } from '../models.js'

export default function SeparatorLayout(props: SlideProps<Slide>): JSX.Element {
  const { context, theme, talk, index, slide } = props
  const resolveClasses = context.extensions.freya.resolveClasses

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
      className={resolveClasses('theme@slide--half-wrapper', 'theme@separator', className)}
      defaultLogoColor="white"
    >
      {title && (
        <h1 className={resolveClasses('theme@separator__title', titleClassName)}>
          <Text text={title} />
        </h1>
      )}

      {image && (
        <div className={resolveClasses('theme@separator__wrapper')}>
          <Image
            context={context}
            src={imageUrl}
            className={resolveClasses('theme@separator__image', imageClassName)}
          />

          {content?.filter(Boolean).map((c: string | object, contentIndex: number) => {
            const key = `content:${index}:${contentIndex}`

            if (typeof c === 'object') {
              return <ComplexContent key={key} raw={c} {...props} />
            }

            return (
              <h4 key={key} className={resolveClasses('theme@separator__content')}>
                <Text text={c} />
              </h4>
            )
          })}

          {subtitle && (
            <h3 className={resolveClasses('theme@separator__subtitle', subtitleClassName)}>
              <Text text={subtitle} />
            </h3>
          )}
        </div>
      )}
    </SlideWrapper>
  )
}
