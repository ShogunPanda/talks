import { Code, type SlideProps } from 'freya-slides'
import { SlideWrapper, Text } from '../components/common.js'
import { type Slide } from '../models.js'

export default function CodeLayout(props: SlideProps<Slide>): JSX.Element {
  const { index, slide, context, theme, talk } = props
  const resolveClasses = context.extensions.freya.resolveClasses

  const {
    title,
    code,
    classes: { slide: className, code: codeClassName, highlight: highlightClassName }
  } = slide

  return (
    <SlideWrapper
      context={context}
      theme={theme}
      talk={talk}
      slide={slide}
      index={index}
      className={resolveClasses(!title && 'theme@code--no-title', className)}
    >
      {title && (
        <h1>
          <Text text={title} />
        </h1>
      )}

      <div className={resolveClasses('theme@code__wrapper', highlightClassName)}>
        <Code context={context} {...code} className={resolveClasses(codeClassName)} />
      </div>
    </SlideWrapper>
  )
}
