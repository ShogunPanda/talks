import { cleanCssClasses, useClient, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { type VNode } from 'preact'
import { Text } from '../../common/components/common.js'
import { SvgIcon } from '../../common/components/icons.js'
import { type Slide } from '../../common/models.js'
import { SlideWrapper } from '../components/common.js'

export default function SeparatorLayout({ className, style }: SlideProps): VNode {
  const {
    talk: { id },
    resolveImage
  } = useClient()
  const { slide, index } = useSlide<Slide>()

  const {
    title,
    subtitle,
    image,
    icon,
    options: { background },
    className: {
      root: rootClassName,
      contents: contentsClassName,
      title: titleClassName,
      subtitle: subtitleClassName,
      icon: iconClassName
    }
  } = slide

  let { foreground } = slide.options

  if (typeof foreground === 'undefined' && background && background !== 'amber' && background !== 'light-gray') {
    foreground = 'white'
  }

  const imageUrl = resolveImage('main', id, image?.url)

  // if (typeof slide.decorations.permalink === 'undefined' && slide.decorations.logo !== 'black') {
  //   slide.decorations.permalink = 'white'
  // }

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={cleanCssClasses(
        'theme@separator',
        !image && !icon && 'theme@separator--no-image',
        background && `theme@bg-${background}`,
        foreground && `theme@fg-${foreground}`,
        className,
        rootClassName
      )}
      style={style}
      defaultLogoColor="white"
    >
      <div className={cleanCssClasses('theme@separator__contents', contentsClassName)}>
        {title && (
          <h1 className={cleanCssClasses('theme@separator__title', titleClassName)}>
            <Text text={title} />
          </h1>
        )}

        {subtitle && (
          <h4 className={cleanCssClasses('theme@separator__subtitle', subtitleClassName)}>
            <Text text={subtitle} />
          </h4>
        )}
      </div>

      {image && (
        <div
          className={cleanCssClasses('theme@separator__image', image.className)}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}

      {!image && icon && <SvgIcon name={icon} className={cleanCssClasses('theme@separator__icon', iconClassName)} />}
    </SlideWrapper>
  )
}
