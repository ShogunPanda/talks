import { type SlideProps } from 'freya-slides'
import { SlideWrapper, Text } from '../components/common.js'
import { type Slide } from '../models.js'

export default function RawLayout({ context, theme, talk, slide, index }: SlideProps<Slide>): JSX.Element {
  const {
    content,
    classes: { slide: className, raw: rawClassName }
  } = slide
  const resolveClasses = context.extensions.freya.resolveClasses

  return (
    <SlideWrapper context={context} theme={theme} talk={talk} slide={slide} index={index} className={className}>
      <div className={resolveClasses(rawClassName)}>
        <Text text={content.join('')} />
      </div>
    </SlideWrapper>
  )
}
