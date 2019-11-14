import logger from '../logger'
import MissingValueError from '../../errors/missingValueError'

const checkMissing = async (input) => {
  Object.keys(input).forEach(function (key) {
    if (validateMissing(input[key])) { return }
    logger.error('Error occurred while parsing inputs : One of the values is missing')
    throw new MissingValueError('Invalid user input')
  })
}

function validateMissing (input) {
  if (input === undefined || input === '') { return false }
  return true
}

export default checkMissing
