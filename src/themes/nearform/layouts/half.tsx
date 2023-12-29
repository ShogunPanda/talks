import { Image, resolveImageUrl, type SlideProps } from 'freya-slides'
import { ComplexContent, SlideWrapper, Text } from '../components/common.js'
import { Items } from '../components/item.js'
import { type Slide } from '../models.js'

export default function HalfLayout(props: SlideProps<Slide>): JSX.Element {
  const { context, theme, talk, index, slide } = props
  const resolveClasses = context.extensions.freya.resolveClasses

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
      context={context}
      theme={theme}
      talk={talk}
      slide={slide}
      index={index}
      className={resolveClasses('theme@slide--half-wrapper', 'theme@half', className)}
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
            return <ComplexContent key={key} raw={c} {...props} />
          }

          return (
            <h4 key={key} className={resolveClasses('theme@half__subtitle')}>
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
        <div className={resolveClasses('theme@half__image-wrapper')}>
          <Image context={context} src={imageUrl} className={resolveClasses('theme@half__image', imageClassName)} />
        </div>
      )}
    </SlideWrapper>
  )
}
