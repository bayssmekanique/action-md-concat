import * as core from '@actions/core'
import ConcatFiles from './concat'

async function run (): Promise < void > {
  try {
    const srcDir = core.getInput('srcDir')
    const limit = core.getInput('limit')
    const destFile = core.getInput('destFile')
    const separator = core.getInput('separator') ?? '\n'

    await ConcatFiles(srcDir, destFile, limit, separator)

    core.debug('Markdown concatenation successful.')
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      core.setFailed(error.message)
    } else {
      core.setFailed('An unknown error occurred.')
    }
    process.exit(1)
  }
}

void run()