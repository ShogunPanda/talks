import { Code, parseContent, resolveImageUrl, type SlideProps } from 'freya-slides'
import { parseComplexContent, SlideWrapper } from '../components/common.js'
import { Grids, Items } from '../components/item.js'
import { type Slide } from '../models.js'

export default function DefaultLayout(props: SlideProps<Slide>): JSX.Element {
  const { context, theme, talk, index, slide } = props

  const {
    title,
    content,
    grids,
    image,
    items,
    code,
    options: { horizontal, noGap, skipSpacer, skipDefaultClasses },
    classes: {
      slide: className,
      image: imageClassName,
      items: itemsClassName,
      highlight: highlightClassName,
      code: codeClassName,
      contents: contentsClassName
    }
  } = slide

  const imageUrl = resolveImageUrl('nearform', talk.id, image)

  return (
    <SlideWrapper
      context={context}
      theme={theme}
      talk={talk}
      slide={slide}
      index={index}
      className={context.extensions.expandClasses(className)}
    >
      {title && <h1 dangerouslySetInnerHTML={{ __html: parseContent(title) }} />}

      {content?.filter(Boolean).map((c: string | object, contentIndex: number) => {
        const key = `content:${index}:${contentIndex}`

        if (typeof c === 'object') {
          return parseComplexContent(c, key, props)
        }

        return (
          <h4
            key={key}
            className={context.extensions.expandClasses(`theme@default__subtitle ${contentsClassName}`)}
            dangerouslySetInnerHTML={{ __html: parseContent(c) }}
          />
        )
      })}

      {image && (
        <div className={context.extensions.expandClasses('theme@default__image-wrapper')}>
          <img
            src={imageUrl}
            className={context.extensions.expandClasses(
              `theme@default__image theme@default__image--${content?.length ? 'with' : 'no'}-content ${
                imageClassName ?? ''
              }`
            )}
          />
        </div>
      )}

      {!image && items && (
        <Items
          context={context}
          items={items}
          horizontal={horizontal}
          className={context.extensions.expandClasses(itemsClassName)}
          talk={talk.id}
          noGap={noGap}
          skipSpacer={skipSpacer}
          skipDefaultClasses={skipDefaultClasses}
        />
      )}
      {!image && !items && grids && <Grids context={context} grids={grids} talk={talk.id} />}

      {!image && !items && !grids && code && (
        <div className={context.extensions.expandClasses(`theme@default__code ${highlightClassName}`)}>
          <Code context={context} {...code} className={context.extensions.expandClasses(codeClassName ?? '')} />
        </div>
      )}
    </SlideWrapper>
  )
}
