export function invalidCommand(command) {
  if (!command) {
    return 'Hi! :wave: How can I help?\n\nDon\'t know what commands to use? Try `tars help`'
  }
  
  return `Couldn't recognize command '${command}'.`
}
