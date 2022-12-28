import { SlideProps } from 'freya-slides'
import { Slide } from '../models.js'
import ImageLayout from './image.js'

export default function QuestionsLayout(props: SlideProps<Slide>): JSX.Element {
  props.slide.title = 'Questions?'
  props.slide.image = '@theme/questions.webp'
  return <ImageLayout {...props} />
}
