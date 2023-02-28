import { parseContent, QRCode, SlideProps, Svg } from 'freya-slides'
import { SlideWrapper } from '../components/common.js'
import { Slide } from '../models.js'

export default function CoverLayout({ environment, theme, talk, slide, index }: SlideProps<Slide>): JSX.Element {
  const { urls } = theme
  const {
    id,
    document: { author, title, titleFormatted }
  } = talk

  const {
    classes: { qr: qrClassName }
  } = slide

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className="cover justify-end bg-nf-darkest-blue text-white"
      skipDecorations={true}
    >
      <Svg
        theme="nearform"
        contents="@theme/cover-curve-top-left.svg"
        className="cover__curve-top-left absolute z-0 top-0 left-0 fill-nf-brunch-pink"
      />
      <Svg
        theme="nearform"
        contents="@theme/cover-curve-bottom-right.svg"
        className="cover__curve-bottom-right absolute z-0 -bottom-0_01sp right-0 fill-white"
      />

      <div className="cover__contents grid flex-1">
        <h1
          className="grid-a font-bold no-border mb-0_1sp self-end"
          dangerouslySetInnerHTML={{ __html: parseContent(titleFormatted || title) }}
        />

        <h2 className="grid-b text-nf-brunch-pink font-light mb-0_15sp">
          <strong className="inline-block text-white mr-1ch">{author.name}</strong>
          {author.descriptionShort || author.description}
        </h2>

        <div className="grid-c w-2sp h-0_1sp bg-nf-brunch-pink" />

        <h3 className="cover__copyright grid-d self-end text-nf-brunch-pink font-light">
          &#169; Copyright 2022 NearForm Ltd. All Rights Reserved.
        </h3>

        <Svg
          theme="nearform"
          contents="@theme/nearform-logo-with-text-right.svg"
          className="cover__logo grid-e justify-self-end fill-white"
        />

        <QRCode data={`${urls[environment]}/${id}`} className={`qr cover__qr ${qrClassName ?? ''}`} />
      </div>
    </SlideWrapper>
  )
}
