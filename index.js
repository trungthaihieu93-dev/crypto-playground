const crypto = require('crypto')

const string = 'TEST'

const base64Hash = (input) => {
  const base64Hash = crypto.createHash('sha256').update(input).digest('base64')

  return base64Hash
}

const hexHash = (input) => {
  const hh = crypto.createHash('sha256').update(input).digest('hex')

  return hh
}

const main = () => {
  try {
    const b64Hash = base64Hash(string)
    const hHash = hexHash(string)
    console.log(b64Hash)
    console.log(hHash)
  } catch (error) {
    console.error(error)
  }
}

main()
