import { resolveImageUrl, SlideProps, Svg, SvgIcon } from 'freya-slides'
import { SlideWrapper } from '../components/common.js'
import { Slide } from '../models.js'

export default function OramaLayout({ talk, slide, index }: SlideProps<Slide>): JSX.Element {
  const { id } = talk

  const oramaBackground = resolveImageUrl('nearform', id, '@theme/orama-background.webp')
  const oramaTagline = resolveImageUrl('nearform', id, '@theme/orama-tagline.svg')

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className="orama justify-center text-#D5D4DC gap-y-0_4sp"
      style={{ backgroundImage: `url(${oramaBackground}` }}
      skipDecorations={true}
    >
      <Svg theme="nearform" contents="@theme/orama-logo.svg" className="w-1_7sp" />
      {/* TODO@PI: Fix me: <Svg theme="nearform" contents="@theme/orama-tagline.svg" className="w-7_5sp" /> */}
      <img src={oramaTagline} className="w-7sp" />

      <h1 className="block w-6_5sp no-border m-0 font-noto font-size-14pt">
        A <strong>resilient</strong>, <strong>innovative</strong> and <strong>open-source</strong> search experience to
        achieve seamless integration with your infrastructure and data
      </h1>
      <h2 className="flex align-center gap-x-0_1sp font-poppins font-size-10pt text-#B8B6BB">
        <Svg theme="nearform" contents="@theme/orama-twitter.svg" className="w-0_2sp" />
        <Svg theme="nearform" contents="@theme/orama-instagram.svg" className="w-0_2sp" />
        @OramaSearch
      </h2>
    </SlideWrapper>
  )
}
