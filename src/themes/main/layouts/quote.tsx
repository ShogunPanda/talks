import { cleanCssClasses, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { type VNode } from 'preact'
import { Text } from '../../common/components/common.tsx'
import { SvgIcon } from '../../common/components/icons.tsx'
import { type Slide } from '../../common/models.ts'
import { SlideWrapper } from '../components/common.tsx'

export default function QuoteLayout({ className, style }: SlideProps): VNode {
  const { slide, index } = useSlide<Slide>()

  const {
    title,
    quote: {
      sentence,
      author,
      primaryIcon,
      primaryIconClassName,
      secondaryIcon,
      secondaryIconClassName,
      light,
      icons,
      variant: slideVariant
    },
    className: { root: rootClassName, title: titleClassName }
  } = slide

  let variant = slideVariant
  if (!variant) {
    variant = light ? 'light' : 'dark'
  }

  if (variant === 'dark') {
    slide.decorations.permalink = 'white'
  }

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={cleanCssClasses('theme@quote', `${variant}`, className, rootClassName)}
      defaultLogoColor={light ? 'black' : 'white'}
      style={style}
    >
      {/* <Image src={backgroundImage} className={cleanCssClasses('background')} /> */}
      <div className={cleanCssClasses('contents')}>
        <h1 className={cleanCssClasses('title', titleClassName)}>
          <Text text={title ?? 'One last thing™'} />
        </h1>

        <h1 className={cleanCssClasses('quote')}>
          <Text className={cleanCssClasses('sentence', `${variant}`)} text={`&ldquo;${sentence?.trim()}&rdquo;`} />
          <strong className={cleanCssClasses('author', `${variant}`)}>{author}</strong>
        </h1>
      </div>

      {icons !== false && (
        <>
          {primaryIcon !== false && (
            <SvgIcon
              name={primaryIcon ?? 'lightbulb'}
              className={cleanCssClasses('icon', 'primary', `${variant}`, primaryIconClassName)}
            />
          )}
          {secondaryIcon !== false && (
            <SvgIcon
              name={secondaryIcon ?? 'puzzle-piece'}
              className={cleanCssClasses('icon', 'secondary', `${variant}`, secondaryIconClassName)}
            />
          )}
        </>
      )}
    </SlideWrapper>
  )
}
