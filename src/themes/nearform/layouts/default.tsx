import { Code, Image, resolveImageUrl, type SlideProps } from 'freya-slides'
import { ComplexContent, SlideWrapper, Text } from '../components/common.js'
import { Grids, Items } from '../components/item.js'
import { type Slide } from '../models.js'

export default function DefaultLayout(props: SlideProps<Slide>): JSX.Element {
  const { context, theme, talk, index, slide } = props
  const resolveClasses = context.extensions.freya.resolveClasses

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
      className={resolveClasses(className)}
    >
      {title && (
        <h1>
          <Text text={title} />
        </h1>
      )}

      {content?.filter(Boolean).map((c: string | object, contentIndex: number) => {
        const key = `content:${index}:${contentIndex}`

        if (typeof c === 'object') {
          return <ComplexContent key={key} raw={c} {...props} />
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
            context={context}
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
          context={context}
          items={items}
          horizontal={horizontal}
          className={resolveClasses(itemsClassName)}
          talk={talk.id}
          noGap={noGap}
          skipSpacer={skipSpacer}
          skipDefaultClasses={skipDefaultClasses}
        />
      )}
      {!image && !items && grids && <Grids context={context} grids={grids} talk={talk.id} />}

      {!image && !items && !grids && code && (
        <div className={resolveClasses('theme@default__code', highlightClassName)}>
          <Code context={context} {...code} className={resolveClasses(codeClassName)} />
        </div>
      )}
    </SlideWrapper>
  )
}
