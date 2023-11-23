import { resolveImageUrl, SlideProps, Svg, SvgIcon } from 'freya-slides'
import { SlideWrapper } from '../components/common.js'
import { Slide } from '../models.js'

export default function NearFormLayout({ context, theme, talk, slide, index }: SlideProps<Slide>): JSX.Element {
  const {
    id,
    document: {
      company: { count, npm }
    }
  } = talk

  const worldImageUrl = resolveImageUrl('nearform', id, '@theme/world.webp')

  return (
    <SlideWrapper
      context={context}
      theme={theme}
      talk={talk}
      slide={slide}
      index={index}
      className={context.extensions.expandClasses('theme@nearform')}
      skipDecorations={true}
    >
      <div className={context.extensions.expandClasses('theme@nearform__contents')}>
        <header className={context.extensions.expandClasses('theme@nearform__header')}>
          <Svg
            theme="nearform"
            contents="@theme/nearform-logo.svg"
            className={context.extensions.expandClasses('theme@nearform__logo')}
          />

          <p className={context.extensions.expandClasses('theme@nearform__tagline')}>
            WE’RE BOLD
            <br />
            WE’RE FLEXIBLE
            <br />
            WE’RE OPEN
            <br />
            WE’RE EMPOWERING
            <br />
          </p>
        </header>

        <div
          className={context.extensions.expandClasses('theme@nearform__description')}
          style={{ backgroundImage: `url(${worldImageUrl})` }}
        >
          <h2 className={context.extensions.expandClasses('theme@nearform__description__text')}>
            Global Delivery Org with {count}+ and counting
          </h2>
        </div>

        <h1 className={context.extensions.expandClasses('theme@nearform__hiring')}>We are hiring!</h1>
      </div>

      <footer
        className={context.extensions.expandClasses(
          'flex items-center w-full min-h-0_7sp px-0_5sp bg-nf-brunch-pink text-nf-darkest-blue font-poppins font-bold font-size-12pt line-height-1'
        )}
      >
        <a
          href="https://nearform.com"
          className={context.extensions.expandClasses('text-nf-darkest-blue talk@visited:text-nf-darkest-blue')}
        >
          nearform.com
        </a>
        <div className={context.extensions.expandClasses('w-3px h-0_3sp mx-1ch bg-nf-darkest-blue')} />
        <span>follow us on</span>

        <a
          href="https://www.linkedin.com/company/nearform/"
          className={context.extensions.expandClasses(
            'w-0_3sp h-0_3sp ml-1ch text-nf-darkest-blue talk@visited:text-nf-darkest-blue'
          )}
        >
          <SvgIcon name="brand-linkedin" theme="nearform" />
        </a>

        <a
          href="https://twitter.com/nearform"
          className={context.extensions.expandClasses(
            'w-0_3sp h-0_3sp ml-1ch text-nf-darkest-blue talk@visited:text-nf-darkest-blue'
          )}
        >
          <SvgIcon name="brand-twitter" theme="nearform" />
        </a>

        <a
          href="https://github.com/nearform"
          className={context.extensions.expandClasses(
            'w-0_3sp h-0_3sp ml-1ch text-nf-darkest-blue talk@visited:text-nf-darkest-blue'
          )}
        >
          <SvgIcon name="brand-github" theme="nearform" />
        </a>

        <a
          href="https://www.youtube.com/channel/UCp2Tsbjd3P8itnBHUNHi82A"
          className={context.extensions.expandClasses(
            'w-0_3sp h-0_3sp ml-1ch text-nf-darkest-blue talk@visited:text-nf-darkest-blue'
          )}
        >
          <SvgIcon name="brand-youtube" theme="nearform" />
        </a>

        <a
          href="https://www.facebook.com/NearFormLtd"
          className={context.extensions.expandClasses(
            'w-0_3sp h-0_3sp ml-1ch text-nf-darkest-blue talk@visited:text-nf-darkest-blue'
          )}
        >
          <SvgIcon name="brand-facebook" theme="nearform" />
        </a>

        <div className={context.extensions.expandClasses('flex flex-1')} />

        <Svg
          theme="nearform"
          contents="@theme/nearform-logo-with-text-right.svg"
          className={context.extensions.expandClasses('w-1_8sp justify-end fill-nf-darkest-blue')}
        />
      </footer>

      <Svg
        theme="nearform"
        contents="@theme/nearform-curve-bottom-right.svg"
        className={context.extensions.expandClasses('theme@nearform__curve')}
      />

      <div className={context.extensions.expandClasses('theme@nearform__npm')}>
        <h2 className={context.extensions.expandClasses('theme@nearform__npm__title')}>
          Major Contributors to the Open Source Web Platform
        </h2>

        <h3 className={context.extensions.expandClasses('theme@nearform__npm__header')}>NPM monthly downloads</h3>
        <h1 className={context.extensions.expandClasses('theme@nearform__npm__value')}>{npm.monthly}</h1>

        <hr className={context.extensions.expandClasses('theme@nearform__npm__separator')} />

        <h4 className={context.extensions.expandClasses('theme@nearform__npm__header')}>
          Represents modules used globally
        </h4>
        <h1 className={context.extensions.expandClasses('theme@nearform__npm__value')}>{npm.percentage}</h1>
      </div>
    </SlideWrapper>
  )
}
