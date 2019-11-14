import logger from '../logger'
import InvalidCharacterError from '../../errors/invalidCharacterError'

const checkInvalid = async (input) => {
  Object.keys(input).forEach(function (key) {
    if (validateCharacter(input[key])) { return }
    logger.error(`Error occurred while parsing inputs : Invalid character ${input[key]}  encountered`)
    throw new InvalidCharacterError('Invalid user input')
  })
}

function validateCharacter (input) {
  if (Number.isNaN(Number(input))) {
    return false
  }
  return true
}

export default checkInvalid
