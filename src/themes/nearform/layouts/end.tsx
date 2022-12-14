import { resolveImageUrl, SlideProps, Svg } from 'freya-slides'
import { SlideWrapper } from '../components/common.js'
import { Slide } from '../models.js'

export default function EndLayout({ talk, slide, index }: SlideProps<Slide>): JSX.Element {
  const {
    id,
    document: { author }
  } = talk

  const pandaImageUrl = resolveImageUrl('nearform', id, '@theme/panda.webp')

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className="end p-0 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${pandaImageUrl})` }}
      skipDecorations={true}
    >
      <div className="flex-1" />

      <h1 className="callout callout--title bottom-1sp">Thank you!</h1>

      <footer className="w-full min-h-0_7sp px-0_5sp bg-nf-brunch-pink flex items-center">
        <div className="grid w-full text-nf-darkest-blue gap-x-0_3sp gap-y-0_1sp">
          <strong className="grid-a whitespace-nowrap">{author.name}</strong>
          <a className="grid-b whitespace-nowrap !text-nf-darkest-blue" href="https://twitter.com/{{ author.twitter }}">
            @{author.twitter}
          </a>
          <span className="grid-c whitespace-nowrap">{author.descriptionShort}</span>
          <a className="grid-d whitespace-nowrap text-nf-darkest-blue" href="mailto:{{ author.email }}">
            {author.email}
          </a>
          <Svg
            theme="nearform"
            contents="@theme/nearform-logo-with-text-right.svg"
            className="end__logo-with-text grid-e self-center fill-nf-darkest-blue"
          />
        </div>
      </footer>

      <Svg
        theme="nearform"
        contents="@theme/hiring-curve-bottom-right.svg"
        className="end__curve-bottom-right absolute z-1 fill-white"
      />
    </SlideWrapper>
  )
}
