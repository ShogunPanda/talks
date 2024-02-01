import { Svg, cleanCssClasses, useClient, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { Accent, SlideWrapper } from '../components/common.js'
import { type Slide } from '../models.js'

export default function NearFormLayout({ className, style }: SlideProps): JSX.Element {
  const { resolveClasses } = useClient()
  const { slide, index } = useSlide<Slide>()

  slide.decorations.logo = false
  slide.decorations.permalink = 'white'

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={cleanCssClasses('theme@nearform', className, slide.className?.root)}
      style={style}
    >
      <main className={resolveClasses('theme@nearform__contents')}>
        <h1 className={resolveClasses('theme@nearform__title')}>
          Introducing <span>Nearform</span>
          <Accent />
        </h1>

        <h4 className={resolveClasses('theme@nearform__subtitle')}>
          We’re a global consultancy of experienced engineers working in lean teams, designing and building high quality
          digital products at speed and scale to realise business and end user value.
        </h4>

        <aside className={resolveClasses('theme@nearform__cta')}>
          <div className={resolveClasses('theme@nearform__cta__description')}>
            <dl>
              <dt className={resolveClasses('theme@nearform__cta__description__number')}>10+ </dt>
              <dd className={resolveClasses('theme@nearform__cta__description__name')}>Years experience</dd>
              <dt className={resolveClasses('theme@nearform__cta__description__number')}>400+</dt>
              <dd className={resolveClasses('theme@nearform__cta__description__name')}>Nearformers</dd>
              <dt className={resolveClasses('theme@nearform__cta__description__number')}>
                28<span className={resolveClasses('theme@nearform__cta__description__number__spacer')}>+</span>
              </dt>
              <dd className={resolveClasses('theme@nearform__cta__description__name')}>Countries</dd>
              <dt className={resolveClasses('theme@nearform__cta__description__number')}>700+</dt>
              <dd className={resolveClasses('theme@nearform__cta__description__name')}>Engagements</dd>
              <dt className={resolveClasses('theme@nearform__cta__description__number')}>380+</dt>
              <dd className={resolveClasses('theme@nearform__cta__description__name')}>Customers</dd>
            </dl>
          </div>

          <h3 className={resolveClasses('theme@nearform__cta__hiring')}>We are hiring!</h3>
        </aside>

        <Svg src="@theme/world.svg" className={cleanCssClasses('theme@nearform__globe')} />
      </main>

      <footer className={resolveClasses('theme@nearform__categories')}>
        <h4
          className={resolveClasses(
            'theme@nearform__categories__category',
            'theme@nearform__categories__category--with-border'
          )}
        >
          Product Solutions
        </h4>
        <h4
          className={resolveClasses(
            'theme@nearform__categories__category',
            'theme@nearform__categories__category--with-border'
          )}
        >
          Modern Platforms
        </h4>
        <h4
          className={resolveClasses(
            'theme@nearform__categories__category',
            'theme@nearform__categories__category--with-border'
          )}
        >
          Data & AI Solutions
        </h4>
        <h4 className={resolveClasses('theme@nearform__categories__category')}>Enhanced Capability</h4>
      </footer>
    </SlideWrapper>
  )
}
