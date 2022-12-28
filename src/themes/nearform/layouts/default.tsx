import { parseContent, resolveImageUrl, SlideProps } from 'freya-slides'
import { SlideWrapper } from '../components/common.js'
import { Grids, Items } from '../components/item.js'
import { Slide } from '../models.js'

export default function DefaultLayout({ talk, slide, index }: SlideProps<Slide>): JSX.Element {
  const {
    title,
    content,
    grids,
    image,
    items,
    options: { horizontal, noGap, skipSpacer, skipDefaultClasses },
    classes: { slide: className, image: imageClassName, items: itemsClassName }
  } = slide

  const imageUrl = resolveImageUrl('nearform', talk.id, image)

  return (
    <SlideWrapper slide={slide} index={index} className={className}>
      {title && <h1 dangerouslySetInnerHTML={{ __html: parseContent(title) }} />}

      {content?.filter(Boolean).map((c: string, contentIndex: number) => (
        <h4
          key={`content:${index}:${contentIndex}`}
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: parseContent(c) }}
        />
      ))}

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
    </SlideWrapper>
  )
}
