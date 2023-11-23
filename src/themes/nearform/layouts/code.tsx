import { Code, parseContent, type SlideProps } from 'freya-slides'
import { SlideWrapper } from '../components/common.js'
import { type Slide } from '../models.js'

export default function CodeLayout(props: SlideProps<Slide>): JSX.Element {
  const { index, slide, context, theme, talk } = props

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
      className={context.extensions.expandClasses(`${!title ? 'p-0_1sp' : ''} ${className}`)}
    >
      {title && <h1 dangerouslySetInnerHTML={{ __html: parseContent(title) }} />}

      <div className={context.extensions.expandClasses(`theme@code__wrapper ${highlightClassName ?? ''}`)}>
        <Code context={context} {...code} className={context.extensions.expandClasses(codeClassName ?? '')} />
      </div>
    </SlideWrapper>
  )
}
