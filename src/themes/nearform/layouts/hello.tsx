import { Image, useClient, useSlide, type SlideProps } from '@perseveranza-pets/freya/client'
import { Fragment } from 'preact'
import { Accent, SlideWrapper, Text } from '../components/common.js'
import { Item } from '../components/item.js'
import { type Slide } from '../models.js'

export default function HelloLayout({ className, style }: SlideProps): JSX.Element {
  const {
    talk: {
      id,
      document: { author: documentAuthor }
    },
    resolveClasses,
    resolveImage
  } = useClient()
  const { slide, index } = useSlide<Slide>()

  const author = slide.options.author ?? documentAuthor

  const name = author.name.split(' ')[0]
  const locationImage = resolveImage('nearform', id, '@theme/location.webp')
  const avatarImage = resolveImage('nearform', id, '@theme/avatar-with-shadow.webp')

  slide.decorations.permalink = 'white'

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={resolveClasses('theme@hello', className, slide.className.root)}
      style={style}
      defaultLogoColor="white"
    >
      <h1 className={resolveClasses('theme@hello__title')}>
        Hello, I'm <span className={resolveClasses('theme@hello__title__name')}>{name}</span>!<Accent />
      </h1>

      <aside className={resolveClasses('theme@hello__location-wrapper')}>
        <Image src={locationImage} className={resolveClasses('theme@hello__location')} />
      </aside>

      <main className={resolveClasses('theme@hello__contents')}>
        <section className={resolveClasses('theme@hello__description')}>
          <Image src={avatarImage} className={resolveClasses('theme@hello__logo')} />

          <Item
            className={{
              root: resolveClasses('theme@hello__roles-wrapper', 'theme@hello__roles__item'),
              text: resolveClasses('theme@hello__roles__text')
            }}
          >
            <strong className={resolveClasses('theme@hello__roles')}>
              {author.roles.map(({ what, where, url }: Record<string, string>, index: number) => {
                return (
                  <Fragment key={`role:${index}`}>
                    <a href={url} className={resolveClasses('theme@hello__role__company')}>
                      {where}
                    </a>
                    <span className={resolveClasses('theme@hello__role__description')}>{what}</span>
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
            root: resolveClasses('theme@hello__social', 'theme@hello__social__website'),
            qr: resolveClasses('theme@hello__social__qr'),
            contents: resolveClasses('theme@hello__social__text')
          }}
          horizontal={true}
        >
          <a href={author.website} className={resolveClasses('theme@hello__social__link')}>
            <Text text={author.website.replace('https://', '')} />
          </a>
        </Item>

        <Item
          icon="github"
          className={{
            root: resolveClasses('theme@hello__social', 'theme@hello__social__github'),
            icon: resolveClasses('theme@hello__social__icon'),
            contents: resolveClasses('theme@hello__social__text')
          }}
          horizontal={true}
        >
          <a href={`https://github.com/${author.github}`} className={resolveClasses('theme@hello__social__link')}>
            <Text text={author.github} />
          </a>
        </Item>

        <Item
          icon="twitter"
          className={{
            root: resolveClasses('theme@hello__social', 'theme@hello__social__twitter'),
            icon: resolveClasses('theme@hello__social__icon'),
            contents: resolveClasses('theme@hello__social__text')
          }}
          horizontal={true}
        >
          <a href={`https://twitter.com/${author.twitter}`} className={resolveClasses('theme@hello__social__link')}>
            <Text text={author.twitter} />
          </a>
        </Item>

        <Item
          icon="linkedin"
          className={{
            root: resolveClasses('theme@hello__social', 'theme@hello__social__linkedin'),
            icon: resolveClasses('theme@hello__social__icon'),
            contents: resolveClasses('theme@hello__social__text')
          }}
          horizontal={true}
        >
          <a
            href={`https://linkedin.com/in/${author.linkedin}`}
            className={resolveClasses('theme@hello__social__link')}
          >
            <Text text={author.linkedin} />
          </a>
        </Item>
      </main>
    </SlideWrapper>
  )
}
