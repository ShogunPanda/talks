import { Code, Image, useFreya, type SlideProps } from '@perseveranza-pets/freya/client'
import { ComplexContent, SlideWrapper, Text } from '../components/common.js'
import { Items } from '../components/item.js'
import { type Slide } from '../models.js'

export default function SideLayout({ slide, index, className }: SlideProps<Slide>): JSX.Element {
  const {
    talk: { id },
    resolveClasses,
    resolveImage
  } = useFreya()

  const {
    title,
    content,
    image,
    code,
    items,
    highlight,
    options: { horizontal, noGap, skipSpacer, skipDefaultClasses },
    classes: {
      slide: slideClassName,
      image: imageClassName,
      code: codeClassName,
      highlight: highlightClassName,
      items: itemsClassName
    }
  } = slide

  const imageUrl = resolveImage('nearform', id, image)

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={resolveClasses('theme@slide--half-wrapper', className, slideClassName)}
    >
      <div className={resolveClasses('theme@side')}>
        {title && (
          <h1>
            <Text text={title} />
          </h1>
        )}

        {content?.filter(Boolean).map((c: string | object, contentIndex: number) => {
          const key = `content:${index}:${contentIndex}`

          if (typeof c === 'object') {
            return <ComplexContent key={key} raw={c} slide={slide} />
          }

          return (
            <h4 key={key} className={resolveClasses('theme@side__content')}>
              <Text text={c} />
            </h4>
          )
        })}

        {items && (
          <Items
            items={items}
            horizontal={horizontal}
            className={resolveClasses(itemsClassName)}
            noGap={noGap}
            skipSpacer={skipSpacer}
            skipDefaultClasses={skipDefaultClasses}
          />
        )}
      </div>
      {image && (
        <div className={resolveClasses('theme@side__image-wrapper')}>
          <Image src={imageUrl} className={resolveClasses('theme@side__image', imageClassName)} />
        </div>
      )}
      {!image && highlight && (
        <div className={resolveClasses('theme@side__highlight', highlightClassName)}>
          <h4 className={resolveClasses('m-0')}>
            <Text text={highlight} />
          </h4>
        </div>
      )}

      {!image && !highlight && code && (
        <div className={resolveClasses('theme@side__code', highlightClassName)}>
          <Code {...code} className={resolveClasses(codeClassName)} />
        </div>
      )}
    </SlideWrapper>
  )
}
