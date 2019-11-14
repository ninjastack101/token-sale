import checkMissing from './checkMissingValidator'
import checkInvalid from './checkCharacterValidator'
import checkNegatives from './checkNegativeValidator'
import checkZeroes from './checkZeroValidator'
import logger from '../logger'
import of from 'await-of'

const exchangeRateValidator = async (input) => {
  const errors = []
  const [checkMissingResult, checkMissingError] = await of(checkMissing(input))
  const [checkInvalidResult, checkInvalidError] = await of(checkInvalid(input))
  const [checkNegativesResult, checkNegativesError] = await of(checkNegatives(input))
  const [checkZeroesResult, checkZeroesError] = await of(checkZeroes(input))

  if (checkMissingError !== undefined) { errors.push(checkMissingError) }

  if (checkInvalidError !== undefined) { errors.push(checkInvalidError) }

  if (checkNegativesError !== undefined) { errors.push(checkNegativesError) }

  if (checkZeroesError !== undefined) { errors.push(checkZeroesError) }

  if (errors.length !== 0) { input.errors = errors }

  return input
}

export default exchangeRateValidator
