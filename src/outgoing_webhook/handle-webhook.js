import {search} from './search'
import {help} from './help'
import {invalidCommand} from './errors'

export function handleWebhook(bot, message) {
  const [
    _,
    command,
    ...remainder
  ] = message.text.split(' ')
  const params = remainder.join(' ')
  let response = null

  switch (command) {
    case 'search':
      response = search(params)
      break
    case 'help':
      response = help(params)
      break
    default:
      response = invalidCommand(command)
  }

  bot.replyPublic(message, response);
}
