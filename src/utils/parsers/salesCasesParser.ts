import { SaleCase } from '../../lib/saleCase'
import { INPUTQUERY, VALID_CASE_LENGTH } from '../../lib/constants'

import logger from '../logger'
import validateInputCases from '../validators/inputQueryValidator'
import MissingValueError from '../../errors/missingValueError'

const salesCasesParser = async (salesCases) => {
  const validatedCases = []

  const promises = salesCases.map(async (salesCase) => {
    let input: string[]
    input = salesCase.split(' ')

    const purchase = caseParser(input)

    logger.info('Validating salesCase Object ')
    const validatedResult = await validateInputCases(purchase)
    if (validatedResult.errors) {
      validatedResult.errors.map((error) => {
        logger.error(error.errors + ' : ' + JSON.stringify(purchase))
      })
    } else {
      validatedCases.push(new SaleCase(purchase))
    }
  })
  await Promise.all(promises)

  return validatedCases
}

const caseParser = (input) => {
  if (input.length !== VALID_CASE_LENGTH) {
    logger.error('Error occurred while parsing inputs : One of the values is missing')
    throw new MissingValueError('Invalid user input')
  }
  const purchase = {
    ethRate: input[INPUTQUERY.ethSaleRate],
    decimals: input[INPUTQUERY.decimalPlaces],
    currencyType: input[INPUTQUERY.purchaseCurrency],
    purchaseAmount: input[INPUTQUERY.purchaseAmount]
  }
  return purchase
}

export default salesCasesParser
