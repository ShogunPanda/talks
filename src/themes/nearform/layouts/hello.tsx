import { parseContent, resolveImageUrl, type SlideProps } from 'freya-slides'
import { Fragment } from 'react'
import { SlideWrapper } from '../components/common.js'
import { Item } from '../components/item.js'
import { type Slide } from '../models.js'

export default function HelloLayout({ context, theme, talk, slide, index }: SlideProps<Slide>): JSX.Element {
  const author = slide.options?.author ?? talk.document.author

  const name = author.name.split(' ')[0]
  const locationImage = resolveImageUrl('nearform', talk.id, '@theme/location.webp')
  const avatarImage = resolveImageUrl('nearform', talk.id, '@theme/avatar-with-shadow.webp')

  return (
    <SlideWrapper
      context={context}
      theme={theme}
      talk={talk}
      slide={slide}
      index={index}
      className={context.extensions.expandClasses('theme@hello')}
      defaultLogoColor="white"
    >
      <h1 className={context.extensions.expandClasses('theme@hello__title')}>Hello, I'm {name}!</h1>

      <div className={context.extensions.expandClasses('theme@hello__location-wrapper')}>
        <img src={locationImage} className={context.extensions.expandClasses('theme@hello__location')} />
      </div>

      <div className={context.extensions.expandClasses('theme@hello__contents')}>
        <img src={avatarImage} className={context.extensions.expandClasses('theme@hello__logo')} />

        <Item
          context={context}
          className={context.extensions.expandClasses('theme@hello__roles-wrapper')}
          talk={talk.id}
          theme="nearform"
          classes={{ item: 'theme@hello__roles__item', text: 'theme@hello__roles__text' }}
        >
          <strong className={context.extensions.expandClasses('theme@hello__roles')}>
            {author.roles.map(({ what, where, url }: Record<string, string>, index: number) => {
              return (
                <Fragment key={`role:${index}`}>
                  <a href={url} className={context.extensions.expandClasses('theme@hello__role__company')}>
                    {where}
                  </a>
                  <span className={context.extensions.expandClasses('theme@hello__role__description')}>{what}</span>
                  <br />
                </Fragment>
              )
            })}
          </strong>
        </Item>

        <Item
          context={context}
          qr={author.website}
          className={context.extensions.expandClasses('theme@hello__social')}
          talk={talk.id}
          theme="nearform"
          classes={{
            item: 'grid-area-[c]',
            qr: 'theme@hello__social__qr',
            contents: 'theme@hello__social__text'
          }}
          horizontal={true}
        >
          <a href={author.website} className={context.extensions.expandClasses('theme@hello__social__link')}>
            {author.website.replace('https://', '')}
          </a>
        </Item>

        <Item
          context={context}
          icon="brand-github"
          className={context.extensions.expandClasses('theme@hello__social')}
          talk={talk.id}
          theme="nearform"
          classes={{
            item: 'grid-area-[e]',
            icon: 'theme@hello__social__icon fill-black',
            contents: 'theme@hello__social__text'
          }}
          horizontal={true}
        >
          <a
            href={`https://github.com/${author.github}`}
            dangerouslySetInnerHTML={{ __html: parseContent(author.github) }}
            className={context.extensions.expandClasses('theme@hello__social__link')}
          />
        </Item>

        <Item
          context={context}
          icon="brand-twitter"
          className={context.extensions.expandClasses('theme@hello__social')}
          talk={talk.id}
          theme="nearform"
          classes={{
            item: 'grid-area-[d]',
            icon: 'theme@hello__social__icon fill-black',
            contents: 'theme@hello__social__text'
          }}
          horizontal={true}
        >
          <a
            href={`https://twitter.com/${author.twitter}`}
            dangerouslySetInnerHTML={{ __html: parseContent(author.twitter) }}
            className={context.extensions.expandClasses('theme@hello__social__link')}
          />
        </Item>

        <Item
          context={context}
          icon="brand-linkedin"
          className={context.extensions.expandClasses('theme@hello__social')}
          talk={talk.id}
          theme="nearform"
          classes={{
            item: 'grid-area-[f]',
            icon: 'theme@hello__social__icon stroke-width-2',
            contents: 'theme@hello__social__text'
          }}
          horizontal={true}
        >
          <a
            href={`https://linkedin.com/in/${author.linkedin}`}
            dangerouslySetInnerHTML={{ __html: parseContent(author.linkedin) }}
            className={context.extensions.expandClasses('theme@hello__social__link')}
          />
        </Item>
      </div>
    </SlideWrapper>
  )
}
