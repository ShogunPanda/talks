import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { type BuildContext } from '@perseveranza-pets/dante'
import {
  filterWhitelistedTalks,
  getAllTalks,
  getTalk,
  setWhitelistedTalks,
  type Command,
  type SetupCLI,
  type Talk
} from '@perseveranza-pets/freya'
import { type Logger } from 'pino'
interface Options {
  only: string
  output: string
}

export const setupCLI: SetupCLI = (program: Command, logger: Logger) => {
  program
    .command('generate-cfp')
    .description('Generates CFP snippets for visible, non-archived talks')
    .option('-O, --output <path>', 'The output JSON file', './snippets/abstracts.json')
    .action(async function (this: Command): Promise<void> {
      try {
        // Reuse Freya's global talk selection option.
        const { only, output }: Options = this.optsWithGlobals()
        setWhitelistedTalks(only)

        const talks = filterWhitelistedTalks({ isProduction: false } as unknown as BuildContext, await getAllTalks())

        const loadedTalks = await Promise.all([...talks].filter(id => id !== 'master').map(id => getTalk(id)))
        const sortedTalks = loadedTalks
          .filter((talk: Talk) => !talk.document.hidden && !talk.document.archived)
          // ISO date strings sort chronologically; undated talks come last.
          .sort((a, b) => (b.document.createdAt ?? '').localeCompare(a.document.createdAt ?? ''))
        const json = []

        let i = 0
        for (const talk of sortedTalks) {
          json.push({
            name: talk.document.title,
            keyword: `cfpa#${++i}`,
            text:
              talk.document.title +
              '\n\n' +
              talk.document.abstract
                .replaceAll(/[ ]+$/gm, '')
                .replaceAll('\n\n', '\u{0001}')
                .replaceAll('\n', '')
                .replaceAll('\u{0001}', '\n\n')
          })
        }

        await writeFile(resolve(process.cwd(), output), JSON.stringify(json, null, 2))
      } catch (error) {
        logger.error(error)
        process.exitCode = 1
      }
    })

  program
    .command('postdeploy')
    .description('Adds project-specific Netlify configuration to the deployment')
    .action(async (): Promise<void> => {
      try {
        let contents = await readFile(resolve(process.cwd(), 'dist/deploy/netlify.toml'), 'utf-8')
        const replacement = await readFile(resolve(process.cwd(), 'netlify.toml'), 'utf-8')
        contents = contents.replace('[[redirects]]', replacement + '\n\n[[redirects]]')
        await writeFile(resolve(process.cwd(), 'dist/deploy/netlify.toml'), contents, 'utf-8')
      } catch (error) {
        logger.error(error)
        process.exitCode = 1
      }
    })
}
