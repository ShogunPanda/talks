import { type Slide as FreyaSlide } from '@perseveranza-pets/freya'

export interface Item {
  index?: string
  icon?: string
  image?: string
  title?: string
  text?: string
  qr?: string
  code?: FreyaSlide['code']
  classes?: {
    item?: string
    index?: string
    icon?: string
    image?: string
    title?: string
    text?: string
    contents?: string
    qr?: string
    code?: string
  }
}

export interface Grid {
  items: Item[]
  template?: string
  gap?: string
}

export interface Slide {
  layout?: string
  title?: string
  subtitle?: string
  content: string[]
  items?: Item[]
  grids?: Grid[]
  image?: string
  code?: FreyaSlide['code']
  highlight?: string
  sentence?: string
  author?: string
  sequence?: string
  icon?: string
  logo?: string
  foreground?: string
  background?: string
  options: {
    light?: boolean
    icons?: boolean
    horizontal?: boolean
    noGap?: boolean
    skipDecorations?: boolean
    skipSpacer?: boolean
    skipDefaultClasses?: boolean
    highlightWidth: number
    author?: Record<string, any>
    quote: {
      primaryIcon?: string
      secondaryIcon?: string
    }
  }
  classes: {
    slide?: string
    title?: string
    subtitle?: string
    content?: string
    raw?: string
    items?: string
    image?: string
    code?: string
    sequence?: string
    icon?: string
    highlight: string
    qr?: string
  }
  notes?: string
}
