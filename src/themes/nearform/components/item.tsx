import { parseContent, QRCode, resolveImageUrl, SvgIcon } from 'freya-slides'
import { Fragment, ReactNode } from 'react'
import { Grid, Item as ItemDefinition } from '../models.js'

interface ItemProps extends ItemDefinition {
  horizontal?: boolean
  talk: string
  theme: string
  children?: ReactNode
  className?: string
}

interface ItemsProps {
  items: ItemDefinition[]
  horizontal?: boolean
  talk: string
  noGap?: boolean
  className?: string
  skipDefaultClasses?: boolean
  skipSpacer?: boolean
}

interface GridsProps {
  grids: Grid | Grid[]
  talk: string
}

export function Item(props: ItemProps): JSX.Element {
  const { horizontal, index, icon, image, title, text, qr, className, classes, talk, theme, children } = props

  const {
    item: itemClassName,
    index: indexClassName,
    icon: iconClassName,
    image: imageClassName,
    title: titleClassName,
    text: textClassName,
    qr: qrClassName
  } = classes ?? {}

  const imageUrl = image ? resolveImageUrl(theme, talk, image) : undefined

  return (
    <section className={`item ${horizontal ? 'item--horizontal' : ''} ${className ?? ''} ${itemClassName ?? ''}`}>
      {index && (
        <h5
          className={`item__index ${indexClassName ?? ''}`.trim()}
          dangerouslySetInnerHTML={{ __html: parseContent(index) }}
        />
      )}
      {imageUrl && <img src={imageUrl} className={`item__image ${imageClassName ?? ''}`.trim()} />}
      {!imageUrl && icon && (
        <SvgIcon name={icon} className={`item__icon ${iconClassName ?? ''}`.trim()} theme={theme} />
      )}
      {!imageUrl && !icon && qr && <QRCode data={qr} className={`item__qr ${qrClassName ?? ''}`.trim()} />}

      <div className={`item__text ${textClassName ?? ''}`.trim()}>
        {title && (
          <h4
            className={`item__title ${titleClassName ?? ''}`.trim()}
            dangerouslySetInnerHTML={{ __html: parseContent(title) }}
          />
        )}
        {text && (
          <p
            className={`item__contents ${textClassName ?? ''}`.trim()}
            dangerouslySetInnerHTML={{ __html: parseContent(text) }}
          />
        )}
        {!text && <p className={`item__contents ${textClassName ?? ''}`.trim()}>{children}</p>}
      </div>
    </section>
  )
}

export function Items({
  items,
  horizontal,
  talk,
  noGap,
  className,
  skipDefaultClasses,
  skipSpacer
}: ItemsProps): JSX.Element {
  const gap = noGap ? '0' : '0_2'
  const classes = !skipDefaultClasses
    ? `flex ${horizontal ? `flex-1 items-center gap-x-${gap}sp` : `flex-col gap-y-${gap}sp`}`
    : ''

  return (
    <div className={`${classes} ${className ?? ''}`.trim()}>
      {items.filter(Boolean).map((item: ItemDefinition, index: number) => {
        return (
          <Fragment key={`item:${index}`}>
            {!skipSpacer && horizontal && index > 0 && <div className="item__spacer" />}
            <Item
              horizontal={horizontal}
              {...item}
              classes={{ index: 'text-nf-neon-blue', icon: 'text-nf-neon-blue', ...item.classes }}
              talk={talk}
              theme="nearform"
            />
          </Fragment>
        )
      })}
    </div>
  )
}

export function Grids({ grids, talk }: GridsProps): JSX.Element {
  if (!Array.isArray(grids)) {
    grids = [grids]
  }

  return (
    <div className="flex flex-1 items-center gap-x-0_2sp">
      {grids.map((grid: Grid, index: number) => {
        const template = grid.template ?? '1fr,1fr'
        const gap = grid.gap ?? '4ch'

        return (
          <Fragment key={`item:${index}`}>
            {index > 0 && <div className="item__spacer" />}
            <Items
              items={grid.items}
              horizontal={true}
              talk={talk}
              className={`flex-1 grid grid-cols-[${template}] gap-${gap} justify-center items-center`}
              skipSpacer={true}
              skipDefaultClasses={true}
            />
          </Fragment>
        )
      })}
    </div>
  )
}
