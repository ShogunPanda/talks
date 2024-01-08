import { Svg, useFreya, type SlideProps } from '@perseveranza-pets/freya/client'
import { SlideWrapper } from '../components/common.js'
import { SvgIcon } from '../components/icons.js'
import { type Slide } from '../models.js'

export default function NearFormLayout({ slide, index, className }: SlideProps<Slide>): JSX.Element {
  const {
    talk: {
      id,
      document: {
        company: { count, npm }
      }
    },
    resolveClasses,
    resolveImage
  } = useFreya()

  const worldImageUrl = resolveImage('nearform', id, '@theme/world.webp')

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={resolveClasses('theme@nearform', className, slide.className)}
      skipDecorations={true}
    >
      <div className={resolveClasses('theme@nearform__contents')}>
        <header className={resolveClasses('theme@nearform__header')}>
          <Svg path="@theme/nearform-logo.svg" className={resolveClasses('theme@nearform__logo')} />

          <p className={resolveClasses('theme@nearform__tagline')}>
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
          className={resolveClasses('theme@nearform__description')}
          style={{ backgroundImage: `url(${worldImageUrl})` }}
        >
          <h2 className={resolveClasses('theme@nearform__description__text')}>
            Global Delivery Org with {count}+ and counting
          </h2>
        </div>

        <h1 className={resolveClasses('theme@nearform__hiring')}>We are hiring!</h1>
      </div>

      <footer className={resolveClasses('theme@nearform__footer')}>
        <a href="https://nearform.com" className={resolveClasses('theme@nearform__footer__link')}>
          nearform.com
        </a>
        <div className={resolveClasses('theme@nearform__footer__follow')} />
        <span>follow us on</span>

        <a
          href="https://www.linkedin.com/company/nearform/"
          className={resolveClasses('theme@nearform__footer__social-link')}
        >
          <SvgIcon name="linkedin" />
        </a>

        <a href="https://twitter.com/nearform" className={resolveClasses('theme@nearform__footer__social-link')}>
          <SvgIcon name="twitter" />
        </a>

        <a href="https://github.com/nearform" className={resolveClasses('theme@nearform__footer__social-link')}>
          <SvgIcon name="github" />
        </a>

        <a
          href="https://www.youtube.com/channel/UCp2Tsbjd3P8itnBHUNHi82A"
          className={resolveClasses('theme@nearform__footer__social-link')}
        >
          <SvgIcon name="youtube" />
        </a>

        <a
          href="https://www.facebook.com/NearFormLtd"
          className={resolveClasses('theme@nearform__footer__social-link')}
        >
          <SvgIcon name="facebook" />
        </a>

        <div className={resolveClasses('theme@nearform__footer__spacer')} />

        <Svg
          path="@theme/nearform-logo-with-text-right.svg"
          className={resolveClasses('theme@nearform__footer__logo')}
        />
      </footer>

      <Svg path="@theme/nearform-curve-bottom-right.svg" className={resolveClasses('theme@nearform__curve')} />

      <div className={resolveClasses('theme@nearform__npm')}>
        <h2 className={resolveClasses('theme@nearform__npm__title')}>
          Major Contributors to the Open Source Web Platform
        </h2>

        <h3 className={resolveClasses('theme@nearform__npm__header')}>NPM monthly downloads</h3>
        <h1 className={resolveClasses('theme@nearform__npm__value')}>{npm.monthly}</h1>

        <hr className={resolveClasses('theme@nearform__npm__separator')} />

        <h4 className={resolveClasses('theme@nearform__npm__header')}>Represents modules used globally</h4>
        <h1 className={resolveClasses('theme@nearform__npm__value')}>{npm.percentage}</h1>
      </div>
    </SlideWrapper>
  )
}
