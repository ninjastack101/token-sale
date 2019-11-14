import checkMissing from './checkMissingValidator'
import checkInvalid from './checkCharacterValidator'
import checkNegatives from './checkNegativeValidator'
import checkZeroes from './checkZeroValidator'
import checkCurency from './checkCurrencyValidator'
import logger from '../logger'
import of from 'await-of'
const _ = require('lodash')

const validateInputCases = async (input) => {
  const errors = []

  const [checkMissingResult, checkMissingError] = await of(checkMissing(input))
  const [checkInvalidResult, checkInvalidError] = await of(checkInvalid(_.omit(input, 'currencyType')))
  const [checkNegativesResult, checkNegativesError] = await of(checkNegatives(input))
  const [checkZeroesResult, checkZeroesError] = await of(checkZeroes(input))
  const filteredInput = _.pick(input, ['currencyType'])
  const [checkCurencyResult, checkCurencyError] = await of(checkCurency(filteredInput))
  if (checkMissingError !== undefined) { errors.push(checkMissingError) }
  if (checkInvalidError !== undefined) { errors.push(checkInvalidError) }
  if (checkNegativesError !== undefined) { errors.push(checkNegativesError) }
  if (checkZeroesError !== undefined) { errors.push(checkZeroesError) }
  if (checkCurencyError !== undefined) { errors.push(checkCurencyError) }
  if (errors.length !== 0) { input.errors = errors }
  return input
}

export default validateInputCases
