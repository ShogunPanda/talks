import { Code, Image, cleanCssClasses, useClient, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { type VNode } from 'preact'
import { ComplexContent, Text } from '../../common/components/common.tsx'
import { Grids, Items } from '../../common/components/item.tsx'
import { type Slide } from '../../common/models.ts'
import { SlideWrapper } from '../components/common.tsx'

export default function DefaultLayout({ className, style }: SlideProps): VNode {
  const {
    talk: { id },
    resolveImage
  } = useClient()
  const { slide, index } = useSlide<Slide>()

  const {
    title,
    content,
    grids,
    image,
    items,
    code,
    className: { root: rootClassName, title: titleClassName, subtitle: subtitleClassName }
  } = slide

  const imageUrl = resolveImage('main', id, image?.url)

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={cleanCssClasses('theme@default', className, rootClassName)}
      style={style}
    >
      {title && (
        <h1 className={cleanCssClasses(titleClassName)}>
          <Text text={title} />
        </h1>
      )}

      {content?.filter(Boolean).map((c: string | object, contentIndex: number) => {
        const key = `content:${index}:${contentIndex}`

        if (typeof c === 'object') {
          return <ComplexContent key={key} raw={c} slide={slide} />
        }

        return (
          <h4 key={key} className={cleanCssClasses('subtitle', subtitleClassName)}>
            <Text text={c} />
          </h4>
        )
      })}

      {image && (
        <div className={cleanCssClasses('image-wrapper')}>
          <Image
            src={imageUrl}
            className={cleanCssClasses('image', `${content?.length ? 'with' : 'no'}-content`, image.className)}
          />
        </div>
      )}

      {!image && items && <Items items={items} />}
      {!image && !items && grids && <Grids grids={grids} />}

      {!image && !items && !grids && code && (
        <div className={cleanCssClasses('code')}>
          <Code {...code} />
        </div>
      )}
    </SlideWrapper>
  )
}
