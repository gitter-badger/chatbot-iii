const config = require('config')
const request = require('request')

module.exports = function (err, reply) {
  if (err) throw new Error(err)
  request.post({
    url: `https://api.gitter.im/v1/rooms/${config.gitter.roomId}/chatMessages`,
    headers: {
      ['Content-Type']: 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${config.gitter.token}`
    },
    body: {
      "text": reply.string
    },
    json: true
  }, console.error(err))
}
