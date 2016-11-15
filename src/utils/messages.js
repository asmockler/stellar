import chalk from 'chalk'

const errorPrefix = chalk.red.bold('|')
const infoPrefix = chalk.cyan.bold('|')

function getPrefix(prefix) {
  if (!prefix) { return null }

  switch(prefix) {
    case 'error': return errorPrefix;
    case 'info': return infoPrefix;
  }
}

export function errorMessage(message, prefix = null) {
  prefix = getPrefix(prefix) || errorPrefix
  console.log(`${prefix} ${chalk.red(message)}`);
}

export function infoMessage(message, prefix = null) {
  prefix = getPrefix(prefix) || infoPrefix
  console.log(`${prefix} ${chalk.cyan(message)}`);
}

export function plainMessage(message, prefix = null) {
  if (!prefix) {
    throw new Error('No prefix supplied for plainMessage. If you don\'t need a prefix, consider using console.log instead')
  }

  console.log(`${getPrefix(prefix)} ${message}`);
}

export function reallyBadErrorMessage(message, prefix = null) {
  prefix = getPrefix(prefix) || errorPrefix
  console.log(`${prefix} ${chalk.bgRed.white.bold(` ${message} `)}`);
}
