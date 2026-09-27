import { type BuildContext } from '@perseveranza-pets/dante'
import { filterWhitelistedTalks, getAllTalks, getTalk, setWhitelistedTalks } from '@perseveranza-pets/freya'
import { program, type Command } from 'commander'

interface Options {
  only: string
  token: string
}

async function exportToGoogle(talks: Set<string>, refreshToken: string): Promise<void> {
  const i = 0
  for (const id of talks) {
    const talk = await getTalk(id)
    process._rawDebug(talk)

    // TODO@PIP: Implement the export logic here

    if (1 > 0) {
      break
    }
  }
}

program
  .name('export-to-google')
  .option('-o, --only <string>', 'A comma separated list of talks to build.', '')
  .option('-T, --token', 'The refresh token to use for Google API', process.env.GOOGLE_API_REFRESH_TOKEN || '')
  .addHelpCommand(false)
  .showSuggestionAfterError(true)
  .allowUnknownOption(false)
  .action(async function verifyAction(this: Command): Promise<void> {
    try {
      const { only, token }: Options = this.optsWithGlobals()
      setWhitelistedTalks(only)

      const talks = filterWhitelistedTalks({ isProduction: false } as unknown as BuildContext, await getAllTalks())

      await exportToGoogle(talks, token)
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  })

program.parse()
