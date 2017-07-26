const config = require('config')
const token = config.gitter.token
const roomId = config.gitter.roomId
const fayeClient = require('./src/faye-client')
const MessageHandler = require('./src/message-handler')
const superscript = require('superscript').default
const path = require('path')

const options = {
  importFile: path.join(__dirname, 'data', 'data.json')
}

superscript.setup(options, (err, bot) => {
  const messageHandler = new MessageHandler(bot)
  fayeClient(token, roomId, messageHandler)
})
