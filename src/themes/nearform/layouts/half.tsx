import { Image, useFreya, type SlideProps } from '@perseveranza-pets/freya/client'
import { ComplexContent, SlideWrapper, Text } from '../components/common.js'
import { Items } from '../components/item.js'
import { type Slide } from '../models.js'

export default function HalfLayout({ slide, index, className }: SlideProps<Slide>): JSX.Element {
  const { talk, resolveClasses, resolveImage } = useFreya()

  const {
    title,
    content,
    image,
    items,
    options: { horizontal, noGap, skipSpacer, skipDefaultClasses },
    classes: { slide: slideClassName, image: imageClassName, items: itemsClassName }
  } = slide

  const imageUrl = resolveImage('nearform', talk.id, image)

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={resolveClasses('theme@slide--half-wrapper', 'theme@half', className, slideClassName)}
      defaultLogoColor="white"
    >
      <div className={resolveClasses('theme@half__contents')}>
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
            <h4 key={key} className={resolveClasses('theme@half__subtitle')}>
              <Text text={c} />
            </h4>
          )
        })}

        {items && (
          <Items
            items={items}
            horizontal={horizontal}
            className={resolveClasses(itemsClassName)}
            noGap={noGap}
            skipSpacer={skipSpacer}
            skipDefaultClasses={skipDefaultClasses}
          />
        )}
      </div>

      {image && (
        <div className={resolveClasses('theme@half__image-wrapper')}>
          <Image src={imageUrl} className={resolveClasses('theme@half__image', imageClassName)} />
        </div>
      )}
    </SlideWrapper>
  )
}
