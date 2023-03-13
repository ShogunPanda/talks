import { parseContent, QRCode, SlideProps, Svg, resolveImageUrl } from 'freya-slides'
import { SlideWrapper } from '../components/common.js'
import { Slide } from '../models.js'

export default function CoverLayout({ environment, theme, talk, slide, index }: SlideProps<Slide>): JSX.Element {
  const { id: themeId, urls } = theme
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
        className="cover__curve-top-left absolute z-0 top-0 left-0 w-2_76sp fill-nf-brunch-pink"
      />
      <Svg
        theme="nearform"
        contents="@theme/cover-curve-bottom-right.svg"
        className="cover__curve-bottom-right absolute z-0 -bottom-0_01sp right-0 w-5_51sp fill-white"
      />

      <div className="cover__contents grid flex-1">
        <h1
          className="grid-a font-bold no-border mb-0_1sp self-end"
          dangerouslySetInnerHTML={{ __html: parseContent(titleFormatted || title) }}
        />

        <h2 className="grid-b text-nf-brunch-pink font-light mb-0_15sp">
          <strong
            className="inline-block text-white mr-1ch"
            dangerouslySetInnerHTML={{ __html: parseContent(author.name) }}
          />
          <span dangerouslySetInnerHTML={{ __html: parseContent(author.descriptionShort || author.description) }} />
        </h2>

        <div className="grid-c w-2sp h-0_1sp bg-nf-brunch-pink" />

        <h3 className="cover__copyright grid-d self-end text-nf-brunch-pink font-light font-size-10_5pt">
          &#169; Copyright 2022-{new Date().getFullYear()} NearForm Ltd. All Rights Reserved.
        </h3>

        <Svg
          theme="nearform"
          contents="@theme/nearform-logo-with-text-right.svg"
          className="cover__logo grid-e justify-self-end w-2_65sp fill-white"
        />

        <div className="absolute grid top-0_2sp right-0_5sp justify-items-center flex gap-x-0_6sp">
          <QRCode
            data={`${urls[environment]}/${id}`}
            image={resolveImageUrl(themeId, id, '@theme/icons/world.svg')}
            imageRatio={1}
            label="View online"
            classes={{
              code: `w-1sp h-auto text-center ${qrClassName ?? ''}`.trim(),
              qr: 'p-0_05sp rounded-0_05sp text-black bg-white',
              label:
                'inline-block mt-0_1sp font-size-11pt text-white hover:text-white hover:underline visited:text-white',
              image: 'w-30p h-auto'
            }}
          />
          <QRCode
            data={`${urls[environment]}/pdfs/${id}.pdf`}
            image={resolveImageUrl(themeId, id, '@theme/icons/pdf.svg')}
            imageRatio={1}
            label="Download PDF"
            classes={{
              code: `w-1sp h-auto text-center ${qrClassName ?? ''}`.trim(),
              qr: 'p-0_05sp rounded-0_05sp text-black bg-white',
              label:
                'inline-block mt-0_1sp font-size-11pt text-white hover:text-white hover:underline visited:text-white',
              image: 'w-30p h-auto'
            }}
          />
        </div>
      </div>
    </SlideWrapper>
  )
}
