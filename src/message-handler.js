const replyHandler = require('./reply-handler')
const config = require('config')

class MessageHandler {
  constructor (bot) {
    this.bot = bot
    this.handle = function (msg) {
      if (!msg) return
      const { text, fromUser } = msg.model
      if (!text || !fromUser.id) return
      if (fromUser.id === config.gitter.botId) return
      bot.reply(fromUser.id, text, replyHandler)
    }
  }
}

module.exports = MessageHandler
