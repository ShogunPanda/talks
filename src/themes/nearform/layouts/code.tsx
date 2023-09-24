import { Code, parseContent, SlideProps } from 'freya-slides'
import { SlideWrapper } from '../components/common.js'
import { Slide } from '../models.js'

export default function SideLayout(props: SlideProps<Slide>): JSX.Element {
  const { index, slide, environment, theme, talk } = props

  const {
    title,
    code,
    classes: { slide: className, code: codeClassName, highlight: highlightClassName }
  } = slide

  return (
    <SlideWrapper
      environment={environment}
      theme={theme}
      talk={talk}
      slide={slide}
      index={index}
      className={`${!title ? 'p-0_1sp' : ''} ${className}`.trim()}
    >
      {title && <h1 dangerouslySetInnerHTML={{ __html: parseContent(title) }} />}

      <div className={`flex items-center justify-center h-full min-w-40p ${highlightClassName ?? ''}`.trim()}>
        <Code {...code} className={codeClassName ?? ''} />
      </div>
    </SlideWrapper>
  )
}
