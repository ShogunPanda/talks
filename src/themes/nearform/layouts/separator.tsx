import { parseContent, resolveImageUrl, SlideProps } from 'freya-slides'
import { parseComplexContent, SlideWrapper } from '../components/common.js'
import { Slide } from '../models.js'

export default function SeparatorLayout(props: SlideProps<Slide>): JSX.Element {
  const { talk, index, slide } = props

  const {
    title,
    content,
    image,
    classes: { slide: className, image: imageClassName }
  } = slide

  const imageUrl = resolveImageUrl('nearform', talk.id, image)

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={`p-0 flex-row items-center justify-start ${className}`}
      defaultLogoColor="white"
    >
      {title && (
        <h1
          className="flex-1 min-w-5sp px-0_5sp big-title big-title--white"
          dangerouslySetInnerHTML={{ __html: parseContent(title) }}
        />
      )}

      {image && (
        <div className="grid-b h-full overflow-hidden flex flex-col items-center justify-center w-5sp">
          <img src={imageUrl} className={`h-full min-w-5sp max-w-none ${imageClassName ?? ''}`} />

          {content?.filter(Boolean).map((c: string | object, contentIndex: number) => {
            const key = `content:${index}:${contentIndex}`

            if (typeof c === 'object') {
              return parseComplexContent(c, key, props)
            }

            return (
              <h4
                key={key}
                className="text-justify text-white mt-2ch font-bold font-size-24pt"
                dangerouslySetInnerHTML={{ __html: parseContent(c) }}
              />
            )
          })}
        </div>
      )}
    </SlideWrapper>
  )
}
