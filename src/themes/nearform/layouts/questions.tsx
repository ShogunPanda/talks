import { SlideProps } from '@freya/generation/models.js'
import { Slide } from '../models.js'
import ImageLayout from './image'

export default function QuestionsLayout(props: SlideProps<Slide>): JSX.Element {
  props.slide.title = 'Questions?'
  props.slide.image = '@theme/questions.webp'
  return <ImageLayout {...props} />
}
