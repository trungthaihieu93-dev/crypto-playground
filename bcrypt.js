'use strict'
const bcrypt = require('bcrypt')

const saltRounds = 10

const bcryptHash = (input) =>
  new Promise((res, rej) => {
    bcrypt.hash(input, saltRounds, (err, hash) => {
      // Store hash in your password DB.
      if (err) {
        rej(err)
      }

      res(hash)
    })
  })

const compare = (input, hash) => bcrypt.compare(input, hash)

module.exports = { bcryptHash, compare }
