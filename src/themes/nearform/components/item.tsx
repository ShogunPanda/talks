import { Code, Image, QRCode, useFreya } from '@perseveranza-pets/freya/client'
import { Fragment, type ComponentChildren } from 'preact'
import { type Grid, type Item as ItemDefinition } from '../models.js'
import { Text } from './common.js'
import { SvgIcon } from './icons.js'

interface ItemProps extends ItemDefinition {
  horizontal?: boolean
  children?: ComponentChildren | ComponentChildren[]
  className?: string
}

interface ItemsProps {
  items: ItemDefinition[]
  horizontal?: boolean
  noGap?: boolean
  className?: string
  skipDefaultClasses?: boolean
  skipSpacer?: boolean
}

interface GridsProps {
  grids: Grid[]
}

export function Item(props: ItemProps): JSX.Element {
  const { context, talk, theme, resolveClasses, resolveImage } = useFreya()

  const { horizontal, index, icon, image, title, text, qr, code, className, classes, children } = props

  const {
    item: itemClassName,
    index: indexClassName,
    icon: iconClassName,
    image: imageClassName,
    title: titleClassName,
    text: textClassName,
    contents: contentsClassName,
    qr: qrClassName,
    code: codeClassName
  } = classes ?? {}

  const imageUrl = image ? resolveImage(theme, talk, image) : undefined

  return (
    <section className={resolveClasses('theme@item', horizontal && 'theme@item--horizontal', className, itemClassName)}>
      {index && (
        <h5
          className={resolveClasses('theme@item__index', horizontal && 'theme@item__index--horizontal', indexClassName)}
        >
          <Text text={index} />
        </h5>
      )}
      {imageUrl && (
        <Image
          context={context}
          src={imageUrl}
          className={resolveClasses('item__image', horizontal && 'theme@item__image--horizontal', imageClassName)}
        />
      )}
      {!imageUrl && icon && (
        <SvgIcon
          name={icon}
          className={resolveClasses('theme@item__icon', horizontal && 'theme@item__icon--horizontal', iconClassName)}
        />
      )}
      {!imageUrl && !icon && qr && (
        <QRCode
          context={context}
          label=""
          data={qr}
          classes={{ code: resolveClasses('theme@item__qr', horizontal && 'theme@item__qr--horizontal', qrClassName) }}
        />
      )}

      {!imageUrl && !icon && !qr && code && (
        <Code context={context} {...code} className={resolveClasses(codeClassName)} />
      )}

      {/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
      {!code && (title || text || children) && (
        <div
          className={resolveClasses('theme@item__text', horizontal && 'theme@item__text--horizontal', textClassName)}
        >
          {title && (
            <h4
              className={resolveClasses(
                'theme@item__title',
                horizontal && 'theme@item__title--horizontal',
                titleClassName
              )}
            >
              <Text text={title} />
            </h4>
          )}
          {text && (
            <p className={resolveClasses('theme@item__contents', contentsClassName)}>
              <Text text={text} />
            </p>
          )}
          {!text && <p className={resolveClasses('theme@item__contents', contentsClassName)}>{children}</p>}
        </div>
      )}
    </section>
  )
}

export function Items({
  items,
  horizontal,
  noGap,
  className,
  skipDefaultClasses,
  skipSpacer
}: ItemsProps): JSX.Element {
  const { resolveClasses } = useFreya()

  const gap = noGap ? '0' : '0_2'
  const classes = horizontal ? `theme@items--horizontal gap-x-${gap}sp` : `theme@items--vertical gap-y-${gap}sp`

  return (
    <div className={resolveClasses(!skipDefaultClasses && 'theme@items', !skipDefaultClasses && classes, className)}>
      {items.filter(Boolean).map((item: ItemDefinition, index: number) => {
        return (
          <Fragment key={`item:${index}`}>
            {!skipSpacer && horizontal && index > 0 && <div className={resolveClasses('theme@item__spacer')} />}
            <Item
              horizontal={horizontal}
              {...item}
              classes={{ index: 'text-nf-neon-blue', icon: 'text-nf-neon-blue', ...item.classes }}
            />
          </Fragment>
        )
      })}
    </div>
  )
}

export function Grids({ grids }: GridsProps): JSX.Element {
  const { resolveClasses } = useFreya()

  if (!Array.isArray(grids)) {
    grids = [grids]
  }

  return (
    <div className={resolveClasses('theme@items--grid__wrapper')}>
      {grids.map((grid: Grid, index: number) => {
        const template = grid.template ?? '1fr_1fr'
        const gap = grid.gap ?? '4ch'

        return (
          <Fragment key={`item:${index}`}>
            {index > 0 && <div className={resolveClasses('theme@item__spacer')} />}
            <Items
              items={grid.items}
              horizontal={true}
              className={resolveClasses('theme@items--grid', `grid-cols-[${template}]`, `gap-${gap}`)}
              skipSpacer={true}
              skipDefaultClasses={true}
            />
          </Fragment>
        )
      })}
    </div>
  )
}
