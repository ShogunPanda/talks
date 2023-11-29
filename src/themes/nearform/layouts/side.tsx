import { Code, parseContent, resolveImageUrl, SlideProps } from 'freya-slides'
import { parseComplexContent, SlideWrapper } from '../components/common.js'
import { Items } from '../components/item.js'
import { Slide } from '../models.js'

export default function SideLayout(props: SlideProps<Slide>): JSX.Element {
  const { context, theme, talk, index, slide } = props

  const {
    title,
    content,
    image,
    code,
    items,
    highlight,
    options: { horizontal, noGap, skipSpacer, skipDefaultClasses },
    classes: {
      slide: className,
      image: imageClassName,
      code: codeClassName,
      highlight: highlightClassName,
      items: itemsClassName
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
      className={context.extensions.expandClasses(`theme@slide--half-wrapper ${className ?? ''}`)}
    >
      <div className={context.extensions.expandClasses('theme@side')}>
        {title && <h1 dangerouslySetInnerHTML={{ __html: parseContent(title) }} />}

        {content?.filter(Boolean).map((c: string | object, contentIndex: number) => {
          const key = `content:${index}:${contentIndex}`

          if (typeof c === 'object') {
            return parseComplexContent(c, key, props)
          }

          return (
            <h4
              key={key}
              className={context.extensions.expandClasses('theme@side__content')}
              dangerouslySetInnerHTML={{ __html: parseContent(c) }}
            />
          )
        })}

        {items && (
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
      </div>
      {image && (
        <div className={context.extensions.expandClasses('theme@side__image-wrapper')}>
          <img
            src={imageUrl}
            className={context.extensions.expandClasses(`theme@side__image ${imageClassName ?? ''}`)}
          />
        </div>
      )}
      {!image && highlight && (
        <div className={context.extensions.expandClasses(`theme@side__highlight ${highlightClassName ?? ''}`)}>
          <h4
            dangerouslySetInnerHTML={{ __html: parseContent(highlight) }}
            className={context.extensions.expandClasses('m-0')}
          />
        </div>
      )}

      {!image && !highlight && code && (
        <div className={context.extensions.expandClasses(`theme@side__code ${highlightClassName ?? ''}`)}>
          <Code context={context} {...code} className={context.extensions.expandClasses(codeClassName ?? '')} />
        </div>
      )}
    </SlideWrapper>
  )
}
