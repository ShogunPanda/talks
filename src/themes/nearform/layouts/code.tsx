import { Code, useFreya, type SlideProps } from '@perseveranza-pets/freya/client'
import { SlideWrapper, Text } from '../components/common.js'
import { type Slide } from '../models.js'

export default function CodeLayout({ slide, index, className }: SlideProps<Slide>): JSX.Element {
  const { resolveClasses } = useFreya()

  const {
    title,
    code,
    classes: { slide: slideClassName, code: codeClassName, highlight: highlightClassName }
  } = slide

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={resolveClasses(!title && 'theme@code--no-title', className, slideClassName)}
    >
      {title && (
        <h1>
          <Text text={title} />
        </h1>
      )}

      <div className={resolveClasses('theme@code__wrapper', highlightClassName)}>
        <Code {...code} className={resolveClasses(codeClassName)} />
      </div>
    </SlideWrapper>
  )
}
