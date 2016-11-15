import {AUTH_TOKEN, OUTGOING_WEBHOOK_TOKEN} from './../config/secrets'
import Botkit from 'botkit'

import {RTMcallback} from './rtm/startup'
import {handleWebhook} from './outgoing_webhook/handle-webhook'
import {handleAmbient} from './rtm/handle-ambient'

// Start up Botkit
var controller = Botkit.slackbot({
  debug: process.env.NODE_ENV !== 'production'
})

// Spawn an RTM bot
var bot = controller.spawn({token: AUTH_TOKEN})
bot.startRTM(RTMcallback)

// Starts listening at 127.0.0.1:8080/slack/receive for webhooks. Only responds
// to requests with the proper OUTGOING_WEBHOOK_TOKEN for security reasons.
controller.setupWebserver(8080, function(err, webserver) {
  controller.createWebhookEndpoints(webserver, OUTGOING_WEBHOOK_TOKEN);
});

// Outgoing webhook will respond to keyword commands in all channels
controller.on('outgoing_webhook', handleWebhook);

// Ambient will record all activity from channels the bot is in
controller.on('ambient', handleAmbient);
