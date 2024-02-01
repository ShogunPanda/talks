import { Code, Image, cleanCssClasses, useClient, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { Accent, ComplexContent, SlideWrapper, Text } from '../components/common.js'
import { Items } from '../components/item.js'
import { type Slide } from '../models.js'

export default function SideLayout({ className, style }: SlideProps): JSX.Element {
  const {
    talk: { id },
    resolveClasses,
    resolveImage
  } = useClient()
  const { slide, index } = useSlide<Slide>()

  const {
    title,
    content,
    image,
    code,
    items,
    highlight,
    className: { root: rootClassName }
  } = slide

  const imageUrl = resolveImage('nearform', id, image?.url)

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={cleanCssClasses('theme@side', highlight && 'theme@side--with-highlight', className, rootClassName)}
      style={style}
    >
      <div className={resolveClasses('theme@side__primary')}>
        {title && (
          <h1>
            <Text text={title} />
            <Accent />
          </h1>
        )}

        {content?.filter(Boolean).map((c: string | object, contentIndex: number) => {
          const key = `content:${index}:${contentIndex}`

          if (typeof c === 'object') {
            return <ComplexContent key={key} raw={c} slide={slide} />
          }

          return (
            <h4 key={key} className={resolveClasses('theme@side__subtitle')}>
              <Text text={c} />
            </h4>
          )
        })}

        {items && <Items items={items} />}
      </div>

      <div
        className={resolveClasses(
          'theme@side__secondary',
          highlight && 'theme@side__secondary--with-highlight',
          highlight?.className
        )}
      >
        {image && <Image src={imageUrl} className={cleanCssClasses('theme@side__image', image.className)} />}
        {!image && highlight && (
          <h4 className={resolveClasses('theme@side__highlight')}>
            <Text text={highlight.text} />
          </h4>
        )}

        {!image && !highlight && code && <Code {...code} />}
      </div>
    </SlideWrapper>
  )
}
