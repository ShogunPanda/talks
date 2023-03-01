import { resolveImageUrl, SlideProps, Svg, SvgIcon } from 'freya-slides'
import { SlideWrapper } from '../components/common.js'
import { Slide } from '../models.js'

export default function HiringLayout({ talk, slide, index }: SlideProps<Slide>): JSX.Element {
  const {
    id,
    document: {
      company: { count, npm }
    }
  } = talk

  const worldImageUrl = resolveImageUrl('nearform', id, '@theme/world.webp')

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className="hiring p-0 justify-between bg-nf-darkest-blue text-white"
      skipDecorations={true}
    >
      <div className="flex flex-col flex-1 place-content-between">
        <header className="flex pt-0_5sp pl-0_5sp items-center">
          <Svg
            theme="nearform"
            contents="@theme/nearform-logo.svg"
            className="h-0_6sp mr-0_2sp justify-self-end fill-white"
          />

          <p>
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
          className="hiring__world flex items-center ml-0_5sp bg-no-repeat bg-contain h-3sp"
          style={{ backgroundImage: `url(${worldImageUrl})` }}
        >
          <h2>Global Delivery Org with {count}+ and counting</h2>
        </div>

        <h1 className="m-0 ml-0_5sp mb-0_1sp text-nf-brunch-pink no-border">We are hiring!</h1>
      </div>

      <footer className="flex items-center w-full min-h-0_7sp px-0_5sp bg-nf-brunch-pink text-nf-darkest-blue">
        <a href="https://nearform.com" className="text-nf-darkest-blue">
          nearform.com
        </a>
        <div className="w-3px h-0_3sp mx-1ch bg-nf-darkest-blue" />
        <span>follow us on</span>

        <a href="https://www.linkedin.com/company/nearform/" className="hiring__social">
          <SvgIcon name="brand-linkedin" theme="nearform" />
        </a>

        <a href="https://twitter.com/nearform" className="hiring__social">
          <SvgIcon name="brand-twitter" theme="nearform" />
        </a>

        <a href="https://github.com/nearform" className="hiring__social">
          <SvgIcon name="brand-github" theme="nearform" />
        </a>

        <a href="https://www.youtube.com/channel/UCp2Tsbjd3P8itnBHUNHi82A" className="hiring__social">
          <SvgIcon name="brand-youtube" theme="nearform" />
        </a>

        <a href="https://www.facebook.com/NearFormLtd" className="hiring__social">
          <SvgIcon name="brand-facebook" theme="nearform" />
        </a>

        <div className="flex flex-1" />

        <Svg
          theme="nearform"
          contents="@theme/nearform-logo-with-text-right.svg"
          className="w-1_8sp justify-end fill-nf-darkest-blue"
        />
      </footer>

      <Svg
        theme="nearform"
        contents="@theme/hiring-curve-bottom-right.svg"
        className="absolute z-1 top-3_02sp left-5_82sp w-4_25sp fill-white"
      />

      <div className="hiring__npm w-2_5sp absolute text-center top-0_5sp right-0_5sp">
        <h2 className="mb-2ch">Major Contributors to the Open Source Web Platform</h2>

        <h3>NPM monthly downloads</h3>
        <h1 className="text-nf-brunch-pink mb-0 no-border">{npm.monthly}</h1>

        <hr className="inline-block h-0 border-dotted border-0 border-t-2 w-2sp my-1ch border-white" />

        <h4 className="m-0">Represents modules used globally</h4>
        <h1 className="text-nf-brunch-pink mb-0 no-border">{npm.percentage}</h1>
      </div>
    </SlideWrapper>
  )
}
