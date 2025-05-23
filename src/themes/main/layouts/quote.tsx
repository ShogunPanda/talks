import { cleanCssClasses, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { type VNode } from 'preact'
import { Text } from '../../common/components/common.js'
import { SvgIcon } from '../../common/components/icons.js'
import { type Slide } from '../../common/models.js'
import { SlideWrapper } from '../components/common.js'

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
      className={cleanCssClasses('theme@quote', `theme@quote--${variant}`, className, rootClassName)}
      defaultLogoColor={light ? 'black' : 'white'}
      style={style}
    >
      {/* <Image src={backgroundImage} className={cleanCssClasses('theme@quote__background')} /> */}
      <div className={cleanCssClasses('theme@quote__contents')}>
        <h1 className={cleanCssClasses('theme@quote__title', titleClassName)}>
          <Text text={title ?? 'One last thing™'} />
        </h1>

        <h1 className={cleanCssClasses('theme@quote__quote')}>
          <Text
            className={cleanCssClasses('theme@quote__quote__sentence', `theme@quote__quote__sentence--${variant}`)}
            text={`&ldquo;${sentence?.trim()}&rdquo;`}
          />
          <strong className={cleanCssClasses('theme@quote__quote__author', `theme@quote__quote__author--${variant}`)}>
            {author}
          </strong>
        </h1>
      </div>

      {icons !== false && (
        <>
          {primaryIcon !== false && (
            <SvgIcon
              name={primaryIcon ?? 'lightbulb'}
              className={cleanCssClasses(
                'theme@quote__icon',
                'theme@quote__icon--primary',
                `theme@quote__icon--primary--${variant}`,
                primaryIconClassName
              )}
            />
          )}
          {secondaryIcon !== false && (
            <SvgIcon
              name={secondaryIcon ?? 'puzzle-piece'}
              className={cleanCssClasses(
                'theme@quote__icon',
                'theme@quote__icon--secondary',
                `theme@quote__icon--secondary--${variant}`,
                secondaryIconClassName
              )}
            />
          )}
        </>
      )}
    </SlideWrapper>
  )
}
