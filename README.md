# Stellar

Slack bot that backs up history and makes it searchable.

## Getting started

To run Cooper locally, make sure you have [yarn](https://github.com/yarnpkg/yarn) installed and then do the following:

Run `$ yarn install` to get project dependencies. Then make sure both `$ yarn run tunnel` AND `$ yarn start` are running at the same time.

### Configuration

You will need a file called `secrets.js` in the config folder that contains a bot API token from Slack as well as an outgoing webhook token. Without those, the bot will not run.

Once you have those, make sure `yarn run tunnel` is pointing to a URL that is also listed on your outgoing webhooks integration in slack.
