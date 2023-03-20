require('dotenv').config()

var koop = require('koop')({
  ghtoken: process.env.KOOP_GITHUB_TOKEN, // defaults to `process.env.KOOP_GITHUB_TOKEN`
})
var koopGithub = require('@koopjs/provider-github')

koop.register(koopGithub)

koop.server.listen(1338, function () {
  console.log('Listening at http://%s:%d/', this.address().address, this.address().port)
})
