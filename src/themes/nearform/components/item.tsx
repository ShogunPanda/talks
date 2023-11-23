import { type BuildContext } from 'dante'
import { Code, QRCode, SvgIcon, parseContent, resolveImageUrl } from 'freya-slides'
import { Fragment, ReactNode } from 'react'
import { Grid, Item as ItemDefinition } from '../models.js'

interface ItemProps extends ItemDefinition {
  context: BuildContext
  horizontal?: boolean
  talk: string
  theme: string
  children?: ReactNode
  className?: string
}

interface ItemsProps {
  context: BuildContext
  items: ItemDefinition[]
  horizontal?: boolean
  talk: string
  noGap?: boolean
  className?: string
  skipDefaultClasses?: boolean
  skipSpacer?: boolean
}

interface GridsProps {
  context: BuildContext
  grids: Grid | Grid[]
  talk: string
}

export function Item(props: ItemProps): JSX.Element {
  const { context, horizontal, index, icon, image, title, text, qr, code, className, classes, talk, theme, children } =
    props

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

  const imageUrl = image ? resolveImageUrl(theme, talk, image) : undefined

  return (
    <section
      className={context.extensions.expandClasses(
        `theme@item ${horizontal ? 'theme@item--horizontal' : ''} ${className ?? ''} ${itemClassName ?? ''}`
      )}
    >
      {index && (
        <h5
          className={context.extensions.expandClasses(
            `theme@item__index ${horizontal ? 'theme@item__index--horizontal' : ''} ${indexClassName ?? ''}`
          )}
          dangerouslySetInnerHTML={{ __html: parseContent(index) }}
        />
      )}
      {imageUrl && (
        <img
          src={imageUrl}
          className={context.extensions.expandClasses(
            `item__image ${horizontal ? 'theme@item__image--horizontal' : ''} ${imageClassName ?? ''}`
          )}
        />
      )}
      {!imageUrl && icon && (
        <SvgIcon
          name={icon}
          className={context.extensions.expandClasses(
            `theme@item__icon ${horizontal ? 'theme@item__icon--horizontal' : ''} ${iconClassName ?? ''}`
          )}
          theme={theme}
        />
      )}
      {!imageUrl && !icon && qr && (
        <QRCode
          context={context}
          label=""
          data={qr}
          classes={{ code: `theme@item__qr ${horizontal ? 'theme@item__qr--horizontal' : ''} ${qrClassName ?? ''}` }}
        />
      )}

      {!imageUrl && !icon && !qr && code && (
        <Code context={context} {...code} className={context.extensions.expandClasses(codeClassName ?? '')} />
      )}

      {/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
      {!code && (title || text || children) && (
        <div
          className={context.extensions.expandClasses(
            `theme@item__text ${horizontal ? 'theme@item__text--horizontal' : ''} ${textClassName ?? ''}`
          )}
        >
          {title && (
            <h4
              className={context.extensions.expandClasses(
                `theme@item__title ${horizontal ? 'theme@item__title--horizontal' : ''} ${titleClassName ?? ''}`
              )}
              dangerouslySetInnerHTML={{ __html: parseContent(title) }}
            />
          )}
          {text && (
            <p
              className={context.extensions.expandClasses(`theme@item__contents ${contentsClassName ?? ''}`)}
              dangerouslySetInnerHTML={{ __html: parseContent(text) }}
            />
          )}
          {!text && (
            <p className={context.extensions.expandClasses(`theme@item__contents ${contentsClassName ?? ''}`)}>
              {children}
            </p>
          )}
        </div>
      )}
    </section>
  )
}

export function Items({
  context,
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
    <div className={context.extensions.expandClasses(`${classes} ${className ?? ''}`)}>
      {items.filter(Boolean).map((item: ItemDefinition, index: number) => {
        return (
          <Fragment key={`item:${index}`}>
            {!skipSpacer && horizontal && index > 0 && (
              <div className={context.extensions.expandClasses('theme@item__spacer')} />
            )}
            <Item
              context={context}
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

export function Grids({ context, grids, talk }: GridsProps): JSX.Element {
  if (!Array.isArray(grids)) {
    grids = [grids]
  }

  return (
    <div className={context.extensions.expandClasses('flex flex-1 items-center gap-x-0_2sp')}>
      {grids.map((grid: Grid, index: number) => {
        const template = grid.template ?? '1fr_1fr'
        const gap = grid.gap ?? '4ch'

        return (
          <Fragment key={`item:${index}`}>
            {index > 0 && <div className={context.extensions.expandClasses('theme@item__spacer')} />}
            <Items
              context={context}
              items={grid.items}
              horizontal={true}
              talk={talk}
              className={context.extensions.expandClasses(
                `flex-1 grid grid-cols-[${template}] gap-${gap} justify-center items-center`
              )}
              skipSpacer={true}
              skipDefaultClasses={true}
            />
          </Fragment>
        )
      })}
    </div>
  )
}
