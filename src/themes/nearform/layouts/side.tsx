import { Code, Image, resolveImageUrl, type SlideProps } from 'freya-slides'
import { ComplexContent, SlideWrapper, Text } from '../components/common.js'
import { Items } from '../components/item.js'
import { type Slide } from '../models.js'

export default function SideLayout(props: SlideProps<Slide>): JSX.Element {
  const { context, theme, talk, index, slide } = props
  const resolveClasses = context.extensions.freya.resolveClasses

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
      className={resolveClasses('theme@slide--half-wrapper', className)}
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
            return <ComplexContent key={key} raw={c} {...props} />
          }

          return (
            <h4 key={key} className={resolveClasses('theme@side__content')}>
              <Text text={c} />
            </h4>
          )
        })}

        {items && (
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
      </div>
      {image && (
        <div className={resolveClasses('theme@side__image-wrapper')}>
          <Image context={context} src={imageUrl} className={resolveClasses('theme@side__image', imageClassName)} />
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
          <Code context={context} {...code} className={resolveClasses(codeClassName)} />
        </div>
      )}
    </SlideWrapper>
  )
}
