import { Code, parseContent, resolveImageUrl, SlideProps } from 'freya-slides'
import { parseComplexContent, SlideWrapper } from '../components/common.js'
import { Grids, Items } from '../components/item.js'
import { Slide } from '../models.js'

export default function DefaultLayout(props: SlideProps<Slide>): JSX.Element {
  const { talk, index, slide } = props

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
      code: codeClassName
    }
  } = slide

  const imageUrl = resolveImageUrl('nearform', talk.id, image)

  return (
    <SlideWrapper slide={slide} index={index} className={className}>
      {title && <h1 dangerouslySetInnerHTML={{ __html: parseContent(title) }} />}

      {content?.filter(Boolean).map((c: string | object, contentIndex: number) => {
        const key = `content:${index}:${contentIndex}`

        if (typeof c === 'object') {
          return parseComplexContent(c, key, props)
        }

        return <h4 key={key} className="text-justify" dangerouslySetInnerHTML={{ __html: parseContent(c) }} />
      })}

      {image && (
        <div className="flex flex-1 items-center justify-center">
          <img
            src={imageUrl}
            className={`max-w-8sp ${content?.length ? 'max-h-2_5sp' : 'max-h-3_5sp'} mx-auto ${
              imageClassName ?? ''
            }`.trim()}
          />
        </div>
      )}

      {!image && items && (
        <Items
          items={items}
          horizontal={horizontal}
          className={itemsClassName}
          talk={talk.id}
          noGap={noGap}
          skipSpacer={skipSpacer}
          skipDefaultClasses={skipDefaultClasses}
        />
      )}
      {!image && !items && grids && <Grids grids={grids} talk={talk.id} />}

      {!image && !items && !grids && code && (
        <div className={`flex items-center justify-center h-full min-w-40p ${highlightClassName ?? ''}`}>
          <Code {...code} className={codeClassName ?? ''} />
        </div>
      )}
    </SlideWrapper>
  )
}
