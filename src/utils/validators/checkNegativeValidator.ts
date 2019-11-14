import logger from '../logger'
import NegativeValueError from '../../errors/negativeValueError'

const checkNegatives = async (input) => {
  Object.keys(input).forEach(function (key) {
    if (validateNegatives(input[key])) { return }
    logger.error(`Error occurred while parsing input ${input[key]} : Negative values not allowed`)
    throw new NegativeValueError('Invalid user input')
  })
}

function validateNegatives (input) {
  if (Number(input) < 0) { return false }
  return true
}

export default checkNegatives
