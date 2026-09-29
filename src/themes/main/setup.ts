import { type BuildContext } from '@perseveranza-pets/dante'
import { type Talk, type Theme } from '@perseveranza-pets/freya'
import { type Slide } from '../common/models.ts'
import { setupServer as setupCommonServer } from '../common/setup.ts'

interface MainTheme extends Theme {
  platformatic: Pick<Slide, 'title' | 'grids'>
}

export async function setupServer (context: BuildContext, theme: MainTheme, talk: Talk): Promise<object> {
  for (const slide of talk.slides as Slide[]) {
    if (slide.layout === 'platformatic') {
      if (talk.document.branding === false) {
        throw new Error(`Talk "${talk.id}" uses the platformatic layout with branding disabled.`)
      }

      slide.title ??= theme.platformatic.title
      // Common setup prepares assets and mutates grids, so each slide needs its own copy.
      slide.grids ??= structuredClone(theme.platformatic.grids)
    }
  }

  return setupCommonServer(context, theme, talk)
}
