import { parseContent, resolveImageUrl, SlideProps } from 'freya-slides'
import { SlideWrapper } from '../components/common.js'
import { Items } from '../components/item.js'
import { Slide } from '../models.js'

export default function SideLayout({ talk, slide, index }: SlideProps<Slide>): JSX.Element {
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
    <SlideWrapper slide={slide} index={index} className={`freya__slide--with-half p-0 ${className ?? ''}`}>
      <div className="freya__slide__half min-w-5sp p-0_5sp self-start flex-col flex-1">
        {title && <h1 dangerouslySetInnerHTML={{ __html: parseContent(title) }} />}

        {content?.filter(Boolean).map((c: string, contentIndex: number) => (
          <h4
            key={`content:${index}:${contentIndex}`}
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: parseContent(c) }}
          />
        ))}

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
        <div
          className={`flex items-center p-0_5sp h-full text-justify min-w-40p max-w-40p ${highlightClassName ?? ''}`}
        >
          <h4 dangerouslySetInnerHTML={{ __html: parseContent(highlight) }} className="m-0" />
        </div>
      )}
    </SlideWrapper>
  )
}
