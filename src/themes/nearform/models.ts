import { Slide as FreyaSlide } from 'freya-slides'

export interface Item {
  index?: string
  icon?: string
  image?: string
  title?: string
  text?: string
  qr?: string
  classes?: {
    item?: string
    index?: string
    icon?: string
    image?: string
    title?: string
    text?: string
    qr?: string
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
  content: string[]
  items?: Item[]
  grids?: Grid | Grid[]
  image?: string
  code?: FreyaSlide['code']
  highlight?: string
  sentence?: string
  author?: string
  sequence?: string
  icon?: string
  logo?: string
  options: {
    light?: boolean
    icons?: boolean
    horizontal?: boolean
    noGap?: boolean
    skipDecorations?: boolean
    skipSpacer?: boolean
    skipDefaultClasses?: boolean
    highlightWidth: number
  }
  classes: {
    slide?: string
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
