import type { VNode } from '@perseveranza-pets/freya/preact'
import type { IconName } from './icon.tsx'
import { cleanCssClasses } from '@perseveranza-pets/freya'
import { Icon } from './icon.tsx'

interface Social {
  name: string
  title: string
  link: string
  icon: IconName
}

interface SocialsProps {
  className: string
  linkClassName: string
  iconClassName: string
}

const name = 'Paolo Insogna'
const regularLinks: Social[] = [
  { name: 'ShogunPanda', title: 'ShogunPanda @ GitHub', icon: 'github', link: 'https://github.com/ShogunPanda' },
  { name: 'pinsogna', title: 'pinsogna @ LinkedIn', icon: 'linkedin', link: 'https://www.linkedin.com/in/pinsogna' },
  { name: 'Website', title: 'Website', icon: 'globe', link: 'https://paoloinsogna.dev' }
]

export function Socials({ className, linkClassName, iconClassName }: SocialsProps): VNode {
  return (
    <nav className={cleanCssClasses(className)}>
      {regularLinks.map(link => (
        <a
          key={link.link}
          target="_blank"
          rel="noreferrer"
          href={link.link}
          title={link.title}
          className={cleanCssClasses(linkClassName)}
        >
          <Icon name={link.icon} className={iconClassName} />
        </a>
      ))}
    </nav>
  )
}

export function Header(): VNode {
  return (
    <header className={cleanCssClasses('header')}>
      <div className={cleanCssClasses('max-width', 'container')}>
        <h1 className={cleanCssClasses('label')}>
          {name}'s <span className={cleanCssClasses('subtitle')}>Talks</span>
        </h1>
        <Socials
          className={cleanCssClasses('socials')}
          linkClassName={cleanCssClasses('link')}
          iconClassName={cleanCssClasses('icon')}
        />
      </div>
    </header>
  )
}

export function Footer(): VNode {
  return (
    <footer className={cleanCssClasses('footer')}>
      ©️ 2023 and above, always with ❤️, <a href="mailto:paolo@cowtech.it">Paolo Insogna</a>
    </footer>
  )
}
