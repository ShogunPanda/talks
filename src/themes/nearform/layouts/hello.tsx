import { parseContent, resolveImageUrl, SlideProps } from 'freya-slides'
import { SlideWrapper } from '../components/common.js'
import { Item } from '../components/item.js'
import { Slide } from '../models.js'

export default function HelloLayout({ talk, slide, index }: SlideProps<Slide>): JSX.Element {
  const author = talk.document.author

  const name = author.name.split(' ')[0]
  const locationImage = resolveImageUrl('nearform', talk.id, '@theme/location.webp')
  const avatarImage = resolveImageUrl('nearform', talk.id, '@theme/avatar-with-shadow.webp')

  return (
    <SlideWrapper slide={slide} index={index} className="hello grid p-0" defaultLogoColor="white">
      <h1 className="grid-a pt-0_5sp pl-0_5sp mb-0">Hello, I'm {name}!</h1>

      <div className="grid-b w-5sp h-full">
        <img src={locationImage} className="w-full overflow-hidden  ml-1px" />
      </div>

      <div className="grid-c flex flex-col self-center justify-self-center gap-y-3ch">
        <img src={avatarImage} className="self-center w-1_5sp" />

        <Item
          icon="user"
          className="items-center min-h-0"
          talk={talk.id}
          theme="nearform"
          classes={{ icon: 'fill-black' }}
        >
          <strong dangerouslySetInnerHTML={{ __html: parseContent(author.description) }} />
        </Item>

        <Item
          icon="brand-twitter"
          className="items-center min-h-0"
          talk={talk.id}
          theme="nearform"
          classes={{ icon: 'fill-black' }}
        >
          <a
            href={`https://twitter.com/${author.twitter}`}
            dangerouslySetInnerHTML={{ __html: parseContent(author.twitter) }}
          />
        </Item>

        <Item
          icon="brand-github"
          className="items-center min-h-0"
          talk={talk.id}
          theme="nearform"
          classes={{ icon: 'fill-black' }}
        >
          <a
            href={`https://github.com/${author.github}`}
            dangerouslySetInnerHTML={{ __html: parseContent(author.github) }}
          />
        </Item>
      </div>
    </SlideWrapper>
  )
}
