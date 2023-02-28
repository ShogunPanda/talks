import { parseContent, resolveImageUrl, SlideProps } from 'freya-slides'
import { parseComplexContent, SlideWrapper } from '../components/common.js'
import { Items } from '../components/item.js'
import { Slide } from '../models.js'

export default function DefaultLayout(props: SlideProps<Slide>): JSX.Element {
  const { talk, index, slide } = props

  const {
    title,
    content,
    image,
    items,
    options: { horizontal, noGap, skipSpacer, skipDefaultClasses },
    classes: { slide: className, image: imageClassName, items: itemsClassName }
  } = slide

  const imageUrl = resolveImageUrl('nearform', talk.id, image)

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={`p-0 flex-row items-start justify-start ${className}`}
      defaultLogoColor="white"
    >
      <div className="flex-1 min-w-5sp p-0_5sp">
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
        <div className="grid-b w-5sp h-full overflow-hidden">
          <img src={imageUrl} className={`h-full min-w-5gs max-w-none ${imageClassName ?? ''}`} />
        </div>
      )}
    </SlideWrapper>
  )
}
