'use strict'

const crypto = require('crypto')

const base64Hash = (input) => {
  const base64Hash = crypto.createHash('sha256').update(input).digest('base64')

  return base64Hash
}

const hexHash = (input) => {
  const hh = crypto.createHash('sha256').update(input).digest('hex')

  return hh
}

module.exports = { base64Hash, hexHash }
