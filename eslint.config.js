import { cowtech } from '@cowtech/eslint-config'

export default [
  ...cowtech,
  {
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    }
  },
  {
    ignores: ['.freya/*']
  }
]
