import { Image, cleanCssClasses, useClient, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { Fragment, type VNode } from 'preact'
import { Text } from '../../common/components/common.tsx'
import { Item } from '../../common/components/item.tsx'
import { type Slide } from '../../common/models.ts'
import { SlideWrapper } from '../components/common.tsx'

export default function HelloLayout({ className, style }: SlideProps): VNode {
  const {
    talk: {
      id,
      document: { author: documentAuthor }
    },
    resolveImage
  } = useClient()
  const { slide, index } = useSlide<Slide>()

  const author = slide.options.author ?? documentAuthor

  const name = author.name.split(' ')[0]
  const locationImage = resolveImage('main', id, '@theme/location.png')
  const avatarImage = resolveImage('main', id, '@theme/avatar-with-shadow.png')

  slide.decorations.permalink = 'white'

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={cleanCssClasses('theme@hello', className, slide.className.root)}
      style={style}
      defaultLogoColor="white"
    >
      <h1 className={cleanCssClasses('title')}>
        Hello, I'm <span className={cleanCssClasses('name')}>{name}</span>!
      </h1>

      <aside className={cleanCssClasses('location-wrapper')}>
        <Image src={locationImage} className={cleanCssClasses('location')} />
      </aside>

      <main className={cleanCssClasses('contents')}>
        <section className={cleanCssClasses('description')}>
          <Image src={avatarImage} className={cleanCssClasses('logo')} />

          <Item
            className={{
              root: cleanCssClasses('roles-wrapper', 'item'),
              text: cleanCssClasses('text')
            }}
          >
            <strong className={cleanCssClasses('roles')}>
              {author.roles.map(({ what, where, url }: Record<string, string>, index: number) => {
                return (
                  <Fragment key={`role:${index}`}>
                    <a href={url} className={cleanCssClasses('role company')}>
                      {where}
                    </a>
                    <span className={cleanCssClasses('role description')}>{what}</span>
                    <br />
                  </Fragment>
                )
              })}
            </strong>
          </Item>
        </section>

        <Item
          qr={author.website}
          className={{
            root: cleanCssClasses('social', 'website'),
            qr: cleanCssClasses('qr'),
            contents: cleanCssClasses('text')
          }}
          horizontal={true}
        >
          <a href={author.website} className={cleanCssClasses('link')}>
            <Text text={author.website.replace('https://', '')} />
          </a>
        </Item>

        <Item
          icon="github"
          className={{
            root: cleanCssClasses('social', 'github'),
            icon: cleanCssClasses('icon'),
            contents: cleanCssClasses('text')
          }}
          horizontal={true}
        >
          <a href={`https://github.com/${author.github}`} className={cleanCssClasses('link')}>
            <Text text={author.github} />
          </a>
        </Item>

        <Item
          icon="twitter"
          className={{
            root: cleanCssClasses('social', 'twitter'),
            icon: cleanCssClasses('icon'),
            contents: cleanCssClasses('text')
          }}
          horizontal={true}
        >
          <a href={`https://twitter.com/${author.twitter}`} className={cleanCssClasses('link')}>
            <Text text={author.twitter} />
          </a>
        </Item>

        <Item
          icon="linkedin"
          className={{
            root: cleanCssClasses('social', 'linkedin'),
            icon: cleanCssClasses('icon'),
            contents: cleanCssClasses('text')
          }}
          horizontal={true}
        >
          <a href={`https://linkedin.com/in/${author.linkedin}`} className={cleanCssClasses('link')}>
            <Text text={author.linkedin} />
          </a>
        </Item>
      </main>
    </SlideWrapper>
  )
}
