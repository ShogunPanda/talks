import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import type { VNode } from '@perseveranza-pets/freya/preact'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCopy,
  faDisplay,
  faFilePdf,
  faFilePowerpoint,
  faGlobe
} from '@fortawesome/free-solid-svg-icons'
import { cleanCssClasses } from '@perseveranza-pets/freya'

const icons = {
  copy: faCopy,
  'arrow-up-right-from-square': faArrowUpRightFromSquare,
  github: faGithub,
  linkedin: faLinkedin,
  globe: faGlobe,
  display: faDisplay,
  'file-pdf': faFilePdf,
  'file-powerpoint': faFilePowerpoint
}

export type IconName = keyof typeof icons

interface NamedIconProps {
  name: IconName
  className?: string
}

interface DefinedIconProps {
  definition: IconDefinition
  className?: string
}

type IconProps = NamedIconProps | DefinedIconProps

export function Icon(props: IconProps): VNode {
  const { className } = props
  const definition = 'definition' in props ? props.definition : icons[props.name]
  const [width, height, , , paths] = definition.icon

  return (
    <svg
      className={cleanCssClasses('icon', className)}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      focusable="false"
    >
      {(Array.isArray(paths) ? paths : [paths]).map((path, index) => (
        <path key={index} d={path} />
      ))}
    </svg>
  )
}
