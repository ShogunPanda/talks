import { Image, useFreya, type SlideProps } from '@perseveranza-pets/freya/client'
import { Fragment } from 'preact'
import { SlideWrapper, Text } from '../components/common.js'
import { Item } from '../components/item.js'
import { type Slide } from '../models.js'

export default function HelloLayout({ slide, index, className }: SlideProps<Slide>): JSX.Element {
  const {
    talk: {
      id,
      document: { author: documentAuthor }
    },
    resolveClasses,
    resolveImage
  } = useFreya()

  const author = slide.options?.author ?? documentAuthor

  const name = author.name.split(' ')[0]
  const locationImage = resolveImage('nearform', id, '@theme/location.webp')
  const avatarImage = resolveImage('nearform', id, '@theme/avatar-with-shadow.webp')

  return (
    <SlideWrapper
      slide={slide}
      index={index}
      className={resolveClasses('theme@hello', className, slide.className)}
      defaultLogoColor="white"
    >
      <h1 className={resolveClasses('theme@hello__title')}>Hello, I'm {name}!</h1>

      <div className={resolveClasses('theme@hello__location-wrapper')}>
        <Image src={locationImage} className={resolveClasses('theme@hello__location')} />
      </div>

      <div className={resolveClasses('theme@hello__contents')}>
        <Image src={avatarImage} className={resolveClasses('theme@hello__logo')} />

        <Item
          className={resolveClasses('theme@hello__roles-wrapper')}
          classes={{ item: 'theme@hello__roles__item', text: 'theme@hello__roles__text' }}
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

        <Item
          qr={author.website}
          className={resolveClasses('theme@hello__social')}
          classes={{
            item: resolveClasses('grid-area-[c]'),
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
          className={resolveClasses('theme@hello__social')}
          classes={{
            item: resolveClasses('grid-area-[e]'),
            icon: resolveClasses('theme@hello__social__icon fill-black'),
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
          className={resolveClasses('theme@hello__social')}
          classes={{
            item: resolveClasses('grid-area-[d]'),
            icon: resolveClasses('theme@hello__social__icon fill-black'),
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
          className={resolveClasses('theme@hello__social')}
          classes={{
            item: resolveClasses('grid-area-[f]'),
            icon: resolveClasses('theme@hello__social__icon stroke-width-2'),
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
      </div>
    </SlideWrapper>
  )
}
