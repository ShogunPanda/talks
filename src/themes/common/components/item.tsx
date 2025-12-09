import { cleanCssClasses, Code, Image, QRCode, useClient, useSlide } from '@perseveranza-pets/freya/client'
import { Fragment, type ComponentChildren, type VNode } from 'preact'
import { useCallback, useEffect, useMemo, useState } from 'preact/hooks'
import { type Grid, type Item as ItemDefinition, type Items as ItemsDefinition } from '../models.ts'
import { Text } from './common.tsx'
import { SvgIcon } from './icons.tsx'

interface ItemProps extends ItemDefinition {
  horizontal?: boolean
  children?: ComponentChildren | ComponentChildren[]
}

interface ItemsProps {
  items: ItemsDefinition
}

interface GridsProps {
  grids: Grid[]
}

export function Item(props: ItemProps): VNode {
  const { talk, resolveImage } = useClient()

  const { horizontal, index, icon, image, title, text, qr, code, className, children } = props

  const {
    root: rootClassName,
    index: indexClassName,
    icon: iconClassName,
    image: imageClassName,
    title: titleClassName,
    text: textClassName,
    contents: contentsClassName,
    qr: qrClassName,
    code: codeClassName
  } = className ?? {}

  const imageUrl = image ? resolveImage('main', talk.id, image) : undefined

  if (code && codeClassName) {
    code.className ??= {}
    code.className.root = cleanCssClasses(code.className.root, codeClassName)
  }

  return (
    <section className={cleanCssClasses('theme@item', horizontal && 'horizontal', rootClassName)}>
      {index && (
        <h5 className={cleanCssClasses('index', horizontal && 'horizontal', indexClassName)}>
          <Text text={index} />
        </h5>
      )}
      {imageUrl && (
        <Image src={imageUrl} className={cleanCssClasses('image', horizontal && 'horizontal', imageClassName)} />
      )}
      {!imageUrl && icon && (
        <SvgIcon name={icon} className={cleanCssClasses('icon', horizontal && 'horizontal', iconClassName)} />
      )}
      {!imageUrl && !icon && qr && (
        <QRCode
          label=""
          data={qr}
          className={{
            code: cleanCssClasses('qr', horizontal && 'horizontal', qrClassName)
          }}
        />
      )}

      {!imageUrl && !icon && !qr && code && <Code {...code} />}

      {!code && (title || text || children) && (
        <div className={cleanCssClasses('text', horizontal && 'horizontal', textClassName)}>
          {title && (
            <h4 className={cleanCssClasses('title', horizontal && 'horizontal', titleClassName)}>
              <Text text={title} />
            </h4>
          )}
          {text && (
            <p className={cleanCssClasses('contents', contentsClassName)}>
              <Text text={text} />
            </p>
          )}
          {!text && <p className={cleanCssClasses('contents', contentsClassName)}>{children}</p>}
        </div>
      )}
    </section>
  )
}

export function Items({
  items: { entries, horizontal, gap, defaultClasses, spacer, className, sequence }
}: ItemsProps): VNode {
  const { index, previousIndex, navigator, presenter } = useSlide()
  const [step, setStep] = useState<number>(0)

  const gapClass = gap === false ? 'no-gap' : 'with-gap'
  const dispositionClasses = horizontal ? `horizontal ${gapClass}` : `vertical ${gapClass}`

  const validEntries = useMemo(() => entries.filter(Boolean), [entries])
  const visibleEntries = useMemo(() => {
    if (sequence !== true || navigator || typeof window === 'undefined') {
      return validEntries
    }

    if (presenter && index === previousIndex + 1) {
      return validEntries.slice(0, 1)
    }

    // Going backwards, start from the end
    return validEntries.slice(0, step + 1)
  }, [sequence, navigator, presenter, validEntries, index, previousIndex, step])

  const handleNavigation = useCallback(
    (event: Event) => {
      const messageEvent = event as MessageEvent

      const delta = messageEvent.data.index - index
      if (Math.abs(delta) !== 1 || (delta === -1 && step === 0) || (delta === 1 && step === validEntries.length - 1)) {
        // Jump via navigator, or at the edge of the entries, allow it
        return
      }

      messageEvent.data.cancel = true
      setStep(step + delta)
    },
    [step, validEntries, setStep, index]
  )

  useEffect(() => {
    if (sequence !== true || navigator || presenter || typeof window === 'undefined') {
      return
    }

    window.addEventListener('freya:slide:changed', handleNavigation)

    return () => {
      window.removeEventListener('freya:slide:changed', handleNavigation)
    }
  }, [navigator, presenter, sequence, handleNavigation])

  useEffect(() => {
    if (sequence !== true || navigator || presenter || typeof window === 'undefined') {
      return
    }

    setStep(index === previousIndex - 1 ? validEntries.length - 1 : 0)
  }, [index, previousIndex, navigator, presenter, sequence, validEntries, setStep])

  return (
    <div
      className={cleanCssClasses(
        defaultClasses !== false && 'theme@items',
        defaultClasses !== false && dispositionClasses,
        className
      )}
    >
      {visibleEntries.map((item: ItemDefinition, index: number) => {
        return (
          <Fragment key={`item:${index}`}>
            {spacer !== false && horizontal && index > 0 && <div className={cleanCssClasses('spacer')} />}
            <Item horizontal={horizontal} {...item} />
          </Fragment>
        )
      })}
    </div>
  )
}

export function Grids({ grids }: GridsProps): VNode {
  if (!Array.isArray(grids)) {
    grids = [grids]
  }

  return (
    <div className={cleanCssClasses('wrapper')}>
      {grids.map((grid: Grid, index: number) => {
        return (
          <Fragment key={`item:${index}`}>
            {index > 0 && <div className={cleanCssClasses('spacer')} />}
            <Items
              items={{
                entries: grid.entries,
                horizontal: true,
                spacer: false,
                defaultClasses: false,
                sequence: grid.sequence,
                className: cleanCssClasses('theme@items', 'grid', 'default-template', 'default-gap', grid.className)
              }}
            />
          </Fragment>
        )
      })}
    </div>
  )
}
