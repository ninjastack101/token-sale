import logger from '../logger'
import InvalidCurrencyError from '../../errors/invalidCurrencyError'
import { currecyTypes } from '../../lib/constants'
import * as _ from 'lodash'

const checkCurency = async (input) => {
  Object.keys(input).forEach(function (key) {
    if (validateCurrency(input[key])) { return }
    logger.error(`Error occurred while parsing inputs : Invalid currency ${input[key]}  encountered`)
    throw new InvalidCurrencyError('Invalid user input')
  })
}

function validateCurrency (input) {
  if (!_.has(currecyTypes, input)) {
    return false
  }
  return true
}

export default checkCurency
