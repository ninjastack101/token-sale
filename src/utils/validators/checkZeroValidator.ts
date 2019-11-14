import logger from '../logger'
import ZeroValueError from '../../errors/zeroValueError'

const checkZeroes = async (input) => {
  Object.keys(input).forEach(function (key) {
    if (validateZeroes(input[key])) { return }
    logger.error(`Error occurred while parsing input ${input[key]} : only Non zero allowed`)
    throw new ZeroValueError('Invalid user input')
  })
}

function validateZeroes (input) {
  if (Number(input) === 0) { return false }
  return true
}

export default checkZeroes
