import { parseContent, resolveImageUrl, SlideProps } from 'freya-slides'
import { Fragment } from 'react'
import { SlideWrapper } from '../components/common.js'
import { Item } from '../components/item.js'
import { Slide } from '../models.js'

export default function HelloLayout({ environment, theme, talk, slide, index }: SlideProps<Slide>): JSX.Element {
  const author = talk.document.author

  const name = author.name.split(' ')[0]
  const locationImage = resolveImageUrl('nearform', talk.id, '@theme/location.webp')
  const avatarImage = resolveImageUrl('nearform', talk.id, '@theme/avatar-with-shadow.webp')

  return (
    <SlideWrapper
      environment={environment}
      theme={theme}
      talk={talk}
      slide={slide}
      index={index}
      className="hello grid p-0"
      defaultLogoColor="white"
    >
      <h1 className="grid-a pt-0_5sp pl-0_5sp mb-0">Hello, I'm {name}!</h1>

      <div className="grid-b w-5sp h-full">
        <img src={locationImage} className="w-full overflow-hidden  ml-1px" />
      </div>

      <div className="grid-c grid hello__content self-center justify-self-center justify-items-center gap-y-3ch">
        <img src={avatarImage} className="grid-a self-center w-1_5sp" />

        <Item
          className="items-center min-h-0"
          talk={talk.id}
          theme="nearform"
          classes={{ item: 'grid-b font-size-12pt mb-0_4sp', icon: 'fill-black' }}
        >
          <strong className="font-size-1_2em inline-block mx-auto line-height-1_8">
            {author.roles.map(({ what, where, url }: Record<string, string>, index: number) => {
              return (
                <Fragment key={`role:${index}`}>
                  <a href={url} className="inline-block w-1_5sp mr-0_2sp text-right">
                    {where}
                  </a>
                  <span className="font-light">{what}</span>
                  <br />
                </Fragment>
              )
            })}
          </strong>
        </Item>

        <Item
          qr="https://cowtech.it"
          className="items-center min-h-0"
          talk={talk.id}
          theme="nearform"
          classes={{ item: 'grid-c', icon: 'fill-black' }}
          horizontal={true}
        >
          <a href="https://cowtech.it">https://cowtech.it</a>
        </Item>

        <Item
          icon="brand-twitter"
          className="items-center min-h-0"
          talk={talk.id}
          theme="nearform"
          classes={{ item: 'grid-d', icon: 'fill-black' }}
          horizontal={true}
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
          classes={{ item: 'grid-e', icon: 'fill-black' }}
          horizontal={true}
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
