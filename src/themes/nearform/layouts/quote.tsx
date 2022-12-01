import { SvgIcon } from '@freya/components/svg'
import { parseContent } from '@freya/generation/generator.js'
import { SlideProps } from '@freya/generation/models.js'
import { SlideWrapper } from '../components/common'
import { Slide } from '../models.js'

export default function SideLayout({ slide, index }: SlideProps<Slide>): JSX.Element {
  const {
    title,
    sentence,
    author,
    options: { light, icons },
    classes: { slide: className }
  } = slide

  const [backgroundColor, sentenceColor, authorColor] = light
    ? ['bg-white', 'text-nf-midnight-blue', 'text-black']
    : ['bg-nf-brunch-pink', 'text-white', 'text-nf-midnight-blue']

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={`${backgroundColor} ${className ?? ''}`}
      defaultLogoColor={light ? 'black' : 'white'}
    >
      <h1
        dangerouslySetInnerHTML={{ __html: parseContent(title ?? 'One last thing™') }}
        className={!light ? 'white' : ''}
      />

      <h1
        className={`flex flex-col flex-1 justify-center max-w-8sp m-0 -mt-0_5sp p-0 no-border ${sentenceColor} line-height-1_3`}
      >
        <span className="block" dangerouslySetInnerHTML={{ __html: parseContent(`&ldquo;${sentence}&rdquo;`) }} />
        <strong className={`font-size-0_6em ${authorColor} italic`}>{author}</strong>
      </h1>

      {icons !== false && (
        <>
          <SvgIcon
            name="bulb"
            className={`absolute z-1 w-2_5sp h-2_5sp -top-0_5sp right-0_5sp stroke-width-0_3 transform rotate-180 ${
              !light ? 'text-white' : ''
            }`}
            theme="nearform"
          />
          <SvgIcon
            name="puzzle-2"
            className={`absolute z-1 w-2_5sp h-2_5sp -bottom-0_5sp -left-0_5sp stroke-width-0_3 ${
              !light ? 'text-white' : ''
            }`}
            theme="nearform"
          />
        </>
      )}
    </SlideWrapper>
  )
}
