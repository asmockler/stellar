import chalk from 'chalk'
import {errorMessage, infoMessage, plainMessage, reallyBadErrorMessage} from './../utils/messages'

// RTMcallback will be called after the bot attempts to connect to
// Slack and either fails or succeeds.

export function RTMcallback(err, bot, payload) {
  if (err) {
    console.log('');
    errorMessage('⚡️  Oh no!')
    errorMessage('')
    infoMessage('Slack says we can\'t connect for the following reason:', 'error')
    reallyBadErrorMessage(err)
    plainMessage('', 'error')
    plainMessage('This error most likely happened when starting up and was called from the startRTM function in index.js', 'error')
    plainMessage('If you\'re stumped, check out the Botkit documentation on Github.', 'error')
    plainMessage('Keep up the good work you magical, beautiful stallion 🦄', 'error')
    console.log('');
  }
}

// The hello listener will be the first listener to
// fire after the bot connects. Any initialization should
// go here

export function hello(bot, message) {

}
