import { Image, useFreya, type SlideProps } from '@perseveranza-pets/freya/client'
import { ComplexContent, SlideWrapper, Text } from '../components/common.js'
import { type Slide } from '../models.js'

export default function SeparatorLayout({ slide, index, className }: SlideProps<Slide>): JSX.Element {
  const {
    talk: { id },
    resolveClasses,
    resolveImage
  } = useFreya()

  const {
    title,
    subtitle,
    content,
    image,
    classes: { slide: slideClassName, image: imageClassName, title: titleClassName, subtitle: subtitleClassName }
  } = slide

  const imageUrl = resolveImage('nearform', id, image)

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={resolveClasses('theme@slide--half-wrapper', 'theme@separator', className, slideClassName)}
      defaultLogoColor="white"
    >
      {title && (
        <h1 className={resolveClasses('theme@separator__title', titleClassName)}>
          <Text text={title} />
        </h1>
      )}

      {image && (
        <div className={resolveClasses('theme@separator__wrapper')}>
          <Image src={imageUrl} className={resolveClasses('theme@separator__image', imageClassName)} />

          {content?.filter(Boolean).map((c: string | object, contentIndex: number) => {
            const key = `content:${index}:${contentIndex}`

            if (typeof c === 'object') {
              return <ComplexContent key={key} raw={c} slide={slide} />
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
