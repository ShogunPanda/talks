import { parseContent, resolveImageUrl, SlideProps } from 'freya-slides'
import { parseComplexContent, SlideWrapper } from '../components/common.js'
import { Items } from '../components/item.js'
import { Slide } from '../models.js'

export default function SideLayout(props: SlideProps<Slide>): JSX.Element {
  const { environment, theme, talk, index, slide } = props

  const {
    title,
    content,
    image,
    items,
    highlight,
    options: { horizontal, noGap, skipSpacer, skipDefaultClasses },
    classes: { slide: className, image: imageClassName, highlight: highlightClassName, items: itemsClassName }
  } = slide

  const imageUrl = resolveImageUrl('nearform', talk.id, image)

  return (
    <SlideWrapper
      environment={environment}
      theme={theme}
      talk={talk}
      slide={slide}
      index={index}
      className={`freya__slide--with-half p-0 ${className ?? ''}`.trim()}
    >
      <div className={`freya__slide__half min-w-5sp p-0_5sp self-start flex-col ${highlight ? 'flex-2' : 'flex-1'}`}>
        {title && <h1 dangerouslySetInnerHTML={{ __html: parseContent(title) }} />}

        {content?.filter(Boolean).map((c: string | object, contentIndex: number) => {
          const key = `content:${index}:${contentIndex}`

          if (typeof c === 'object') {
            return parseComplexContent(c, key, props)
          }

          return <h4 key={key} className="text-justify" dangerouslySetInnerHTML={{ __html: parseContent(c) }} />
        })}

        {items && (
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
      </div>

      {image && (
        <div className="flex flex-1 items-center justify-center">
          <img src={imageUrl} className={`max-w-4_5sp max-h-4sp mr-0_5sp ${imageClassName ?? ''}`.trim()} />
        </div>
      )}

      {!image && highlight && (
        <div className={`flex flex-1 items-center p-0_5p h-full text-justify ${highlightClassName ?? ''}`.trim()}>
          <h4 dangerouslySetInnerHTML={{ __html: parseContent(highlight) }} className="m-0" />
        </div>
      )}
    </SlideWrapper>
  )
}
