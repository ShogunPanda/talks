import { Code, Image, useFreya, type SlideProps } from '@perseveranza-pets/freya/client'
import { ComplexContent, SlideWrapper, Text } from '../components/common.js'
import { Grids, Items } from '../components/item.js'
import { type Slide } from '../models.js'

export default function DefaultLayout({ slide, index, className }: SlideProps<Slide>): JSX.Element {
  const {
    talk: { id },
    resolveClasses,
    resolveImage
  } = useFreya()

  const {
    title,
    content,
    grids,
    image,
    items,
    code,
    options: { horizontal, noGap, skipSpacer, skipDefaultClasses },
    classes: {
      slide: slideClassName,
      image: imageClassName,
      items: itemsClassName,
      highlight: highlightClassName,
      code: codeClassName,
      contents: contentsClassName
    }
  } = slide

  const imageUrl = resolveImage('nearform', id, image)

  return (
    <SlideWrapper slide={slide} index={index} className={resolveClasses(className, slideClassName)}>
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
          <h4 key={key} className={resolveClasses('theme@default__subtitle', contentsClassName)}>
            <Text text={c} />
          </h4>
        )
      })}

      {image && (
        <div className={resolveClasses('theme@default__image-wrapper')}>
          <Image
            src={imageUrl}
            className={resolveClasses(
              'theme@default__image',
              `theme@default__image--${content?.length ? 'with' : 'no'}-content`,
              imageClassName
            )}
          />
        </div>
      )}

      {!image && items && (
        <Items
          items={items}
          horizontal={horizontal}
          className={resolveClasses(itemsClassName)}
          noGap={noGap}
          skipSpacer={skipSpacer}
          skipDefaultClasses={skipDefaultClasses}
        />
      )}
      {!image && !items && grids && <Grids grids={grids} />}

      {!image && !items && !grids && code && (
        <div className={resolveClasses('theme@default__code', highlightClassName)}>
          <Code {...code} className={resolveClasses(codeClassName)} />
        </div>
      )}
    </SlideWrapper>
  )
}
