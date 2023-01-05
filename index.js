const { hexHash, base64Hash } = require('./crypto')
const { bcryptHash, compare } = require('./bcrypt')

const string = 'TEST'
const maxNum = 365
const numOfDigits = 4

const genNumbers = () => {
  try {
    console.log('Generating numbers...')

    const numbers = []
    const replaceZero = (number) =>
      `${number / Math.pow(10, numOfDigits - 1)}`.replace('.', '')

    while (numbers.length < maxNum) {
      const number = Math.floor(Math.random() * Math.pow(10, numOfDigits))
      const parsedNumber = `${
        `${number}`.length < numOfDigits ? replaceZero(number) : number
      }`
      if (!numbers.includes(parsedNumber)) numbers.push(`${parsedNumber}`)
    }

    return JSON.stringify(numbers.sort((a, b) => `${a}`.localeCompare(b)))
  } catch (error) {
    console.error(error)
    return null
  }
}

const main = async () => {
  try {
    const b64Hash = base64Hash(string)
    const hHash = hexHash(string)
    const bcHash = await bcryptHash(string)
    // Crypto
    console.log('--Crypto--')
    console.log(`b64Hash: ${b64Hash}`)
    console.log(`hHash: ${hHash}`)
    // Bcrypt
    console.log('--Bcrypt--')
    console.log(`bcryptHash: ${bcHash}`)
    console.log(await compare(b64Hash, bcHash))
    console.log(await compare(hHash, bcHash))
    const numberHash = await bcryptHash(genNumbers() || string)
    console.log(`numberHash: ${numberHash}`)
    console.log()
  } catch (error) {
    console.error(error)
  }
}

main()
